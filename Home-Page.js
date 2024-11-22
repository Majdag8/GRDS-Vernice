$(document).ready(function() {
    $('#create-account').on('click', function(event) {
        event.preventDefault();
        $('#loyalty-form').hide();
        $('#create-account-form').css('display','flex');
    });
});