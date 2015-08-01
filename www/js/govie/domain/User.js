var govie = govie || {};
govie.domain = govie.domain || {};


govie.domain.User = function (serverData) {
    var viewModel = this;

    viewModel.name = serverData.name;

    viewModel.toServerData = function () {
        return {name: viewModel.name};
    };
};