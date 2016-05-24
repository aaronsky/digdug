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
    draw(ctx, frame) {
        if (frame) {
            ctx.drawImage(this.image,
                frame.x,
                frame.y,
                frame.width,
                frame.height,
                this.x,
                this.y,
                this.width,
                this.height);
        } else {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width,
                this.height);
        }
    }
}