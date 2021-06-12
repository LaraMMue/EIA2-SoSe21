"use strict";
var L10_2_Polymorphie;
(function (L10_2_Polymorphie) {
    class Bee extends L10_2_Polymorphie.Moveable {
        constructor(_position, _type) {
            super(_position, _type);
            this.position = _position;
        }
        draw() {
            L10_2_Polymorphie.drawBee(this.position);
            console.log("Bee");
        }
    }
    L10_2_Polymorphie.Bee = Bee;
})(L10_2_Polymorphie || (L10_2_Polymorphie = {}));
//# sourceMappingURL=bee.js.map