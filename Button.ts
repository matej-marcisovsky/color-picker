import { createElement } from "./Utils";

const sharedOnClick = (event) => {
  event.preventDefault();

  navigator.clipboard.writeText(event.target.innerText.trim());
};
const sharedStyle = {
  color: '#ffffff',
  fontFamily: 'monospace',
  fontSize: '16px',
  margin: '0',
  padding: '0',
  border: '0',
  background: 'transparent',
  cursor: 'pointer'
};

export const Close = createElement(
  Object.assign(
    {},
    sharedStyle,
    {
      padding: '4px',
      fontSize: '22px'
    }
  ),
  'button'
);
Close.textContent = '\u{02a2f}';

export const Hex = createElement(sharedStyle, 'button');
Hex.addEventListener('click', sharedOnClick);

export const RGB = createElement(sharedStyle, 'button');
RGB.addEventListener('click', sharedOnClick);
