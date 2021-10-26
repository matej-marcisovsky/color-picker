(function () {
  'use strict';

  var Action;
  (function (Action) {
      Action[Action["Capture"] = 0] = "Capture";
      Action[Action["Toggle"] = 1] = "Toggle";
  })(Action || (Action = {}));
  var Action$1 = Action;

  /// <reference types="../node_modules/@types/chrome" />
  chrome.action.onClicked.addListener(({ id: tabId }) => {
      chrome.tabs.sendMessage(tabId, { action: Action$1.Toggle }, (response) => {
          if (chrome.runtime.lastError && !response) {
              chrome.scripting.executeScript({
                  target: {
                      tabId
                  },
                  files: ['Content.js']
              });
          }
      });
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

})();
