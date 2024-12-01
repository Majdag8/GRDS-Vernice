$(document).ready(function() {
    $('#booking-table-button').click(() => {
        $('#booking-form').css('display','flex');
        $('#modal-overlay').show();
        $('body').css('overflow', 'hidden');
    })

    $('#back-form img').click(() => {
        $('#modal-overlay').hide();
        $('#booking-form').hide();
        $('body').css('overflow', 'auto');
    });

    $("#homedocopage").click(() => {
        window.location.href = 'Home-Deco.html';
    })
});