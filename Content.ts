/// <reference types="./node_modules/@types/chrome" />

import Action from "./Action";
import { Preview } from "./Preview";
import { Bar, Overlay } from "./App";
import { Close, Hex, RGB } from "./Button";
import { applyStyle, getColor } from "./Utils";
import Color from "./Color";

const defaultColor = new Color(255, 255, 255);
let active = false;

function activate() {
  active = true;
  document.body.appendChild(Overlay);
  applyStyle({ background: defaultColor.toHex() }, Preview);
  Hex.textContent = defaultColor.toHex();
  RGB.textContent = defaultColor.toRgb();
}

function deactivate() {
  active = false;
  document.body.removeChild(Overlay);
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === Action.Toggle) {
    active ? deactivate() : activate();
  }
});

Close.addEventListener('click', (event) => {
  event.preventDefault();

  deactivate();
});

Overlay.addEventListener('click', (event) => {
  event.preventDefault();

  if (Bar === event.target || Bar.contains(event.target as Node)) {
    return;
  }

  chrome.runtime.sendMessage({ action: Action.Capture }, (dataUrl) => {
    getColor(event.clientX, event.clientY, dataUrl).then((color) => {
      applyStyle({ background: color.toRgb() }, Preview);

      Hex.textContent = color.toHex();
      RGB.textContent = color.toRgb() + color.spaces;
    });
  });
});


