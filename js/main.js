/*
digdug
draw terrain
draw buffer on top of terrain 
draw black square in buffer where player is
draw player
draw enemies

player - 14 x 14 (1 square)
board - 14 squares by 18 squares (196 x 252)
*/

"use strict";

var Core = (function () {
    var instance;
    function initInstance() {
        var canvas = document.getElementById("board"),
            context = canvas.getContext('2d'),
            game = Object.create(Game.prototype);
        return {
            canvas: canvas,
            context: context,
            game: game
        }
    }

    return {
        getInstance: function() {
            if (!instance) instance = initInstance();
            return instance;
        }
    };
}());