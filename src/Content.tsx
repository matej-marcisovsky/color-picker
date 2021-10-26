/// <reference types="../node_modules/@types/chrome" />

import { render } from "preact";

import Action from "./Action";

import App from "./component/App";

const useEyeDropper = 'EyeDropper' in window;

let active = false;
let placeholder = null;
let root = null;

function activate() {
  active = true;
  placeholder = document.createElement('div');
  document.body.appendChild(placeholder);
  root = render(<App onDeactivate={deactivate} useEyeDropper/>, placeholder);
}

function deactivate() {
  active = false;
  render(null, placeholder, root);
  document.body.removeChild(placeholder);
}

activate();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === Action.Toggle) {
    active ? deactivate() : activate();
  }

  sendResponse(true);
});
