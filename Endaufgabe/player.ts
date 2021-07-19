namespace endaufgabe_jogi {
    export class Player extends Moveable {
        base: Vector;
        type: string = "player";
        team: string;
        speed: number;
        precision: number;
        color: string;
        number: number;
        task: TASK = TASK.WAIT;
        
        constructor(_position: Vector, _base: Vector, _team: string, _speed: number, _precision: number, _color: string, _number: number) {
            super(_position);
            this.position = _position;
            this.base = _base;
            this.team = _team;
            this.speed = _speed;
            this.precision = _precision;
            this.color = _color;
            this.number = _number;
        }

        move(_ballPosition?: Vector): void {
            if (_ballPosition) {
                let difference: Vector = Vector.getDifference(_ballPosition, this.position);
                let offset: Vector = new Vector (difference.x, difference.y);
                let normalise: Vector | undefined = Vector.getNormalisedVector(offset, offset.length);
                if (normalise) {
                    normalise.scale(1 / this.speed);
                    this.position.add(normalise);
                }
                //offset.scale(1 / this.speed);
                //this.position.add(offset);
                let playerPos: Vector = new Vector(Math.round(this.position.x), Math.round(this.position.y));
                let ballPos: Vector = new Vector(Math.round(_ballPosition.x), Math.round(_ballPosition.y));

                
                if (playerPos.x == ballPos.x && playerPos.y == ballPos.y) {
                    activePlayerPrecision = this.precision;
                    let event: CustomEvent = new CustomEvent("first_player", {"detail": {player: this}});
                    crc2.canvas.dispatchEvent(event);
                    this.displayBallPossession(this.team, this.number);
                }
            }
        }

        moveBack(): void {
            let difference: Vector = Vector.getDifference(this.base, this.position);
            let offset: Vector = new Vector (difference.x, difference.y);
            offset.scale(1 / this.speed);
            this.position.add(offset);

            if (this.position.x == this.base.x && this.position.y == this.base.y) {
                checkArrival = true;
                this.wait();
            }   /*else if (_ballPosition) {
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

        displayBallPossession(_team: string, _number: number): void {
            ballPossession.innerHTML = "Im Ballbesitz: " + _team + " " + _number;
        }

        playerInformation(_event?: MouseEvent): void {
            playerInfo.innerHTML = "<b>Spieler</b>" + "<br>" + "Team: " + this.team + "<br>" + "Number: " + this.number + "<br>" + "Running Speed: " + this.speed + "<br>" + "Precision: " + this.precision;

            setTimeout(function(): void {
                playerInfo.innerHTML = "<b>Spieler</b>" + "<br>" + "Team: " + "<br>" + "Number: " +  "<br>" + "Running Speed: " + "<br>" + "Precision: " ;
            },         5000);

        }

        wait(): void {
            //console.log("waiting");
            
        }

        draw(): void {
            drawPlayer(this.position, this.color, this.type, this.team);
            console.log();
            
        }

        changeTask(_task?: TASK, _ball?: Vector): void {
            if (_task)
                this.task = _task;

            switch (this.task) {
                case TASK.WAIT:
                    console.log("wait for your turn");
                    break;
                case TASK.MOVE:
                    this.move(_ball);
                    break;
                case TASK.MOVEBACK:
                    this.moveBack();
                    break;
                default:
                    console.log("task could not change");
            }
        }

        
    }


}