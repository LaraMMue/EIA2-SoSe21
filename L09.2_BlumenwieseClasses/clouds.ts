namespace L09Landscape {
    export class Cloud {
        position: Vector;
        velocity: Vector;

        constructor() {
            this.position = new Vector (randomNum(200, 290), randomNum(60, 140));
            

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 0);

            
        }

        move(_timeSlice: number): void {
        
            let offset: Vector = new Vector(this.velocity.x, 0);
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
            drawCloud(this.position);  
        }
    }


}