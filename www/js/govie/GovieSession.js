var govie = govie || {};

govie.GovieSession = function () {
    "use strict";
    var viewModel = this,
        shownPage;

    viewModel.ratings = {ratings: ko.observableArray([]), updated: new Date()};
    viewModel.friends = {friends: ko.observableArray([]), updated: new Date()};

    viewModel.friendsText = ko.computed(function () {
        return viewModel.friends.friends().length;
    });

    function loadPage (page) {
        if (shownPage) {
            shownPage.hide();
        }
        shownPage = page;
        shownPage.fadeIn(200);
    }

    viewModel.showSplash = function () {
        loadPage($('.govie-splashscreen'));
    };

    viewModel.showLogin = function () {
        loadPage($('.govie-login'));
        new govie.gui.Login().show();
    };

};