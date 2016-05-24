export default class Sprite {
    constructor(options) {
        this.image = options.image;
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || this.image.width;
        this.height = options.height || this.image.height;
    }
    update() {

    }
    draw(ctx, options) {
        var args = [];
        options = options || {};
        args.push(options.image || new Image());
        args.push(options.sx || options.dx || options.x || 0);
        args.push(options.sy || options.dy || options.y || 0);
        if (options.sWidth)
            args.push(options.sWidth);
        if (options.sHeight)
            args.push(options.sHeight);
        if (options.sx !== undefined && options.dx !== undefined)
            args.push(options.dx);
        if (options.sy !== undefined && options.dy !== undefined)
            args.push(options.dy);
        if (options.sWidth !== undefined && options.dWidth !== undefined)
            args.push(options.dWidth);
        if (options.sHeight !== undefined && options.dHeight !== undefined)
            args.push(options.dHeight);

        ctx.drawImage.apply(ctx, args);
    }
}