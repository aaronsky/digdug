"use strict";

import AnimatedSprite from './animatedsprite';
import { Keys, InputManager } from '../managers/input';
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
        this.currentDirection = Directions.RIGHT;
        this.isPumping = false;
        this.directionChanged = false;
        this.isMoveKeyDown = false;
        InputManager.addKeyListener('down', this);
        InputManager.addKeyListener('up', this);
    }
    keyDown(key) {
        if (key === Keys.SPACE) {
            this.isPumping = true;
        }
        if (InputManager.isMoveKey(key)) {
            this.isMoveKeyDown = true;
        }
        if ((key === Keys.LEFT || key === Keys.A) && this.currentDirection !== Directions.LEFT) {
            this.currentDirection = Directions.LEFT;
            this.directionChanged = true;
        } else if ((key === Keys.UP || key === Keys.D) && this.currentDirection !== Directions.UP) {
            this.currentDirection = Directions.UP;
            this.directionChanged = true;
        } else if ((key === Keys.RIGHT || key === Keys.W) && this.currentDirection !== Directions.RIGHT) {
            this.currentDirection = Directions.RIGHT;
            this.directionChanged = true;
        } else if ((key === Keys.DOWN || key === Keys.S) && this.currentDirection !== Directions.DOWN) {
            this.currentDirection = Directions.DOWN;
            this.directionChanged = true;
        }
    }
    keyUp(key) {
        if (!InputManager.isKnownKey(key)) {
            return;
        }
        if (key === Keys.SPACE) {
            this.isPumping = false;
        } else if (InputManager.isMoveKey(key)) {
            this.isMoveKeyDown = false;
            ResourceManager.getResource('main').pause();
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