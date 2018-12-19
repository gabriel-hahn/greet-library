; (function (global, $) {

    // 'new' an object
    var Greetr = function (firstname, lastName, language) {
        return new Greetr.init(firstname, lastName, language);
    }

    // Hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['en', 'es', 'pt'];

    // Informal Greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola',
        pt: 'Olá'
    };

    // Formal Greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        pt: 'Saudações'
    };

    // Logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión',
        pt: 'Sessão iniciada'
    };

    Greetr.prototype = {

        // 'this' refers to the calling object at execution time
        fullName: function () {
            return this.firstname + ' ' + this.lastName;
        },

        // Check that is a valid language
        // References the externally inaccessible 'supportedLangs' within the closure
        validate: function () {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },

        // Retrieve messages from object by referring to properties using [] syntax
        greeting: function () {
            return greetings[this.language] + ' ' + this.firstname + '!';
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // Chainable mathods return their own containing object
        greet: function (formal) {
            var msg;

            // If undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            // Make chainable
            return this;
        },

        setLang: function (lang) {

            // Set the language
            this.language = lang;

            // Validate
            this.validate();

            // Make chainable
            return this;
        },

        HTMLGreeting: function (selector, formal) {

            if (!$) {
                throw 'JQuery not loaded';
            }

            if (!selector) {
                throw 'Missing JQuery selector';
            }

            // Determine the message
            var msg;

            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            // Inject the message in the chosen place in the DOM
            $(selector).html(msg);

            // Make chainable
            return this;
        }
    };

    // The actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function (firstname, lastName, language) {
        var self = this;

        self.firstname = firstname || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();
    }

    // Trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    // 'Attach' our Greetr to the global object, and provide a shorthang '$G' for ease our poor fingers :)
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
