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

    $(document).on('click', '#signup button', function () {

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

    $("#list-icons li:nth-child(3) img").click(() => {
        window.location.href = 'cart.html';
    })

});

const profilePicture = document.getElementById("profilePicture");
const photoUpload = document.getElementById("photo-upload");
const photoUploadBtn = document.getElementById("photo-upload-btn");

// Trigger the hidden file input when the button is clicked
photoUploadBtn.addEventListener("click", function () {
    photoUpload.click();
});

// Handle file selection and update the profile picture
photoUpload.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            profilePicture.src = e.target.result;
            profilePicture.style.width = "326px";
            profilePicture.style.height = "326px";
            profilePicture.style.objectFit = "cover";
            profilePicture.style.borderRadius = "50%";
        };

        reader.readAsDataURL(file); // Read the selected file as a data URL
    }
});
