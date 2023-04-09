var init = function() {
    var $modal = $('#message-modal'),
        $title = $modal.find('.modal__title'),
        message = {
            onSuccess: function(target, data) {
                if (data.status === true) {}
                $title.html(data.message);
                $.fancybox.open('<div class="message"><p>' + data.message + '</p></div>');
            }
        };
    $('.request-form').ajaxOrder(message);
};
$(document).ready(init);