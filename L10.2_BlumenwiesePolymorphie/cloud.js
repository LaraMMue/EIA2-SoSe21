"use strict";
var L10_2_Polymorphie;
(function (L10_2_Polymorphie) {
    class Cloud extends L10_2_Polymorphie.Moveable {
        constructor(_position, _type) {
            super(_position, _type);
            this.position = _position;
        }
        draw() {
            L10_2_Polymorphie.drawCloud(this.position);
        }
    }
    L10_2_Polymorphie.Cloud = Cloud;
})(L10_2_Polymorphie || (L10_2_Polymorphie = {}));
//# sourceMappingURL=cloud.js.map