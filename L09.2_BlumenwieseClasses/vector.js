"use strict";
var L09Landscape;
(function (L09Landscape) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addEnd) {
            this.x += _addEnd.x;
            this.y += _addEnd.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    L09Landscape.Vector = Vector;
})(L09Landscape || (L09Landscape = {}));
//# sourceMappingURL=vector.js.map