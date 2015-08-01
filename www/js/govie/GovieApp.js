var govie = govie || {};

govie.GovieApp = function () {
    "use strict";
    var viewModel = this,
        hasNewer = true,
        hasOlder = true,
        serverHasOlderData = function () {
            //todo implement
            return hasOlder;
        },
        serverHasNewerData = function () {
            //todo implement
            return hasNewer;
        };

    viewModel.dataUploader = new govie.network.DataUploader();

    viewModel.dataDownloader = new govie.network.DataDownloader();

    viewModel.userSession = new govie.GovieSession();

    viewModel.gotConnection = function () {
        if (serverHasOlderData()) {
            viewModel.dataUploader.uploadSessionDataSegment(viewModel.userSession);
        }
        if (serverHasNewerData()) {
            viewModel.dataDownloader.downloadSessionDataSegment(viewModel.userSession);
        }
    };

    viewModel.react = function (event) {
        if (event === 'online') {
            viewModel.gotConnection();
        } else if (event === 'loading') {
            viewModel.userSession.showSplash();
        } else if (event === 'ready') {
            viewModel.userSession.showLogin();
        }
    };

}