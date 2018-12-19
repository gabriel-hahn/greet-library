(function (global, $) {

    var Greetr = function (firstname, lastName, language) {
        return new Greetr.init(firstname, lastName, language);
    }

    var supportedLangs = ['en', 'es', 'pt'];

    var greetings = {
        en: 'Hello',
        es: 'Hola',
        pt: 'Olá'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        pt: 'Saudações'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión',
        pt: 'Sessão iniciada'
    };

    Greetr.prototype = {

        fullName: function () {
            return this.firstname + ' ' + this.lastName;
        },

        validate: function () {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },

        greeting: function () {
            return greetings[this.language] + ' ' + this.firstname + '!';
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

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

            return this;
        },

        setLang: function (lang) {
            this.language = lang;

            this.validate();

            return this;
        }
    };

    Greetr.init = function (firstname, lastName, language) {
        var self = this;

        self.firstname = firstname || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
