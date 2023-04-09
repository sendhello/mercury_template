function getOptions(data) {
    var options = '';
    $.each(data, function (url, heading) {
        options += '<option value="' + url + '">' + heading + '</option>';
    });
    return options;
}


var init = function () {
    var $form = $('.configurator_form'),
        $equipmentSelect = $('#id_equipment'),
        $pageSelect = $('#id_page'),
        pageUrlTemplate = '/equipment/page/<equipment_id>/list/';

    $equipmentSelect.on('change', function () {
        var pageUrl = pageUrlTemplate.replace('<equipment_id>', $(this).val());

        $.ajax({
            type: 'get',
            url: pageUrl,
            dataType: 'json',
            success: function (data) {
                $pageSelect.html(getOptions(data));
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(textStatus);
            }
        });
    });

    $equipmentSelect.change();

    $form.on('submit', function (e) {
        e.preventDefault();

        var href = $pageSelect.val();
        if (href) {
            window.location.href = $pageSelect.val();
        }
    });
};

$(document).ready(init);