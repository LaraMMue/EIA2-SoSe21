namespace endaufgabe_jogi {
    export class Referee extends Moveable {
        color: string;
        speed: number = 150;
        type: string = "referee";

        constructor(_position: Vector, _color: string) {
            super(_position);
            this.position = _position;
            this.color = _color;
        }

        move(_ballPosition?: Vector): void {
            if (_ballPosition) {
                let difference: Vector = Vector.getDifference(_ballPosition, this.position);
                let offset: Vector = new Vector (difference.x / 2, difference.y / 2);
                offset.scale(this.speed);
                this.position.add(offset);

            }
        }

        draw(): void {
            drawPlayer(this.position, this.type, this.color, "referees");
        }
    }


}