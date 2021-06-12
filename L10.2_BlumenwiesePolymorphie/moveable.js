"use strict";
var L10_2_Polymorphie;
(function (L10_2_Polymorphie) {
    class Moveable {
        constructor(_position, _type) {
            this.type = _type;
            this.position = _position;
            if (this.type == "Cloud") {
                this.velocity = new L10_2_Polymorphie.Vector(0, 0);
                this.velocity.random(100, 0);
            }
        }
        move(_timeSlice) {
            if (this.type == "Bee") {
                this.velocity = new L10_2_Polymorphie.Vector(200, 350);
                this.velocity.random(L10_2_Polymorphie.randomNum(-1000, 1000), L10_2_Polymorphie.randomNum(-600, 600));
            }
            if (this.type == "Cloud") {
                let offset = new L10_2_Polymorphie.Vector(this.velocity.x, 0);
                offset.scale(_timeSlice);
                this.position.add(offset);
            }
            if (this.type == "Bee") {
                let offset = new L10_2_Polymorphie.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeSlice);
                this.position.add(offset);
            }
            if (this.position.x < 0)
                this.position.x += L10_2_Polymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_2_Polymorphie.crc2.canvas.height;
            if (this.position.x > L10_2_Polymorphie.crc2.canvas.width)
                this.position.x -= L10_2_Polymorphie.crc2.canvas.width;
            if (this.position.y > L10_2_Polymorphie.crc2.canvas.height)
                this.position.y -= L10_2_Polymorphie.crc2.canvas.height;
        }
        draw() {
            console.log("drawing moveable");
        }
    }
    L10_2_Polymorphie.Moveable = Moveable;
})(L10_2_Polymorphie || (L10_2_Polymorphie = {}));
//# sourceMappingURL=moveable.js.map