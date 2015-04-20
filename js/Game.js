"use strict";

function Game(width, height) {
    this.stageWidth = width;
    this.stageHeight = height - 16;
    ResourceManager.preloadContent();
    this.terrain = new Terrain();
    this.player = new Player();
}

var fps = 10;
var interval = 1000 / fps;
var start = Date.now();
var lag = 0;

Game.prototype.loop = function (ctx) {
    window.requestAnimationFrame(function () {this.loop(ctx); }.bind(this), ctx.canvas);
    var current = Date.now(),
        elapsed = current - start;
    start = current;
    lag += elapsed;
    
    while (lag >= interval) {
        this.update();
        lag -= interval;
    }
    
    var lagOffset = lag / interval;
    this.draw(ctx, lagOffset);
};

Game.prototype.update = function () {
    this.player.update();
    this.checkEdges(this.player);
};

Game.prototype.draw = function (ctx, delta) {
    ctx.clearRect(0, 0, 224, 288);
    this.terrain.draw(ctx);
    this.player.draw(ctx, delta);
    ctx.font = 'normal 6pt emulogic';
    ctx.fillStyle = '#FFF';
    ctx.fillText('ROUND', 190, 280);
    ctx.fillText('1', 215, 287);
};

Game.prototype.checkEdges = function (sprite) {
    if (sprite.x < 0) {
        sprite.x = 0;
    } else if (sprite.x >= this.stageWidth - sprite.width) {
        sprite.x = this.stageWidth - sprite.width;
    }
    if (sprite.y < 0) {
        sprite.y = 0;
    } else if (sprite.y >= this.stageHeight - sprite.height) {
        sprite.y = this.stageHeight - sprite.height;
    }
};