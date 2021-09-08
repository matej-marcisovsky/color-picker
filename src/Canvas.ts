import Color from "./Color";

export default class Canvas {
  private canvas: HTMLCanvasElement;
  private drawPromise: Promise<void>;

  get width() {
    return this.canvas.width;
  }

  set width(value: number) {
    this.canvas.width = value;
  }

  get height() {
    return this.canvas.height;
  }

  set height(value: number) {
    this.canvas.height = value;
  }

  constructor(width: number, height: number) {
    this.canvas = document.createElement('canvas');

    this.width = width;
    this.height = height;
  }

  getColor(x, y): Promise<Color> {
    const ctx = this.canvas.getContext('2d');
    const values = [...ctx.getImageData(x, y, 1, 1).data];

    return this.drawPromise.then(() => new Color(
      values[0],
      values[1],
      values[2]
    ));
  }

  setDataUrl(dataUrl: string): void {
    const img = document.createElement('img');

    this.drawPromise = new Promise((resolve) => {
      img.onload = () => {
        const ctx = this.canvas.getContext('2d');
  
        ctx.drawImage(img, 0, 0, this.width, this.height);

        resolve();
      };
    });

    img.src = dataUrl;
  }
}
