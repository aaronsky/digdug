"use strict";

var preloadList = [
    {
        name: "characters",
        path: "img/digdug.png",
        type: "png"
    },
    {
        name: "background",
        path: "img/background.png",
        type: "png"
    },
    {
        name: "main",
        path: "sound/main.ogg",
        type: "ogg"
    }
];

var ResourceManager = {
    resources: {},
    getResource: function (name) {
        return this.resources[name];
    },
    loadResource: function (resource) {
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
    },
    preloadContent: function () {
        preloadList.forEach(function (element) {this.loadResource(element); }.bind(this));
    }
};