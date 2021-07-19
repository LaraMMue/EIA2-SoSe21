"use strict";
var endaufgabe_jogi;
(function (endaufgabe_jogi) {
    class Referee extends endaufgabe_jogi.Moveable {
        constructor(_position, _color) {
            super(_position);
            this.speed = 150;
            this.type = "referee";
            this.position = _position;
            this.color = _color;
        }
        move( /*_ballPosition?: Vector*/) {
            let left = endaufgabe_jogi.width / 21.5;
            let right = endaufgabe_jogi.width / 110 * 78.5;
            let moveX = endaufgabe_jogi.createRandomNum(left, right);
            let moveXDirection = endaufgabe_jogi.createRandomNum(-moveX, moveX);
            let top = endaufgabe_jogi.height / 2 + 110;
            let bottom = endaufgabe_jogi.height / 2 + 110;
            let moveY = endaufgabe_jogi.createRandomNum(top, bottom);
            let moveYDirection = endaufgabe_jogi.createRandomNum(-moveY, moveY);
            let position = new endaufgabe_jogi.Vector(moveXDirection, moveYDirection);
            position.scale(1 / this.speed);
            this.position.add(position);
            /*if (_ballPosition) {
                let difference: Vector = Vector.getDifference(_ballPosition, this.position);
                let offset: Vector = new Vector (difference.x / 2, difference.y / 2);
                offset.scale(this.speed);
                this.position.add(offset);

            } */
        }
        draw() {
            endaufgabe_jogi.drawPlayer(this.position, this.type, this.color, "referees");
        }
    }
    endaufgabe_jogi.Referee = Referee;
})(endaufgabe_jogi || (endaufgabe_jogi = {}));
//# sourceMappingURL=referee.js.map