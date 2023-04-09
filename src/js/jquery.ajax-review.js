$.fn.extend({
    ajaxReview: function (options) {
        var defaults = {
            fieldsClear: 'input[type="text"], textarea',
            preloaderClass: 'ajax-loading',
            onSuccess: function (target, data) {
                alert(data.message);
            },
            onError: function (target) {
                alert("Произошла внутренняя ошибка. Пожалуйста перезвоните нам.");
            }
        };
        options = $.extend(defaults, options);
        function getCookie(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
        $(this).on('submit', function (e) {
            var $target = $(e.target),
                $fieldsClear = $target.find(options.fieldsClear),
                $submitBtn = $target.find(":submit");
            var csrftoken = getCookie('csrftoken');
            e.preventDefault();
            $.ajaxSetup({
                headers: {
                    'X-CSRFToken': csrftoken
                }
            });
            $.ajax({
                cache: false,
                type: 'post',
                url: $target.attr('action'),
                dataType: 'json',
                data: $target.serialize(),
                beforeSend: function () {
                    $submitBtn.addClass(options.preloaderClass);
                },
                success: function (data) {
                    $fieldsClear.val('');
                    options.onSuccess(e.target, data);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    options.onError(e.target);
                },
                complete: function () {
                    $submitBtn.removeClass(options.preloaderClass);
                }
            });
        });
    }
});