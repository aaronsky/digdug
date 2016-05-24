/*
digdug
draw terrain
draw buffer on top of terrain 
draw black square in buffer where player is
draw player
draw enemies

player - 16 x 16 (1 square)
board - 14 squares by 18 squares (224 x 288)
*/

"use strict";

import 'babel-polyfill';
import Game from './managers/game';

class Core {
    constructor() {
        var canvas = document.getElementById('board'),
            context = canvas.getContext('2d'),
            game = new Game(canvas.width, canvas.height);
        game.loop(context);
    }
}

export let core = new Core();