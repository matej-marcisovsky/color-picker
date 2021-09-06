/// <reference types="./node_modules/@types/chrome" />

import Action from "./Action";
import Tab from "./Tab";

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
