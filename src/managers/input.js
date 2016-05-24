"use strict";

export var Keys = {
    KEY_A: 65,
    KEY_D: 87,
    KEY_S: 83,
    KEY_W: 68,
    KEY_LEFT: 37,
    KEY_RIGHT: 39,
    KEY_UP: 38,
    KEY_DOWN: 40,
    KEY_SPACE: 32
};

export var ALL_MOVE_KEYS = Object.keys(Keys).map((key) => {
    if (key !== 'KEY_SPACE') {
        return Keys[key];
    }
    return;
});
export var ALL_KEYS = ALL_MOVE_KEYS.concat([Keys.KEY_SPACE]);