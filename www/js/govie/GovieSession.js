var govie = govie || {};

govie.GovieSession = function () {
    "use strict";
    var viewModel = this,
        shownPage,
        splashScreenElement = $('.govie-splashscreen'),
        loginOptionsElement = $('.govie-login-options'),
        createAccountElement = $('.govie-create-account');

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
        loadPage(splashScreenElement);
    };

    viewModel.showCreateAccount = function () {
        loadPage(createAccountElement);
        new govie.gui.CreateAccount().show(createAccountElement);
    };

    viewModel.showLoginOptions = function () {
        loadPage(loginOptionsElement);
        new govie.gui.LoginOptions(viewModel.showCreateAccount).show(loginOptionsElement);
    };

};