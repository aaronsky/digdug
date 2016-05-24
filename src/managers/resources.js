"use strict";

var preloadList = [
    {
        name: "characters",
        path: "images/digdug.png",
        type: "png"
    },
    {
        name: "background",
        path: "images/background.png",
        type: "png"
    },
    {
        name: "main",
        path: "sounds/main.ogg",
        type: "ogg"
    }
];

class Resources {
    constructor() {
        this.resources = {};
    }
    getResource(name) {
        return this.resources[name];
    }
    loadResource(resource) {
        if (this.resources[resource.name] === undefined) {
            if (resource.type === "png") {
                this.resources[resource.name] = new Image();
                this.resources[resource.name].src = resource.path;
            } else if (resource.type === "ogg") {
                this.resources[resource.name] = new Audio(resource.path);
                this.resources[resource.name].loop = true;
                this.resources[resource.name].load();
            }
            
        }
    }
    preloadContent() {
        preloadList.forEach((element) => {
            this.loadResource(element);
        });
    }
}

export let ResourceManager = new Resources();