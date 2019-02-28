/*(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();*/

$(function() {

    /*  validate form  */
    $("form").each(function() {
        $(this).validate({
            rules: {
                FirstName: {
                    required: true,
                    minlength: 3
                },
                LastName: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
                Phone: {
                    required: true
                },
                password: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                FirstName: {
                    required: "Имя не может быть пустым",
                    minlength: jQuery.validator.format("Введите не менее {0} символов.")
                },
                LastName: {
                    required: "Фамилия не может быть пустым",
                    minlength: jQuery.validator.format("Введите не менее {0} символов.")
                },
                email: {
                    required: "Email не может быть пустым",
                    email: "Неверный формат Email"
                },
                Phone: {
                    required: "Телефон не может быть пустым"
                },
                password: {
                    required: "Пароль не может быть пустым",
                    minlength: jQuery.validator.format("Введите не менее {0} символов")
                }
            }
        });
    });
    /*  validate form  */
});