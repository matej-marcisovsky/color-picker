import { createElement } from "./Utils";
import { Preview } from "./Preview";
import { Close, Hex, RGB } from "./Button";
import { BAR_PADDING, BAR_WIDTH, BAR_HEIGHT } from "./Constants";

export const Bar = createElement({
  position: 'absolute',
  top: '16px',
  left: `calc(50% - (${BAR_WIDTH}px / 2))`,
  display: 'flex',
  borderRadius: `${BAR_PADDING}px`,
  padding: `0 ${BAR_PADDING}px`,
  width: `${BAR_WIDTH}px`,
  height: `${BAR_HEIGHT}px`,
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#101518',
  cursor: 'default'
});

export const Overlay = createElement({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  zIndex: '9999',
  cursor: 'crosshair'
});

Bar.appendChild(Preview);
Bar.appendChild(RGB);
Bar.appendChild(Hex);
Bar.appendChild(Close);
Overlay.appendChild(Bar);
