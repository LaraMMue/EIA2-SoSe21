"use strict";
var endaufgabe_jogi;
(function (endaufgabe_jogi) {
    class LineJudge extends endaufgabe_jogi.Moveable {
        constructor(_position, _color) {
            super(_position);
            this.speed = 150;
            this.type = "lineJudge";
            this.position = _position;
            this.color = _color;
        }
        move(_ballPosition) {
            if (_ballPosition) {
                let difference = endaufgabe_jogi.Vector.getDifference(_ballPosition, this.position);
                let offset = new endaufgabe_jogi.Vector(difference.x, 0);
                offset.scale(this.speed);
                this.position.add(offset);
            }
            /*let left: number = width / 110 * 5;
            let right: number = width / 110 * 100;
            let moveX: number = createRandomNum(left, right);
            let xDirection: number = createRandomNum(-moveX, moveX);
            let position: Vector = new Vector(xDirection, 0);
            position.scale(this.speed);
            this.position.add(position);

            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width;
            }
            else if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
            } */
        }
        draw() {
            endaufgabe_jogi.drawPlayer(this.position, this.type, this.color, "referees");
        }
    }
    endaufgabe_jogi.LineJudge = LineJudge;
})(endaufgabe_jogi || (endaufgabe_jogi = {}));
//# sourceMappingURL=lineJudge.js.map