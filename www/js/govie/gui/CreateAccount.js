var govie = govie || {};
govie.gui = govie.gui || {};


govie.gui.CreateAccount = function (showLoginOptions, showLogin) {
    var viewModel = this;

    viewModel.email = ko.observable('');
    viewModel.username = ko.observable('');
    viewModel.password = ko.observable('');

    viewModel.emailOk = ko.computed(function () {
        return _.contains(viewModel.email(), "@") && _.contains(viewModel.email(), ".");//todo use regex
    }).extend({rateLimit: 0});

    viewModel.usernameOk = ko.computed(function () {
        return true;//todo verify username not taken
    }).extend({rateLimit: 0});

    viewModel.passwordOk = ko.computed(function () {
        return viewModel.password().length > 8;//todo proper passswordhelp
    }).extend({rateLimit: 0});

    viewModel.back = function () {
        showLoginOptions();
    };

    viewModel.createAccount = function () {
        console.log('creating account: ' + viewModel.email() + ' ' + viewModel.username() + ' ' + viewModel.password());
    };

    viewModel.show = function (element) {
        ko.applyBindings(viewModel, element[0]);
    };

};