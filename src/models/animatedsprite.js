/*
 options {
    x
    y
    
    frameData: {
        origin_X
        origin_Y
        frame_W
        frame_H
        chunk_W
        chunk_H
    }
 }
 */

"use strict";

import Sprite from './sprite';

export default class AnimatedSprite extends Sprite {
    constructor(options) {
        if (options === undefined) {
            throw ('insufficient parameters in animated sprite');
        }
        if (options.frameData === undefined) {
            throw ('not enough information on frame generation.');
        }
        if (options.frameData.chunk_W % options.frameData.frame_W !== 0) {
            throw ('invalid chunk or frame width');
        }
        if (options.frameData.chunk_W === options.frameData.frame_W) {
            throw ('maybe use a static sprite?');
        }
        super(options);
        this.width = options.frameData.frame_W;
        this.height = options.frameData.frame_H;
        this.spriteData = {
            originX: options.frameData.origin_X,
            originY: options.frameData.origin_Y,
            chunkW: options.frameData.chunk_W,
            chunkH: options.frameData.chunk_H
        };
        this.chunkWidth = options.frameData.chunk_W;
        this.chunkHeight = options.frameData.chunk_Y;

        this.frameIndex = 0;
        this.frameCount = this.spriteData.chunkW / this.width;
    }
    update() {
        super.update();
        this.frameIndex += 1;
        if (this.frameIndex >= this.frameCount) {
            this.frameIndex = 0;
        }
    }
    draw(ctx) {
        super.draw(ctx, {
            x: this.frameIndex * this.width + this.spriteData.originX,
            y: this.spriteData.originY,
            width: this.width,
            height: this.height
        });
    }
}