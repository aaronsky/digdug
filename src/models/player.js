"use strict";

import { ALL_KEYS, ALL_MOVE_KEYS } from '../managers/input';
import AnimatedSprite from './animatedsprite';
import { ResourceManager } from '../managers/resources';

var Directions = {
    RIGHT: 0,
    UP: 1,
    LEFT: 2,
    DOWN: 3
};

var speed = 2;

export default class Player extends AnimatedSprite {
    constructor() {
        super({
            image: ResourceManager.getResource('characters'),
            x: 112,
            y: 144,
            frameData: {
                origin_X: 0,
                origin_Y: 0,
                frame_W: 16,
                frame_H: 16,
                chunk_W: 32,
                chunk_H: 16
            }
        });
        document.addEventListener("keydown", (e) => { this.keyRespond(e); });
        document.addEventListener("keyup", (e) => {
            e = e || event;
            if (ALL_KEYS.indexOf(e.keyCode) === -1) {
                return;
            }
            if (e.keyCode === 32) {
                this.isPumping = false;
            } else if (ALL_MOVE_KEYS.indexOf(e.keyCode) !== -1) {
                this.isMoveKeyDown = false;
                ResourceManager.getResource('main').pause();
            }
        });
        this.currentDirection = Directions.RIGHT;
        this.isPumping = false;
        this.directionChanged = false;
        this.isMoveKeyDown = false;
    }
    keyRespond(e) {
        e = e || event; //IE Compatibility
        if (e.keyCode === 32) {
            this.isPumping = true;
        }
        if (ALL_MOVE_KEYS.indexOf(e.keyCode) !== -1) {
            this.isMoveKeyDown = true;
        }
        if ((e.keyCode === 37 || e.keyCode === 65) && this.currentDirection !== Directions.LEFT) {
            this.currentDirection = Directions.LEFT;
            this.directionChanged = true;
        } else if ((e.keyCode === 38 || e.keyCode === 87) && this.currentDirection !== Directions.UP) {
            this.currentDirection = Directions.UP;
            this.directionChanged = true;
        } else if ((e.keyCode === 39 || e.keyCode === 68) && this.currentDirection !== Directions.RIGHT) {
            this.currentDirection = Directions.RIGHT;
            this.directionChanged = true;
        } else if ((e.keyCode === 40 || e.keyCode === 83) && this.currentDirection !== Directions.DOWN) {
            this.currentDirection = Directions.DOWN;
            this.directionChanged = true;
        }
    }
    update() {
        super.update();
        if (this.directionChanged) {
            this.spriteData.originX = this.currentDirection * 32;
            this.directionChanged = false;
        }
        if (this.isPumping && !(ResourceManager.getResource('main').paused)) {
            ResourceManager.getResource('main').pause();
        }
        if (!this.isPumping && this.isMoveKeyDown) {
            if (ResourceManager.getResource('main').paused) {
                ResourceManager.getResource('main').play();
            }
            if (this.currentDirection === Directions.LEFT) {
                this.x -= speed;
            } else if (this.currentDirection === Directions.RIGHT) {
                this.x += speed;
            } else if (this.currentDirection === Directions.UP) {
                this.y -= speed;
            } else if (this.currentDirection === Directions.DOWN) {
                this.y += speed;
            }
        }
    }
    draw(ctx) {
        super.draw(ctx);
    }
}