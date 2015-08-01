var govie = govie || {};
govie.gui = govie.gui || {};


govie.gui.Login = function () {
    var viewModel = this;

    viewModel.username = ko.observable('');
    viewModel.password = ko.observable('');
    viewModel.strong = ko.computed(function () {
        return viewModel.password().length > 8;
    });

    viewModel.show = function () {
        ko.applyBindings(viewModel, $('.govie-login')[0]);
    };

};