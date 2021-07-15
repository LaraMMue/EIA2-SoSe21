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
                offset.scale(this.speed);
                this.position.add(offset);
                
                if (this.position.x == _ballPosition.x && this.position.y == _ballPosition.y) {
                    activePlayerPrecision = this.position;
                    let event: CustomEvent = new CustomEvent("first_player", {"detail": {player: this}});
                    crc2.canvas.dispatchEvent(event);
                }
            }
        }

        moveBack(_ballPosition?: Vector): void {
            let difference: Vector = Vector.getDifference(this.base, this.position);
            let offset: Vector = new Vector (difference.x, difference.y);
            offset.scale(this.speed);
            this.position.add(offset);

            if (this.position.x == this.base.x && this.position.y == this.base.y) {
                checkArrival = true;
                this.wait();
            }

            else if (_ballPosition) {
                let difference: Vector = Vector.getDifference(_ballPosition, this.position);
                let offset: Vector = new Vector (difference.x, difference.y);
                offset.scale(this.speed);
                this.position.add(offset);
                
                if (this.position.x == _ballPosition.x && this.position.y == _ballPosition.y) {
                    activePlayerPrecision = this.position;
                    let event: CustomEvent = new CustomEvent("first_player", {"detail": {player: this}});
                    crc2.canvas.dispatchEvent(event);
                }
            }

            
        }

        wait(): void {
            console.log("Waiting for action");
            
        }

        draw(): void {
            drawPlayer(this.position, this.color, this.type, this.team);
        }

        changeTask(_task?: TASK, _ball?: Vector): void {
            if (_task)
                this.task = _task;
            
            switch (this.task) {
                case TASK.WAIT:
                    console.log("wait");
                    break;
                case TASK.MOVE:
                    this.move(_ball);
                    break;
                case TASK.MOVEBACK:
                    this.moveBack();
                    break;
                default:
                    console.log("Spieler gehorcht nicht");
                    
                    
            }
        }
    }


}