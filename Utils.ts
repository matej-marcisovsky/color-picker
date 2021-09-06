import Color from "./Color";

export function applyStyle(style, element): void {
  for (const prop in style) {
    element.style[prop] = style[prop];
  }
}

export function createElement(style, tagName = 'div'): HTMLElement {
  const element = document.createElement(tagName);

  applyStyle(style, element);

  return element;
}

export function getColor(x, y, dataUrl): Promise<Color> {
  return new Promise((resolve) => {
    const { innerWidth, innerHeight } = window;
    const canvas = document.createElement('canvas');
    const img = document.createElement('img');

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    img.onload = () => {
      const ctx = canvas.getContext('2d');

      ctx.drawImage(img, 0, 0, innerWidth, innerHeight);

      const values = [...ctx.getImageData(x, y, 1, 1).data];

      resolve(new Color(
        values[0],
        values[1],
        values[2]
      ));
    };

    img.src = dataUrl;
  });
}