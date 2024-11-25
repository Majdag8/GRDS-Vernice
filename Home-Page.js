$(document).ready(function() {
    $('#back-form img').on('click', function() {
        $('#modal-overlay').hide();
        $('#booking-form').hide();
    });

    $('#booking-table-button').on('click', function(){
        $('#booking-form').css('display','flex');
        $('#modal-overlay').show();
    })
    
    $('#create-account').on('click', function(event) {
        event.preventDefault();
        $('#loyalty-form').hide();
        $('#create-account-form').css('display','flex');
    });

    $("#homedocopage").click(() => {
        window.location.href = 'Home-Deco.html';
    })


});