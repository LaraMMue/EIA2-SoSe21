namespace L10_2_Polymorphie {
    export class Cloud extends Moveable {
        position: Vector;

        constructor(_position: Vector, _type: string) {
            super(_position, _type);
            this.position = _position;
        }

        draw(): void {
            drawCloud(this.position);  
            
        }
    }

}