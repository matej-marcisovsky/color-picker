function decToHex(number: number): string {
  return number.toString(16).padStart(2, '0');
}

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

  get spaces(): string {
    let countOfSpaces = 0;

    [this.r, this.g, this.b].forEach((value) => countOfSpaces += MAX_DIGITS - `${value}`.length);

    return '\u{000A0}'.repeat(countOfSpaces);
  }

  toRgb() {
    const { r, g, b } = this;

    return `rgb(${r}, ${g}, ${b})`;
  }

  toHex() {
    const { r, g, b } = this;
    let hex = `#${decToHex(r)}${decToHex(g)}${decToHex(b)}`;

    return hex;
  }
}