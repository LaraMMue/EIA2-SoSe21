"use strict";
var L11_1_Advanced;
(function (L11_1_Advanced) {
    class Cloud extends L11_1_Advanced.Moveable {
        constructor(_position, _type) {
            super(_position, _type);
            this.position = _position;
        }
        draw() {
            L11_1_Advanced.drawCloud(this.position);
        }
    }
    L11_1_Advanced.Cloud = Cloud;
})(L11_1_Advanced || (L11_1_Advanced = {}));
//# sourceMappingURL=cloud.js.map