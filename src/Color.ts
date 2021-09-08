const MAX_DIGITS = 3;

export default class Color {
  r: number;
  g: number;
  b: number;

  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  toRgb() {
    const { r, g, b } = this;

    return `rgb(${r}, ${g}, ${b})`;
  }

  toHex() {
    const { r, g, b } = this;
    let hex = `#${this.decToHex(r)}${this.decToHex(g)}${this.decToHex(b)}`;

    return hex;
  }

  private decToHex(number: number): string {
    return number.toString(16).padStart(2, '0');
  }
}