$(document).ready(function() {
    $('#back-form img').on('click', function() {
        $('#booking-form').hide();
    });

    $('#booking-table-button').on('click', function(){
        $('#booking-form').show();
    })
    
    $('#create-account').on('click', function(event) {
        event.preventDefault();
        $('#loyalty-form').hide();
        $('#create-account-form').css('display','flex');
    });
});