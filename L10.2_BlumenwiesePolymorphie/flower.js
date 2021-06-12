"use strict";
var L10_2_Polymorphie;
(function (L10_2_Polymorphie) {
    class Flower {
        constructor() {
            let numX = L10_2_Polymorphie.randomNum(20, 1100);
            let numY = L10_2_Polymorphie.randomNum(340, 700);
            this.position = new L10_2_Polymorphie.Vector(numX, numY);
            this.type = L10_2_Polymorphie.randomNum(0, 1);
            this.size = L10_2_Polymorphie.randomNum(0.5, 2);
        }
        draw() {
            if (this.type == 0) {
                L10_2_Polymorphie.drawFlower1(-10, -L10_2_Polymorphie.canvas.height);
            }
            if (this.type == 1) {
                L10_2_Polymorphie.drawFlower2(-10, -L10_2_Polymorphie.canvas.height);
            }
        }
    }
    L10_2_Polymorphie.Flower = Flower;
})(L10_2_Polymorphie || (L10_2_Polymorphie = {}));
//# sourceMappingURL=flower.js.map