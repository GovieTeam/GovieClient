var govie = govie || {};
govie.gui = govie.gui || {};


govie.gui.CreateAccount = function () {
    var viewModel = this;

    viewModel.email = ko.observable('');
    viewModel.username = ko.observable('');
    viewModel.password = ko.observable('');

    viewModel.createAccount = function () {
        console.log('creating account: ' + viewModel.email + ' ' + viewModel.username + ' ' + viewModel.password);
    };

    viewModel.show = function () {
        ko.applyBindings(viewModel, $('.govie-create-account')[0]);
    };

};