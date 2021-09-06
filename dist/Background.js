(function () {
    'use strict';

    var Action;
    (function (Action) {
        Action[Action["Capture"] = 0] = "Capture";
        Action[Action["Toggle"] = 1] = "Toggle";
    })(Action || (Action = {}));
    var Action$1 = Action;

    /// <reference types="./node_modules/@types/chrome" />
    class Tab {
        constructor(id) {
            this.id = id;
            this.inject();
        }
        inject() {
            this.injectPromise = chrome.scripting.executeScript({
                target: {
                    tabId: this.id
                },
                files: ['Content.js']
            }).then(() => {
                return;
            });
        }
        toggle() {
            this.injectPromise.then(() => {
                chrome.tabs.sendMessage(this.id, { action: Action$1.Toggle });
            }, (error) => {
                chrome.notifications.create({
                    message: error.message,
                    silent: true,
                    title: 'Reload the page and try again.',
                    type: 'basic',
                    iconUrl: 'icon48.png'
                });
            });
        }
    }

    /// <reference types="./node_modules/@types/chrome" />
    const tabs = new Map();
    chrome.action.onClicked.addListener(({ id }) => {
        if (!tabs.has(id)) {
            tabs.set(id, new Tab(id));
        }
        const tab = tabs.get(id);
        tab.toggle();
    });
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (!sender.tab) {
            return;
        }
        if (message.action === Action$1.Capture) {
            chrome.tabs.captureVisibleTab(sender.tab.windowId, {
                format: 'png'
            }).then((dataUrl) => sendResponse(dataUrl), (error) => {
                chrome.notifications.create({
                    message: error.message,
                    silent: true,
                    title: 'You can pick color only twice per second.',
                    type: 'basic',
                    iconUrl: 'icon48.png'
                });
            });
            return true;
        }
    });

}());
