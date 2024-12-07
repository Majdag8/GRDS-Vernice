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
});