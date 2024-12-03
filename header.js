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

    $("#landing button").click(function () {
        window.location.href = "Workshop.html";
    })

    $("#booking-form #decrement").on('click', function () {
        let counter = $('#bookingcounterValue');
        let currentValue = parseInt(counter.text());
        if (currentValue > 1) {
            counter.text(currentValue - 1);
        }
    })

    $("#booking-form #increment").on('click', function () {
        let counter = $('#bookingcounterValue');
        let currentValue = parseInt(counter.text());
        counter.text(currentValue + 1);
    })

    $("#counter #decrement").on('click', function (event) {
        let counter = event.target.nextElementSibling;
        let currentValue = parseInt(counter.textContent);
        if (currentValue > 1) {
            counter.textContent = currentValue - 1;
        }
    })

    $("#counter #increment").on('click', function (event) {
        let counter = event.target.previousElementSibling;
        let currentValue = parseInt(counter.textContent);
        counter.textContent = currentValue + 1;
    })

    $(document).on('click', '#login button', function () {

        $('#profile').css({
            display: 'flex',
            zIndex: '10000000',
        });

        $('#modal-overlay').show();
        $('body').css('overflow', 'hidden');
        $('#login-signup').hide();
    });

    $(window).on('click', function (event) {
        if ($(event.target).is('#modal-overlay')) {
            $('#login-signup').css('display', 'none');
            $('#profile').css('display', 'none');
            $('#modal-overlay').hide();
            $('body').css('overflow', 'auto');

        }
    });

    $(window).on('click', function (event) {
        if ($(event.target).is('#profile #back-form img')) {

            $('#login-signup').css({
                "display": "flex",
                "z-index": "10000"
            });

            $('#modal-overlay').show()

            $('#profile').css('display', 'none');

            $('body').css({
                "overflow": "hidden"
            });

            $(".modal-content").hide();

        }
    });
});

