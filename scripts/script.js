window.onload = function () {

    new WOW().init();

    $(".single-item").slick({
        slidesToShow: 1,
        infinite: true,
        speed: 1500,
        fade: true,
        slide: "div",
        cssEase: "linear",
        autoplay: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    autoplay: true
                }
            }
        ]
    });

    $('.accordion').accordion({
        heightStyle: 'content',
        header: '> .accordion-item > .accordion-header'
    });

    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image'

    });

    $('body').on('input', '.input-number', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });


    $(".validate").validate({
        rules: {
            inputName: {
                required: true
            },
            inputSurname: "required",
            inputTel: {
                required: true
            },
            inputCity: "required",
            inputZip: {
                required: true,
                rangelength: [6, 6]
            },
            inputAddress: "required"
        },
        messages: {
            inputName: "Заполните поле Имя.",
            inputSurname: "Заполните поле Фамилия.",
            inputTel: "Заполните поле Телефон.",
            inputCity: "заполните поле Страна.",
            inputZip: {
                required: "Заполните поле Индекс.",
                rangelength: "Поле Индекс должно содержать 6 чисел."
            },
            inputAddress: "Заполните поле Адрес"
        },
        invalidHandler: function (event, validator) {
            let errors = validator.numberOfInvalids();
            if (errors) {
                let firstInvalidField = validator.errorList[0];
                let errorMessage = firstInvalidField.message;
                alert(errorMessage);
            }
        },
            submitHandler: function () {
                    $('#form').html("<div id='message'></div>");
                    $('#message').html("<h2 class='wow animate__animated animate__heartBeat text-center'>Спасибо за заказ. <span class='badge'><img id='checkmark' src='../images/rb.png'/></span></h2>")
                        .append("<p class='wow animate__animated animate__heartBeat'>Мы свяжемся с вами в ближайшее время!  </p>")
                        .hide()
                        .fadeIn(500, function () {
                        });
                    return false;

            }
    });
}






