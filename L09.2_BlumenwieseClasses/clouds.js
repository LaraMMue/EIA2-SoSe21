"use strict";
var L09Landscape;
(function (L09Landscape) {
    class Cloud {
        constructor() {
            this.position = new L09Landscape.Vector(L09Landscape.randomNum(200, 290), L09Landscape.randomNum(60, 140));
            this.velocity = new L09Landscape.Vector(0, 0);
            this.velocity.random(100, 0);
        }
        move(_timeSlice) {
            let offset = new L09Landscape.Vector(this.velocity.x, 0);
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
            L09Landscape.drawCloud(this.position);
        }
    }
    L09Landscape.Cloud = Cloud;
})(L09Landscape || (L09Landscape = {}));
//# sourceMappingURL=clouds.js.map