"use strict";
var endaufgabe_jogi;
(function (endaufgabe_jogi) {
    class Vector {
        constructor(_x = 0, _y = 0) {
            this.set(_x, _y);
        }
        static getDifference(_vector1, _vector2) {
            return new Vector(_vector1.x - _vector2.x, _vector1.y - _vector2.y);
        }
        static getRandom(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            return Vector.getPolar(direction, length);
        }
        static getPolar(_angle, _length) {
            let vector = new Vector();
            vector.set(Math.cos(_angle), Math.sin(_angle));
            vector.scale(_length);
            return vector;
        }
        get length() {
            return Math.hypot(this.x, this.y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_end) {
            this.x += _end.x;
            this.y += _end.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    endaufgabe_jogi.Vector = Vector;
})(endaufgabe_jogi || (endaufgabe_jogi = {}));
//# sourceMappingURL=vector.js.map