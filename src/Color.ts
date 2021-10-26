const MAX_DIGITS = 3;

export default class Color {
  r: number;
  g: number;
  b: number;

  static fromHex(hexString: string): Color {
    hexString = hexString.replace('#', '');

    return new Color(
      parseInt(hexString.slice(0, 2), 16),
      parseInt(hexString.slice(2, 4), 16),
      parseInt(hexString.slice(4, 6), 16)
    );
  }

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