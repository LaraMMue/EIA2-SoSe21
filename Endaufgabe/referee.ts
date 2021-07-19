namespace endaufgabe_jogi {
    export class Referee extends Moveable {
        private color: string;
        private speed: number = 150;
        private type: string = "referee";

        constructor(_position: Vector, _color: string) {
            super(_position);
            this.position = _position;
            this.color = _color;
        }

        public move(/*_ballPosition?: Vector*/): void {
            let left: number = width / 21.5;
            let right: number = width / 110 * 78.5;
            let moveX: number = createRandomNum(left, right);
            let moveXDirection: number = createRandomNum(-moveX, moveX);

            let top: number = height / 2 + 110;
            let bottom: number = height / 2 + 110;
            let moveY: number = createRandomNum(top, bottom);
            let moveYDirection: number = createRandomNum(-moveY, moveY);

            let position: Vector = new Vector(moveXDirection, moveYDirection);
            position.scale(1 / this.speed);
            this.position.add(position);
            /*if (_ballPosition) {
                let difference: Vector = Vector.getDifference(_ballPosition, this.position);
                let offset: Vector = new Vector (difference.x / 2, difference.y / 2);
                offset.scale(this.speed);
                this.position.add(offset);

            } */
        }

        draw(): void {
            drawPlayer(this.position, this.type, this.color, "referees");
        }
    }


}