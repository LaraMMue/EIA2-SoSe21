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
        move(_ballPosition) {
            if (_ballPosition) {
                let difference = endaufgabe_jogi.Vector.getDifference(_ballPosition, this.position);
                let offset = new endaufgabe_jogi.Vector(difference.x / 2, difference.y / 2);
                offset.scale(this.speed);
                this.position.add(offset);
            }
        }
        draw() {
            endaufgabe_jogi.drawPlayer(this.position, this.type, this.color, "referees");
        }
    }
    endaufgabe_jogi.Referee = Referee;
})(endaufgabe_jogi || (endaufgabe_jogi = {}));
//# sourceMappingURL=referee.js.map