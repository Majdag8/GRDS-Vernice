$(document).on('click', '#proceed', function () {
    $('#thankYouCard').css({
        display: 'flex',
        zIndex: '10000000',
    });
    $('#modal-overlay').show();
    $('body').css('overflow', 'hidden');
});

$(window).on('click', function (event) {
    if ($(event.target).is('#modal-overlay, #modal')) {
        $('#thankYouCard').hide();
        $('#modal-overlay').hide();
        $('body').css('overflow', 'auto');
    }
});

$('#back-form img').click(() => {
    $('#modal-overlay').hide();
    $('#thankYouCard').hide();
    $('body').css('overflow', 'auto');
    $('#modal').show();
    $('#modal-overlay').show();
    $('body').css('overflow', 'hidden');
    $(".modal-content").css('visibility', 'visible');
    $(".modal").css('z-index', '10000')
});