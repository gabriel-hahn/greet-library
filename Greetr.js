(function (global, $) {

    var Greetr = function (firstname, lastName, language) {
        return new Greetr.init(firstname, lastName, language);
    }

    Greetr.init = function (firstname, lastName, language) {
        var self = this;

        self.firstname = firstname || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }

}(window, jQuery));
