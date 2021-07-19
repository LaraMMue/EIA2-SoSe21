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
                let normalise = endaufgabe_jogi.Vector.getNormalisedVector(offset, offset.length);
                if (normalise) {
                    normalise.scale(1 / this.speed);
                    this.position.add(normalise);
                }
                //offset.scale(1 / this.speed);
                //this.position.add(offset);
                let playerPos = new endaufgabe_jogi.Vector(Math.round(this.position.x), Math.round(this.position.y));
                let ballPos = new endaufgabe_jogi.Vector(Math.round(_ballPosition.x), Math.round(_ballPosition.y));
                if (playerPos.x == ballPos.x && playerPos.y == ballPos.y) {
                    endaufgabe_jogi.activePlayerPrecision = this.precision;
                    let event = new CustomEvent("first_player", { "detail": { player: this } });
                    endaufgabe_jogi.crc2.canvas.dispatchEvent(event);
                    this.displayBallPossession(this.team, this.number);
                }
            }
        }
        moveBack() {
            let difference = endaufgabe_jogi.Vector.getDifference(this.base, this.position);
            let offset = new endaufgabe_jogi.Vector(difference.x, difference.y);
            offset.scale(1 / this.speed);
            this.position.add(offset);
            if (this.position.x == this.base.x && this.position.y == this.base.y) {
                endaufgabe_jogi.checkArrival = true;
                this.wait();
            } /*else if (_ballPosition) {
                    let difference: Vector = Vector.getDifference(_ballPosition, this.position);
                    let offset: Vector = new Vector (difference.x, difference.y);
                    offset.scale(1 / this.speed);
                    this.position.add(offset);
                    let playerPos: Vector = new Vector(Math.round(this.position.x), Math.round(this.position.y));
                    let ballPos: Vector = new Vector(Math.round(_ballPosition.x), Math.round(_ballPosition.y));

                    
                    if (playerPos.x == ballPos.x && playerPos.y == ballPos.y) {
                        activePlayerPrecision = this.precision;
                        let event: CustomEvent = new CustomEvent("first_player", {"detail": {player: this}});
                        crc2.canvas.dispatchEvent(event);
                        this.displayBallPossession(this.team, this.number);
                    }
                }  */
        }
        displayBallPossession(_team, _number) {
            endaufgabe_jogi.ballPossession.innerHTML = "Im Ballbesitz: " + _team + " " + _number;
        }
        playerInformation(_event) {
            endaufgabe_jogi.playerInfo.innerHTML = "<b>Spieler</b>" + "<br>" + "Team: " + this.team + "<br>" + "Number: " + this.number + "<br>" + "Running Speed: " + this.speed + "<br>" + "Precision: " + this.precision;
            setTimeout(function () {
                endaufgabe_jogi.playerInfo.innerHTML = "<b>Spieler</b>" + "<br>" + "Team: " + "<br>" + "Number: " + "<br>" + "Running Speed: " + "<br>" + "Precision: ";
            }, 5000);
        }
        wait() {
            //console.log("waiting");
        }
        draw() {
            endaufgabe_jogi.drawPlayer(this.position, this.color, this.type, this.team);
            console.log();
        }
        changeTask(_task, _ball) {
            if (_task)
                this.task = _task;
            switch (this.task) {
                case endaufgabe_jogi.TASK.WAIT:
                    console.log("wait for your turn");
                    break;
                case endaufgabe_jogi.TASK.MOVE:
                    this.move(_ball);
                    break;
                case endaufgabe_jogi.TASK.MOVEBACK:
                    this.moveBack();
                    break;
                default:
                    console.log("task could not change");
            }
        }
    }
    endaufgabe_jogi.Player = Player;
})(endaufgabe_jogi || (endaufgabe_jogi = {}));
//# sourceMappingURL=player.js.map