namespace L09Landscape {
    export class Bee {
        position: Vector;
        velocity: Vector;

        constructor() {
            this.position = new Vector (randomNum(150, 250), randomNum(300, 400));
        }

        move(_timeSlice: number): void {
            crc2.restore();
            this.velocity = new Vector(200, 350);
            this.velocity.random(randomNum(-1000, 1000), randomNum(-600, 600));

            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeSlice);
            this.position.add(offset);
            
            if (this.position.x < 0)
             this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
             this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
             this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
             this.position.y -= crc2.canvas.height;
        }

        draw(): void {
            drawBee(this.position);
        }
    }
    

}