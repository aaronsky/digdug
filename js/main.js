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

var Core = (function () {
    var instance;
    function initInstance() {
        var canvas = document.getElementById("board"),
            context = canvas.getContext('2d'),
            game = new Game(canvas.width, canvas.height);
        
        game.loop(context);
        
        return {
            canvas: canvas,
            context: context,
            game: game
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = initInstance();
            }
            return instance;
        }
    };
}());
Core.getInstance();