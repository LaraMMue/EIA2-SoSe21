"use strict";
var L11_1_Advanced;
(function (L11_1_Advanced) {
    class Flower {
        constructor() {
            let numX = L11_1_Advanced.randomNum(20, 1100);
            let numY = L11_1_Advanced.randomNum(340, 700);
            this.position = new L11_1_Advanced.Vector(numX, numY);
            this.type = L11_1_Advanced.randomNum(0, 1);
            this.size = L11_1_Advanced.randomNum(0.5, 2);
        }
        draw() {
            if (this.type == 0) {
                L11_1_Advanced.drawFlower1(-10, -L11_1_Advanced.canvas.height);
            }
            if (this.type == 1) {
                L11_1_Advanced.drawFlower2(-10, -L11_1_Advanced.canvas.height);
            }
            console.log("Flower");
        }
    }
    L11_1_Advanced.Flower = Flower;
})(L11_1_Advanced || (L11_1_Advanced = {}));
//# sourceMappingURL=flower.js.map