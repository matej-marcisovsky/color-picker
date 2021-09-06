/// <reference types="./node_modules/@types/chrome" />

import Action from './Action';

export default class Tab {
  id: number;
  private injectPromise: Promise<void>;

  constructor(id: number) {
    this.id = id;

    this.inject();
  }

  private inject(): void {
    this.injectPromise = chrome.scripting.executeScript({
      target: {
        tabId: this.id
      },
      files: ['Content.js']
    }).then(() => {
      return;
    });
  }

  toggle(): void {
    this.injectPromise.then(
      () => {
        chrome.tabs.sendMessage(this.id, { action: Action.Toggle });
      },
      (error) => {
        chrome.notifications.create({
          message: error.message,
          silent: true,
          title: 'Reload the page and try again.',
          type: 'basic',
          iconUrl: 'icon48.png'
        });
      }
    );
  }
}
