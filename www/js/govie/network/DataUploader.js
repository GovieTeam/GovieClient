var govie = govie || {};
govie.network = govie.network || {};


govie.network.DataUploader = function () {
    var viewModel = this;

    viewModel.uploadLikes = function () {
        console.log('uploading likes');
    };

    viewModel.uploadSessionDataSegment = function () {
        viewModel.uploadLikes();
    };
};