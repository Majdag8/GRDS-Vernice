function toggleMenu() {
    const menu = document.getElementById('list-links');
    menu.classList.toggle('open');
}

$(document).ready(function () {
    $('#profile-icon').click(() => {
        $('#login-signup').css('display', 'flex');
        $('#modal-overlay').show();
        $('body').css('overflow', 'hidden');
    })

    $('#create-account').click((event) => {
        event.preventDefault();
        $('#login').css('display', 'none');
        $('#signup').css('display', 'flex');
    })

    $(window).on('click', function (event) {
        if ($(event.target).is('#modal-overlay, #login-signup')) {
            $('#login-signup').css('display', 'none');
            $('#modal-overlay').hide();
            $('body').css('overflow', 'auto');
            $('#booking-form').hide();
        }
    });
});