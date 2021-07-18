namespace endaufgabe_jogi {
    export abstract class Moveable {

        static base?: Vector;
        position: Vector;
        radius: number;

        constructor(_position: Vector) {
            this.position = _position;
        }

        abstract move(): void;
        abstract draw(): void;

    }



}