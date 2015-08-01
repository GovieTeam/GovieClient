/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
        this.bindButtons();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    bindButtons: function () {
        var lostConnectionButton = $('.lost-connection-button');
        lostConnectionButton.unbind('click');
        lostConnectionButton.bind('click', function () {
            alert('lostConnectionButton');
        });

        var gotConnectionButton = $('.got-connection-button');
        gotConnectionButton.unbind('click');
        gotConnectionButton.bind('click', function () {
            app.receivedEvent('online');
        });

        var appReadyButton = $('.app-ready-button');
        appReadyButton.unbind('click');
        appReadyButton.bind('click', function () {
            app.receivedEvent('ready');
        });

        var appLoadingButton = $('.app-loading-button');
        appLoadingButton.unbind('click');
        appLoadingButton.bind('click', function () {
            app.receivedEvent('loading');
        });
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },

    govieApp: new govie.GovieApp(),
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);

        //todo figure out how this works
        if (parentElement) {
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        }
        app.govieApp.react(id);
    }
};
