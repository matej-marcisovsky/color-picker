(function () {
    'use strict';

    var Action;
    (function (Action) {
        Action[Action["Capture"] = 0] = "Capture";
        Action[Action["Toggle"] = 1] = "Toggle";
    })(Action || (Action = {}));
    var Action$1 = Action;

    function decToHex(number) {
        return number.toString(16).padStart(2, '0');
    }
    const MAX_DIGITS = 3;
    class Color {
        constructor(r, g, b) {
            this.r = r;
            this.g = g;
            this.b = b;
        }
        get spaces() {
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

    function applyStyle(style, element) {
        for (const prop in style) {
            element.style[prop] = style[prop];
        }
    }
    function createElement(style, tagName = 'div') {
        const element = document.createElement(tagName);
        applyStyle(style, element);
        return element;
    }
    function getColor(x, y, dataUrl) {
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
                resolve(new Color(values[0], values[1], values[2]));
            };
            img.src = dataUrl;
        });
    }

    const BAR_WIDTH = 512;
    const BAR_HEIGHT = 56;
    const BAR_PADDING = 6;
    const PREVIEW_SIZE = BAR_HEIGHT - 2 * BAR_PADDING;

    const Preview = createElement({
        border: '1px solid #ffffff',
        borderRadius: `${BAR_PADDING / 2}px`,
        width: `${PREVIEW_SIZE}px`,
        height: `${PREVIEW_SIZE}px`
    });

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
    const Close = createElement(Object.assign({}, sharedStyle, {
        padding: '4px',
        fontSize: '22px'
    }), 'button');
    Close.textContent = '\u{02a2f}';
    const Hex = createElement(sharedStyle, 'button');
    Hex.addEventListener('click', sharedOnClick);
    const RGB = createElement(sharedStyle, 'button');
    RGB.addEventListener('click', sharedOnClick);

    const Bar = createElement({
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
    const Overlay = createElement({
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

    /// <reference types="./node_modules/@types/chrome" />
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
        if (message.action === Action$1.Toggle) {
            active ? deactivate() : activate();
        }
    });
    Close.addEventListener('click', (event) => {
        event.preventDefault();
        deactivate();
    });
    Overlay.addEventListener('click', (event) => {
        event.preventDefault();
        if (Bar === event.target || Bar.contains(event.target)) {
            return;
        }
        chrome.runtime.sendMessage({ action: Action$1.Capture }, (dataUrl) => {
            getColor(event.clientX, event.clientY, dataUrl).then((color) => {
                applyStyle({ background: color.toRgb() }, Preview);
                Hex.textContent = color.toHex();
                RGB.textContent = color.toRgb() + color.spaces;
            });
        });
    });

}());
