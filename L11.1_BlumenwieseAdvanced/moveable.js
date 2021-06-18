"use strict";
var L11_1_Advanced;
(function (L11_1_Advanced) {
    class Moveable {
        constructor(_position, _type) {
            this.type = _type;
            this.position = _position;
            if (this.type == "Cloud") {
                this.velocity = new L11_1_Advanced.Vector(0, 0);
                this.velocity.random(100, 0);
            }
        }
        move(_timeSlice) {
            if (this.type == "Bee") {
                this.velocity = new L11_1_Advanced.Vector(1100, 650);
                this.velocity.random(L11_1_Advanced.randomNum(-300, 300), L11_1_Advanced.randomNum(-600, 600));
            }
            if (this.type == "Cloud") {
                let offset = new L11_1_Advanced.Vector(this.velocity.x, 0);
                offset.scale(_timeSlice);
                this.position.add(offset);
            }
            if (this.type == "Bee") {
                let offset = new L11_1_Advanced.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeSlice);
                this.position.add(offset);
            }
            if (this.position.x < 0)
                this.position.x += L11_1_Advanced.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_1_Advanced.crc2.canvas.height;
            if (this.position.x > L11_1_Advanced.crc2.canvas.width)
                this.position.x -= L11_1_Advanced.crc2.canvas.width;
            if (this.position.y > L11_1_Advanced.crc2.canvas.height)
                this.position.y -= L11_1_Advanced.crc2.canvas.height;
        }
    }
    L11_1_Advanced.Moveable = Moveable;
})(L11_1_Advanced || (L11_1_Advanced = {}));
//# sourceMappingURL=moveable.js.map