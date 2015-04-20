"use strict";

function Terrain() {
    this.groundImage = ResourceManager.getResource('background');
}

Terrain.prototype.update = function () {
};

Terrain.prototype.draw = function (ctx) {
    ctx.drawImage(this.groundImage, 0, 0);
};