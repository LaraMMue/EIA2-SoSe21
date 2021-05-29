"use strict";
var L09Landscape;
(function (L09Landscape) {
    class Bee {
        constructor() {
            this.position = new L09Landscape.Vector(L09Landscape.randomNum(150, 250), L09Landscape.randomNum(300, 400));
        }
        move(_timeSlice) {
            L09Landscape.crc2.restore();
            this.velocity = new L09Landscape.Vector(200, 350);
            this.velocity.random(L09Landscape.randomNum(-1000, 1000), L09Landscape.randomNum(-600, 600));
            let offset = new L09Landscape.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeSlice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09Landscape.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09Landscape.crc2.canvas.height;
            if (this.position.x > L09Landscape.crc2.canvas.width)
                this.position.x -= L09Landscape.crc2.canvas.width;
            if (this.position.y > L09Landscape.crc2.canvas.height)
                this.position.y -= L09Landscape.crc2.canvas.height;
        }
        draw() {
            L09Landscape.drawBee(this.position);
        }
    }
    L09Landscape.Bee = Bee;
})(L09Landscape || (L09Landscape = {}));
//# sourceMappingURL=bees.js.map