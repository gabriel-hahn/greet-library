var g = G$('Gabriel', 'Hahn', 'en');

$('#login').click(function () {
    var loginGrtr = G$('Gabriel', 'Hahn');

    $('#loginDiv').hide();

    // Example (en): Logged in: Gabriel Hahn
    // Message: Greetings, Gabriel Hahn
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
