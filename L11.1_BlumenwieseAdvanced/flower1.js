"use strict";
var L11_1_Advanced;
(function (L11_1_Advanced) {
    class Flower1 extends L11_1_Advanced.Flower {
        constructor(_position) {
            super();
            this.color = "red";
            this.fps = 10;
        }
        displayNectarLevel() {
            L11_1_Advanced.showNectar(this.position, Flower1.degree, this.color, this.fps);
            L11_1_Advanced.crc2.save();
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.strokeStyle = this.color;
            L11_1_Advanced.crc2.lineWidth = 5;
            L11_1_Advanced.crc2.lineCap = "round";
            L11_1_Advanced.crc2.arc(this.position.x + 2, this.position.y + 7, 10, 0, 360);
            L11_1_Advanced.crc2.stroke();
            L11_1_Advanced.crc2.closePath();
            L11_1_Advanced.crc2.restore();
        }
        draw() {
            L11_1_Advanced.drawFlower1(-10, -L11_1_Advanced.canvas.height);
        }
    }
    L11_1_Advanced.Flower1 = Flower1;
})(L11_1_Advanced || (L11_1_Advanced = {}));
//# sourceMappingURL=flower1.js.map