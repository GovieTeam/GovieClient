var govie = govie || {};
govie.gui = govie.gui || {};


govie.gui.LoginOptions = function (showCreateAccount) {
    var viewModel = this;

    viewModel.chooseCreateAccount = function () {
        showCreateAccount();
    };

    viewModel.chooseLogin = function () {
        console.log('Login chosen');
    };

    viewModel.show = function (element) {
        ko.applyBindings(viewModel, element[0]);
    };

};