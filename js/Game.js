"use strict";

function Game() {
    this.terrain = new Terrain();
}

Game.prototype.loop = function (ctx) {
    window.requestAnimationFrame(function () {this.loop(ctx); });
};

Game.prototype.update = function () {
};

Game.prototype.draw = function (ctx) {
    this.terrain.draw(ctx);
};