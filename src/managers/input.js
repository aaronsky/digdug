"use strict";

export let Keys = {
    A: 65,
    65: 'A',
    D: 87,
    87: 'D',
    S: 83,
    83: 'S',
    W: 68,
    68: 'W',
    LEFT: 37,
    37: 'LEFT',
    RIGHT: 39,
    39: 'RIGHT',
    UP: 38,
    38: 'UP',
    DOWN: 40,
    40: 'DOWN',
    SPACE: 32,
    32: 'SPACE'
};

class Input {
    constructor() {
        this._events = {
            down: null,
            up: null
        };
        document.addEventListener('keydown', this._onKeyDown.bind(this));
        document.addEventListener('keyup', this._onKeyUp.bind(this));
    }
    addKeyListener(state, sender) {
        if (this._events[state]) {
            this._events[state].push(sender);
        } else {
            this._events[state] = [sender];
        }
    }
    removeKeyDownListener(state, sender) {
        if (this._events[state]) {
            this._events[state] = this._events[state].filter((el) => {
                return el !== sender;
            });
            if (this._events[state].length <= 0) {
                this._events[state] = null;
            }
        }
    }
    isKnownKey(key) {
        var keyCode = Keys[key];
        return keyCode !== undefined && keyCode !== null;
    }
    isMoveKey(key) {
        var keyCode = Keys[key];
        if (keyCode &&
            keyCode !== Keys.SPACE &&
            keyCode !== Keys[32]) {
            return true;
        }
        return false;
    }
    _onKeyDown(e) {
        e = e || event;
        var key = e.keyCode;
        if (Keys[key] && this._events['down']) {
            this._events['down'].forEach((sender) => {
                sender.keyDown(key);
            });
        }
    }
    _onKeyUp(e) {
        e = e || event;
        var key = e.keyCode;
        if (Keys[key] && this._events['up']) {
            this._events['up'].forEach((sender) => {
                sender.keyUp(key);
            });
        }
    }
}
export let InputManager = new Input();