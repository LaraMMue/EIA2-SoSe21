namespace L10_2_Polymorphie { 
    export class Moveable {
        position: Vector;
        velocity: Vector;
        type: string;

        constructor(_position: Vector, _type: string) {
            this.type = _type;

            this.position = _position;

            if (this.type == "Cloud") {
                this.velocity = new Vector(0, 0);
                this.velocity.random(100, 0);
            }
        }

        move(_timeSlice: number): void {
           
           if (this.type == "Bee") {
                this.velocity = new Vector(200, 350);
                this.velocity.random(randomNum(-1000, 1000), randomNum(-600, 600));
            }
             
           if (this.type == "Cloud") {
                let offset: Vector = new Vector(this.velocity.x, 0);
                offset.scale(_timeSlice);
                this.position.add(offset);
            }
           if (this.type == "Bee") {
                let offset: Vector = new Vector (this.velocity.x, this.velocity.y);
                offset.scale(_timeSlice);
                this.position.add(offset);
            }

 
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
            console.log("drawing moveable");
            
        }
    
    }
}