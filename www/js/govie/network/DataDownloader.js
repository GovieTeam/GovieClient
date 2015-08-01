var govie = govie || {};
govie.network = govie.network || {};


govie.network.DataDownloader = function () {
    var viewModel = this;

    viewModel.downloadFriends = function () {
        console.log('downloading friends');
        return [{name: 'roger'}, {name: 'trond'}];//todo implement
    };

    viewModel.downloadSessionDataSegment = function (session) {
        var friends = viewModel.downloadFriends();
        session.friends.friends(_.map(friends, function (friend) {
            return new govie.domain.User(friend);
        }));
    };
};