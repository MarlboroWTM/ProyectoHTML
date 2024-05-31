$(document).ready(function() {
    $("#loginForm").on("submit", function(event) {
        event.preventDefault();

        // Ocultar Los mensajes de error
        $(".error").hide();

        // Validar los campos :3
        var isValid = true;

        var username = $("#username").val().trim();
        if (username === "") {
            $("#usernameError").show();
            isValid = false;
        }

        var password = $("#password").val().trim();
        if (password === "") {
            $("#passwordError").show();
            isValid = false;
        }

        if (isValid) {
            alert("Formulario válido. Enviando datos...");
        }
        window.location.href = "principal.html";
    });
});