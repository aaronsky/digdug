"use strict";

import Sprite from './sprite';
import { ResourceManager } from '../managers/resources';

export default class Terrain extends Sprite {
    constructor() {
        super({
            image: ResourceManager.getResource('background'),
            x: 0,
            y: 0,
            width: 224,
            height: 288
        });
    }
    update() {

    }
    draw(ctx) {
        super.draw(ctx);
    }
}