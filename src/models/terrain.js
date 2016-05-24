"use strict";

import Sprite from './sprite';
import { ResourceManager } from '../managers/resources';

export default class Terrain extends Sprite {
    constructor() {
        super({
            image: ResourceManager.getResource('background'),
            x: 0,
            y: 0
        });
    }
    update () {
        
    }
    draw (ctx) {
        super.draw(ctx, this.groundImage, 0, 0);
    }
}