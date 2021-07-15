"use strict";
var endaufgabe_jogi;
(function (endaufgabe_jogi) {
    class Ball extends endaufgabe_jogi.Moveable {
        constructor(_position) {
            super(_position);
            this.start = new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 2, endaufgabe_jogi.height / 2);
            this.speed = 50;
            this.position = _position;
        }
        move(_event) {
            if (_event && stopDifference == false) {
                let x = _event.clientX;
                let y = _event.clientY;
                let mousePos = new endaufgabe_jogi.Vector(x, y);
                let difference = endaufgabe_jogi.Vector.getDifference(mousePos, this.position);
                let offset = new endaufgabe_jogi.Vector(difference.x, difference.y);
                let length = offset.length;
                switch (true) {
                    case (length < (endaufgabe_jogi.width / 110 * 10.5)):
                        this.moveWithOffset(mousePos, 3);
                        newBallPos = false;
                        break;
                    case (length < (endaufgabe_jogi.width / 110 * 21.5)):
                        console.log("area2");
                        this.moveWithOffset(mousePos, 10);
                        break;
                    case (length < (endaufgabe_jogi.width / 2)):
                        console.log("area3");
                        this.moveWithOffset(mousePos, 20);
                        break;
                    case (length < (endaufgabe_jogi.width / 110 * 88.5)):
                        console.log("area4");
                        this.moveWithOffset(mousePos, 35);
                        break;
                    case (length < (endaufgabe_jogi.width / 110 * 110)):
                        console.log("area5");
                        this.moveWithOffset(mousePos, 50);
                        break;
                    default:
                        console.log("something went wrong");
                }
                let ballPosRound = new endaufgabe_jogi.Vector(Math.round(this.position.x), Math.round(this.position.y));
                let mousePosRound = new endaufgabe_jogi.Vector(Math.round(mousePos.x), Math.round(mousePos.y));
                if (ballPosRound.x == mousePosRound.x && ballPosRound.y == mousePosRound.y) {
                    ballMoves = false;
                }
            }
        }
        moveWithOffset(_mousePos, _spread) {
            let spread = endaufgabe_jogi.width / 110 * _spread * (endaufgabe_jogi.activePlayerPrecision / 100);
            let newPos = new endaufgabe_jogi.Vector(_mousePos.x + spread, _mousePos.y + spread);
            let difference2 = endaufgabe_jogi.Vector.getDifference(newPos, this.position);
            let offset2 = new endaufgabe_jogi.Vector(difference2.x, difference2.y);
            offset2.scale(1 / this.speed);
            this.position.add(offset2);
            let round2 = new endaufgabe_jogi.Vector(Math.round(newPos.x), Math.round(newPos.y));
            let roundBall2 = new endaufgabe_jogi.Vector(Math.round(this.position.x), Math.round(this.position.y));
            if (round2.x == roundBall2.x && round2.y == roundBall2.y) {
                console.log("Ball stopped rolling");
                ballMoves = false;
            }
        }
        draw() {
            endaufgabe_jogi.drawBall(this.position);
        }
    }
    endaufgabe_jogi.Ball = Ball;
})(endaufgabe_jogi || (endaufgabe_jogi = {}));
//# sourceMappingURL=ball.js.map