namespace endaufgabe_jogi {
    export class Ball extends Moveable {
        start: Vector = new Vector (width / 2, height / 2);
        speed: number = 50;
        targetPosition: DataViewConstructor;

        constructor(_position: Vector) {
            super (_position);
            this.position = _position;

        }

        move(_event?: MouseEvent): void {
            if (_event && stopDifference == false) {
                
                let x: number = _event.clientX;
                let y: number = _event.clientY;
                let mousePos: Vector = new Vector(x, y);
                let difference: Vector = Vector.getDifference(mousePos, this.position);
                let offset: Vector = new Vector (difference.x, difference.y);
                let length: number = offset.length;

                switch (true) {
                    case (length < (width / 110 * 10.5)):
                        this.moveWithOffset(mousePos, 3);
                        newBallPos = false;
                        break;

                        case (length < (width / 110 * 21.5)): 
                            console.log("area2");
                            this.moveWithOffset(mousePos, 10);
                            break;
    
                        case (length < (width / 2)): 
                            console.log("area3");
                            this.moveWithOffset(mousePos, 20);
                            break;
    
                        case (length < (width / 110 * 88.5)):
                            console.log("area4");
                            this.moveWithOffset(mousePos, 35);
                            break;
    
                        case (length < (width / 110 * 110)):
                            console.log("area5");
                            this.moveWithOffset(mousePos, 50);
                            break;
    
                        default:
                            console.log("something went wrong"); 
                }

                let ballPosRound: Vector = new Vector(Math.round(this.position.x), Math.round(this.position.y));
                let mousePosRound: Vector = new Vector(Math.round(mousePos.x), Math.round(mousePos.y));

                if (ballPosRound.x == mousePosRound.x && ballPosRound.y == mousePosRound.y) {
                    ballMoves = false;
                }
            }
        }

        moveWithOffset(_mousePos: Vector, _spread: number): void {
            let spread: number = width / 110 * _spread * (activePlayerPrecision / 100);
            let newPos: Vector = new Vector(_mousePos.x + spread, _mousePos.y + spread);
            let difference2: Vector = Vector.getDifference(newPos, this.position);
            let offset2: Vector = new Vector(difference2.x, difference2.y);
            offset2.scale(1 / this.speed);
            this.position.add(offset2);

            let round2: Vector = new Vector(Math.round(newPos.x), Math.round(newPos.y));
            let roundBall2: Vector = new Vector (Math.round(this.position.x), Math.round(this.position.y));

            if (round2.x == roundBall2.x && round2.y == roundBall2.y) {
                console.log("Ball stopped rolling");
                ballMoves = false;
                
            }
        }

        draw(): void {
            drawBall(this.position);
        }
    }
    

}