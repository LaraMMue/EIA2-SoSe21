namespace endaufgabe_jogi {
    export abstract class Moveable {

        static home?: Vector;
        position: Vector;
        radius: number;

        constructor(_position: Vector) {
            this.position = _position;
        }

        close(_partner: Moveable): boolean {
            let difference: Vector = Vector.getDifference(this.position, _partner.position);
            if (difference.length <= 30) {
                return true;
            }
            return false;
        }

        abstract move(): void;
        abstract draw(): void;

    }



}