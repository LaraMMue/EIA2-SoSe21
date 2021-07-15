"use strict";
var endaufgabe_jogi;
(function (endaufgabe_jogi) {
    class Player extends endaufgabe_jogi.Moveable {
        constructor(_position, _base, _team, _speed, _precision, _color, _number) {
            super(_position);
            this.type = "player";
            this.task = endaufgabe_jogi.TASK.WAIT;
            this.position = _position;
            this.base = _base;
            this.team = _team;
            this.speed = _speed;
            this.precision = _precision;
            this.color = _color;
            this.number = _number;
        }
        move(_ballPosition) {
            if (_ballPosition) {
                let difference = endaufgabe_jogi.Vector.getDifference(_ballPosition, this.position);
                let offset = new endaufgabe_jogi.Vector(difference.x, difference.y);
                offset.scale(this.speed);
                this.position.add(offset);
                if (this.position.x == _ballPosition.x && this.position.y == _ballPosition.y) {
                    endaufgabe_jogi.activePlayerPrecision = this.position;
                    let event = new CustomEvent("first_player", { "detail": { player: this } });
                    endaufgabe_jogi.crc2.canvas.dispatchEvent(event);
                }
            }
        }
        moveBack(_ballPosition) {
            let difference = endaufgabe_jogi.Vector.getDifference(this.base, this.position);
            let offset = new endaufgabe_jogi.Vector(difference.x, difference.y);
            offset.scale(this.speed);
            this.position.add(offset);
            if (this.position.x == this.base.x && this.position.y == this.base.y) {
                endaufgabe_jogi.checkArrival = true;
                this.wait();
            }
            else if (_ballPosition) {
                let difference = endaufgabe_jogi.Vector.getDifference(_ballPosition, this.position);
                let offset = new endaufgabe_jogi.Vector(difference.x, difference.y);
                offset.scale(this.speed);
                this.position.add(offset);
                if (this.position.x == _ballPosition.x && this.position.y == _ballPosition.y) {
                    endaufgabe_jogi.activePlayerPrecision = this.position;
                    let event = new CustomEvent("first_player", { "detail": { player: this } });
                    endaufgabe_jogi.crc2.canvas.dispatchEvent(event);
                }
            }
        }
        wait() {
            console.log("Waiting for action");
        }
        draw() {
            endaufgabe_jogi.drawPlayer(this.position, this.color, this.type, this.team);
        }
        changeTask(_task, _ball) {
            if (_task)
                this.task = _task;
            switch (this.task) {
                case endaufgabe_jogi.TASK.WAIT:
                    console.log("wait");
                    break;
                case endaufgabe_jogi.TASK.MOVE:
                    this.move(_ball);
                    break;
                case endaufgabe_jogi.TASK.MOVEBACK:
                    this.moveBack();
                    break;
                default:
                    console.log("Spieler gehorcht nicht");
            }
        }
    }
    endaufgabe_jogi.Player = Player;
})(endaufgabe_jogi || (endaufgabe_jogi = {}));
//# sourceMappingURL=player.js.map