$(document).ready(function () {
    const workshopsContainer = $('#workshopsCards');

    $.getJSON("data.json", function (data) {
        data.workshops.forEach(function (workshop) {
            const workshopCard = $('<div>').addClass('workshop-card');

            const img = $('<img>')
                .attr('src', workshop.image)
                .attr('alt', workshop.name)
                .css('position', 'relative');

            const line = $('<div>').addClass('line');

            const date = $('<div>')
                .addClass('date')
                .html(`
                    <span>${workshop.day}</span>
                    <span>${workshop.dayNumer}</span>
                    <span>${workshop.month}</span>
                `);

            const card = $('<div>').addClass('card');
            card.append(line).append(date);

            const details = $('<div>').addClass('details');

            const name = $('<div>').addClass('name').text(workshop.name);
            if (workshop.name === "Sculpting Workshop") {
                name.css('color', '#E9B034');
            }

            const seats = $('<div>').addClass('seats').text(workshop.seats);
            if (workshop.name === "Sculpting Workshop") {
                seats.css('color', '#E9B034');
            }

            details.append(name).append(seats);

            const bookNowButton = $('<button>')
                .addClass('book-now')
                .text('Book Now')
                .on('click', function () {
                    $('#modal-info').empty();

                    $('#modal-image').attr('src', workshop.image);
                    $('#modal-seats').text(workshop.seats);
                    $('#modal-name').text(workshop.name)

                    if (workshop.name === "Pottery workshop") {

                        if (!$("#modal-info #price").length) {
                            $("#modal-info").append($("<span id='price'>").text("$45"));
                        }

                        if (!$("#modal-info #essentials").length) {
                            $("#modal-info").append
                                ($("<span id = 'essentials'>").text("Essentials for the Pottery"));

                            const essentialsBtns = $("<div id='essentalsBtn'>");
                            essentialsBtns.append(
                                $("<button>").text("Towel").css({
                                    "width": "70.84px"
                                }),
                                $("<button>").text("Gloves").css({
                                    "width": "70.84px"
                                }),
                                $("<button>").text("pottery tools").css({
                                    "width": "127.68px"
                                })
                            )

                            $("#modal-info").append(essentialsBtns);

                            const descriptionContainer = $("<div id='descriptionContainer'>");
                            descriptionContainer.append(
                                $("<div id = 'descriptionarrow'>").css(({
                                    "width": "100%",
                                    "display": "flex",
                                    "justify-content": "space-between",
                                    "align-items": "center"
                                })).append(
                                    $("<span id = 'description'>").text("Description"),
                                    $('<i class="fa-solid fa-arrow-down" id="arrowDown"></i>')
                                )
                            )
                            const descriptionText = $("<p id = 'descriptionPotterry'>").
                                text(
                                    "Join our 2-hour pottery workshop at Vernice and create your own unique piece with expert guidance and provided materials."
                                )

                            descriptionContainer.append(descriptionText);

                            $(document).on("click", "#descriptionContainer i", function () {

                                const descriptionText = $(this).closest("#descriptionContainer").find("p");
                                descriptionText.slideToggle();

                                const arrowIcon = $(this);

                                if (arrowIcon.hasClass("fa-arrow-down")) {
                                    arrowIcon.removeClass("fa-arrow-down").addClass("fa-arrow-up");
                                } else {
                                    arrowIcon.removeClass("fa-arrow-up").addClass("fa-arrow-down");
                                }
                            });


                            $("#modal-info").append(descriptionContainer);

                            $("#modal-info").append(
                                $("<div class='popupLine'>")
                            );



                            const detailsContainer = $("<div id='detailsContainer'>");
                            detailsContainer.append(
                                $("<span id = 'additionalDetails'>").text("Additional Details"),
                                $('<i class="fa-solid fa-arrow-down" id="arrowDown"></i>')
                            )
                            $("#modal-info").append(detailsContainer);

                            $("#modal-info").append(
                                $("<div class='popupLine'>")
                            );

                            const cancellationContainer = $("<div id='cancellationContainer'>");
                            cancellationContainer.append(
                                $("<span id = 'cancellationPolicy'>").text("Cancellation Policy "),
                                $('<i class="fa-solid fa-arrow-down" id="arrowDown"></i>')
                            )
                            $("#modal-info").append(cancellationContainer);


                            const reserveContainer = $("<div id='reserveContainer'>");


                            reserveContainer.append(
                                $("<span>").text("seats").css({
                                    "width": "39px",
                                    "height": "23px",
                                    "color": "#53524F",
                                    "font-size": "15.57px",
                                    "line-height": "23.36px",
                                    "font-weight": "400",
                                    "text-align": "center"
                                }),

                                $("<div id='input'>").css({
                                    "width": "90.31px",
                                    "height": "23.36px",
                                    "color": "#53524F",
                                    "display": "flex",
                                    "justify-content": "space-around",
                                    "align-items": "center",
                                    "border": "1px solid #53524F",
                                    "border-radius": "14.01px"
                                }).append(
                                    $("<button>").text("-").css({
                                        "width": "6px",
                                        "height": "23px",
                                        "font-weight": "400",
                                        "font-size": "15.57px",
                                        "line-height": "23.36px",
                                        "text-align": "center",
                                        "border": "0",
                                        "outline": "none"
                                    }).on('click', function () {
                                        let counter = $('#counter');
                                        let currentValue = parseInt(counter.text());
                                        if (currentValue > 1) {
                                            counter.text(currentValue - 1); // Decrease the value
                                        }
                                    }),

                                    $("<span id='counter'>").text("1").css({
                                        "width": "9px",
                                        "height": "23px",
                                        "font-weight": "400",
                                        "font-size": "15.57px",
                                        "text-align": "center",
                                        "line-height": "23.36px"
                                    }),

                                    $("<button>").text("+").css({
                                        "width": "9px",
                                        "height": "23px",
                                        "font-weight": "400",
                                        "font-size": "15.57px",
                                        "line-height": "23.36px",
                                        "text-align": "center",
                                        "border": "0",
                                        "outline": "none"
                                    }).on('click', function () {
                                        let counter = $('#counter');
                                        let currentValue = parseInt(counter.text());
                                        counter.text(currentValue + 1); // Increase the value
                                    })
                                ),

                                $("<span id = 'totalPrice'>").text("Total: $45").css({

                                }),

                                $("<button id = 'proceed'>").text("Proceed")
                            );

                            $("#modal-info").append(reserveContainer);

                        }
                    }
                    else {
                        console.log(workshop.name);
                    }

                    $('#modal').show();
                    $('#modal-overlay').show();
                    $('body').css('overflow', 'hidden');
                    $(".modal-content").css('visibility', 'visible');
                    $(".modal").css('z-index', '10000');
                });

            card.append(details).append(bookNowButton);

            workshopCard.append(img).append(card);

            workshopsContainer.append(workshopCard);

            $(window).on('click', function (event) {
                if ($(event.target).is('#modal-overlay, #modal')) {
                    $('#modal').hide();
                    $('#modal-overlay').hide();
                    $('body').css('overflow', 'auto');
                }
            });
        });
    }).fail(function (error) {
        console.error("Error fetching workshops data:", error);
    });
});