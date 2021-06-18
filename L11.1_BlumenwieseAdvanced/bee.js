"use strict";
var L11_1_Advanced;
(function (L11_1_Advanced) {
    class Bee extends L11_1_Advanced.Moveable {
        constructor(_position, _type) {
            super(_position, _type);
            this.position = _position;
        }
        draw() {
            L11_1_Advanced.drawBee(this.position);
        }
    }
    L11_1_Advanced.Bee = Bee;
})(L11_1_Advanced || (L11_1_Advanced = {}));
//# sourceMappingURL=bee.js.map