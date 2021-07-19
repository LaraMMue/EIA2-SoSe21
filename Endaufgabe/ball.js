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
            if (_event) {
                let rect = endaufgabe_jogi.canvas.getBoundingClientRect();
                let x = _event.clientX - rect.left;
                let y = _event.clientY - rect.top;
                let newPos;
                if (endaufgabe_jogi.goal == true) {
                    x = this.start.x;
                    y = this.start.y;
                }
                let mousePos = new endaufgabe_jogi.Vector(x, y);
                let difference = endaufgabe_jogi.Vector.getDifference(mousePos, this.position);
                let offset = new endaufgabe_jogi.Vector(difference.x, difference.y);
                if (endaufgabe_jogi.ran == false) {
                    switch (true) {
                        case (offset.length == 0):
                            console.log("length = ", length);
                            break;
                        case (offset.length < (endaufgabe_jogi.width / 110 * 10.5)):
                            endaufgabe_jogi.spreading = this.moveWithOffset(mousePos, 3);
                            break;
                        case (offset.length < (endaufgabe_jogi.width / 110 * 21.5)):
                            endaufgabe_jogi.spreading = this.moveWithOffset(mousePos, 15);
                            break;
                        case (offset.length < (endaufgabe_jogi.width / 2)):
                            endaufgabe_jogi.spreading = this.moveWithOffset(mousePos, 25);
                            break;
                        case (offset.length < (endaufgabe_jogi.width / 110 * 88.5)):
                            endaufgabe_jogi.spreading = this.moveWithOffset(mousePos, 50);
                            break;
                        case (offset.length < (endaufgabe_jogi.width / 110 * 110)):
                            endaufgabe_jogi.spreading = this.moveWithOffset(mousePos, 70);
                            break;
                        default:
                            console.log("ball move error");
                    }
                }
                if (endaufgabe_jogi.spreading) {
                    newPos = endaufgabe_jogi.spreading[1];
                }
                if (newPos != null) {
                    let difference = endaufgabe_jogi.Vector.getDifference(newPos, this.position);
                    let newOffset = new endaufgabe_jogi.Vector(difference.x, difference.y);
                    newOffset.scale(1 / this.speed);
                    this.position.add(newOffset);
                    let round = new endaufgabe_jogi.Vector(Math.round(newPos.x), Math.round(newPos.y));
                    let roundBall = new endaufgabe_jogi.Vector(Math.round(this.position.x), Math.round(this.position.y));
                    if (round.x == roundBall.x && round.y == roundBall.y) {
                        endaufgabe_jogi.ballMoves = false;
                        endaufgabe_jogi.ran = false;
                        endaufgabe_jogi.goal = false;
                    }
                }
            }
        }
        moveWithOffset(_mousePos, _spread) {
            endaufgabe_jogi.ran = true;
            let spread = endaufgabe_jogi.width / 110 * _spread * (endaufgabe_jogi.activePlayerPrecision / 100);
            function getNewPos() {
                let newPosNegative = new endaufgabe_jogi.Vector(endaufgabe_jogi.createRandomNum(_mousePos.x, _mousePos.x - spread), endaufgabe_jogi.createRandomNum(_mousePos.y, _mousePos.y - spread));
                let newPosPositive = new endaufgabe_jogi.Vector(endaufgabe_jogi.createRandomNum(_mousePos.x, _mousePos.x + spread), endaufgabe_jogi.createRandomNum(_mousePos.y, _mousePos.y + spread));
                let newPosAll = new endaufgabe_jogi.Vector(endaufgabe_jogi.createRandomNum(newPosNegative.x, newPosPositive.x), endaufgabe_jogi.createRandomNum(newPosNegative.y, newPosPositive.y));
                let newPos = new endaufgabe_jogi.Vector(newPosAll.x, newPosAll.y);
                return newPos;
            }
            let newPosNegative = new endaufgabe_jogi.Vector(endaufgabe_jogi.createRandomNum(_mousePos.x, _mousePos.x - spread), endaufgabe_jogi.createRandomNum(_mousePos.y, _mousePos.y - spread));
            let newPosPositive = new endaufgabe_jogi.Vector(endaufgabe_jogi.createRandomNum(_mousePos.x, _mousePos.x + spread), endaufgabe_jogi.createRandomNum(_mousePos.y, _mousePos.y + spread));
            let newPosAll = new endaufgabe_jogi.Vector(endaufgabe_jogi.createRandomNum(newPosNegative.x, newPosPositive.x), endaufgabe_jogi.createRandomNum(newPosNegative.y, newPosPositive.y));
            let newPos = new endaufgabe_jogi.Vector(newPosAll.x, newPosAll.y);
            let difference2 = endaufgabe_jogi.Vector.getDifference(newPos, this.position);
            let offset2 = new endaufgabe_jogi.Vector(difference2.x, difference2.y);
            if (newPos.x < 0 || newPos.x > endaufgabe_jogi.width || newPos.y < 0 || newPos.y > endaufgabe_jogi.height) {
                getNewPos();
            }
            return [offset2, newPos];
        }
        goal() {
            if (this.position.x >= endaufgabe_jogi.canvas.width / 110 * 100 && this.position.y < endaufgabe_jogi.canvas.height / 2 + 40 && this.position.y > endaufgabe_jogi.canvas.height / 2 - 40) {
                endaufgabe_jogi.goal = true;
                this.handleGoal("teamA");
            }
            else if (this.position.x <= endaufgabe_jogi.canvas.width / 110 * 10 && this.position.y < endaufgabe_jogi.canvas.height / 2 + 40 && this.position.y > endaufgabe_jogi.canvas.height / 2 - 40) {
                endaufgabe_jogi.goal = true;
                this.handleGoal("teamB");
            }
        }
        handleGoal(_team) {
            if (_team == "teamA") {
                this.position = new endaufgabe_jogi.Vector(this.start.x, this.start.y);
                endaufgabe_jogi.goalsA = endaufgabe_jogi.goalsA + 1;
                endaufgabe_jogi.goals.innerHTML = "A: " + endaufgabe_jogi.goalsA + " : " + "B: " + endaufgabe_jogi.goalsB;
                endaufgabe_jogi.ran = false;
            }
            else if (_team == "teamB") {
                this.position = new endaufgabe_jogi.Vector(this.start.x, this.start.y);
                endaufgabe_jogi.goalsB = endaufgabe_jogi.goalsB + 1;
                endaufgabe_jogi.goals.innerHTML = "A: " + endaufgabe_jogi.goalsA + " : " + "B: " + endaufgabe_jogi.goalsB;
                endaufgabe_jogi.ran = false;
            }
        }
        draw() {
            endaufgabe_jogi.drawBall(this.position);
        }
    }
    endaufgabe_jogi.Ball = Ball;
})(endaufgabe_jogi || (endaufgabe_jogi = {}));
//# sourceMappingURL=ball.js.map