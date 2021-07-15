"use strict";
var endaufgabe_jogi;
(function (endaufgabe_jogi) {
    class Moveable {
        constructor(_position) {
            this.position = _position;
        }
        close(_partner) {
            let difference = endaufgabe_jogi.Vector.getDifference(this.position, _partner.position);
            if (difference.length <= 30) {
                return true;
            }
            return false;
        }
    }
    endaufgabe_jogi.Moveable = Moveable;
})(endaufgabe_jogi || (endaufgabe_jogi = {}));
//# sourceMappingURL=moveable.js.map