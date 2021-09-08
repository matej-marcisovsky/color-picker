/// <reference types="../node_modules/@types/chrome" />

import Action from "./Action";

chrome.action.onClicked.addListener(({ id: tabId }) => {
  chrome.tabs.sendMessage(tabId, { action: Action.Toggle }, (response) => {
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

  if (message.action === Action.Capture) {
    chrome.tabs.captureVisibleTab(
      sender.tab.windowId, {
        format: 'png'
      }
    ).then(
      (dataUrl) => sendResponse(dataUrl),
      (error) => {
        chrome.notifications.create({
          message: error.message,
          silent: true,
          title: 'You can pick color only twice per second.',
          type: 'basic',
          iconUrl: 'icon48.png'
        });
      }
    );

    return true;
  }
});
