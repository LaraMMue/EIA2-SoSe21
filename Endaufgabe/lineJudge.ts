namespace endaufgabe_jogi {
    export class LineJudge extends Moveable {
        color: string;
        speed: number = 150;
        type: string = "lineJudge";

        constructor(_position: Vector, _color: string) {
            super(_position);
            this.position = _position;
            this.color = _color;
        }

        move(/*_ballPosition?: Vector*/): void {

            /*if (_ballPosition) {
                let difference: Vector = Vector.getDifference(_ballPosition, this.position);
                let offset: Vector = new Vector (difference.x, 0);
                offset.scale(this.speed);
                this.position.add(offset);
            }*/

            let left: number = width / 110 * 5;
            let right: number = width / 110 * 100;
            let moveX: number = createRandomNum(left, right);
            let xDirection: number = createRandomNum(-moveX, moveX);
            let position: Vector = new Vector(xDirection, 0);
            position.scale(1 / this.speed);
            this.position.add(position);

            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width;
            }
            else if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
            }
        }

        draw(): void {
            drawPlayer(this.position, this.type, this.color, "referees");
        }
    }


}