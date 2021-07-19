namespace endaufgabe_jogi {
    export class Ball extends Moveable {
        start: Vector = new Vector (width / 2, height / 2);
        speed: number = 50;
        targetPosition: Vector;

        constructor(_position: Vector) {
            super (_position);
            this.position = _position;

        }

        move(_event?: MouseEvent): void {
            if (_event) {
                let rect: DOMRect = canvas.getBoundingClientRect();
                let x: number = _event.clientX - rect.left;
                let y: number = _event.clientY - rect.top;
                let newPos: Vector | undefined;
                if (goal == true) {
                    x = this.start.x;
                    y = this.start.y;
                }

                let mousePos: Vector = new Vector(x, y);
                let difference: Vector = Vector.getDifference(mousePos, this.position);
                let offset: Vector = new Vector (difference.x, difference.y);

                if (ran == false) {
                    switch (true) {
                        case (offset.length == 0):
                            console.log("length = ", length);
                            break;
                        case (offset.length < (width / 110 * 10.5)):
                            spreading = this.moveWithOffset(mousePos, 3);
                            break;
                        case (offset.length < (width / 110 * 21.5)):
                            spreading = this.moveWithOffset(mousePos, 15);
                            break;
                        case (offset.length < (width / 2)):
                            spreading = this.moveWithOffset(mousePos, 25);
                            break;
                        case (offset.length < (width / 110 * 88.5)):
                            spreading = this.moveWithOffset(mousePos, 50);
                            break;
                        case (offset.length < (width / 110 * 110)):
                            spreading = this.moveWithOffset(mousePos, 70);
                            break;
    
                        default:
                            console.log("ball move error");    
                    }
                }

                if (spreading) {
                    newPos = spreading[1];
                }

                if (newPos != null) {
                    let difference: Vector = Vector.getDifference(newPos, this.position);
                    let newOffset: Vector = new Vector(difference.x, difference.y);
                    newOffset.scale(1 / this.speed);
                    this.position.add(newOffset);

                    let round: Vector = new Vector(Math.round(newPos.x), Math.round(newPos.y));
                    let roundBall: Vector = new Vector (Math.round(this.position.x), Math.round(this.position.y));

                    if (round.x == roundBall.x && round.y == roundBall.y) {
                        ballMoves = false;
                        ran = false;
                        goal = false;
                    }
                }
            }
        }


        moveWithOffset(_mousePos: Vector, _spread: number): Vector[] {
            ran = true;
            let spread: number = width / 110 * _spread * (activePlayerPrecision / 100);
            function getNewPos(): Vector {
                let newPosNegative: Vector = new Vector(createRandomNum(_mousePos.x, _mousePos.x - spread), createRandomNum(_mousePos.y, _mousePos.y - spread));
                let newPosPositive: Vector = new Vector(createRandomNum(_mousePos.x, _mousePos.x + spread), createRandomNum(_mousePos.y, _mousePos.y + spread));
                let newPosAll: Vector = new Vector(createRandomNum(newPosNegative.x, newPosPositive.x), createRandomNum(newPosNegative.y, newPosPositive.y));
                let newPos: Vector = new Vector(newPosAll.x, newPosAll.y);
                return newPos;
            }
            let newPosNegative: Vector = new Vector(createRandomNum(_mousePos.x, _mousePos.x - spread), createRandomNum(_mousePos.y, _mousePos.y - spread));
            let newPosPositive: Vector = new Vector(createRandomNum(_mousePos.x, _mousePos.x + spread), createRandomNum(_mousePos.y, _mousePos.y + spread));
            let newPosAll: Vector = new Vector(createRandomNum(newPosNegative.x, newPosPositive.x), createRandomNum(newPosNegative.y, newPosPositive.y));
            let newPos: Vector = new Vector(newPosAll.x, newPosAll.y);
            let difference2: Vector = Vector.getDifference(newPos, this.position);
            let offset2: Vector = new Vector(difference2.x, difference2.y);
            if (newPos.x < 0 || newPos.x > width || newPos.y < 0 || newPos.y > height) {
                getNewPos();
            }
            return [offset2, newPos];

        }

        goal(): void {
            if (this.position.x >= canvas.width / 110 * 100 && this. position.y < canvas.height / 2 + 40 && this.position.y > canvas.height / 2 - 40) {
                goal = true;
                this.handleGoal("teamA");
            
            } else if (this.position.x <= canvas.width / 110 * 5 && this.position.y < canvas.height / 2 + 40 && this.position.y > canvas.height / 2 - 40) {
                goal = true;
                this.handleGoal("temaB");
            }
        }

        handleGoal(_team: string): void {
            if (_team == "teamA") {
                this.position = new Vector (this.start.x, this.start.y);
                goalsA = goalsA + 1;
                goals.innerHTML = "A: " + goalsA + " : " + "B: " + goalsB;
                ran = false;
            } else if (_team == "teamB") {
                this.position = new Vector (this.start.x, this.start.y);
                goalsB = goalsB + 1;
                goals.innerHTML = "A: " + goalsA + " : " + "B: " + goalsB;
                ran = false;
            }
        }

        draw(): void {
            drawBall(this.position);
        }
    }
    

}