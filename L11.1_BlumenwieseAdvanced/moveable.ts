namespace L11_1_Advanced { 
    export abstract class Moveable {
        public position: Vector;
        protected velocity: Vector;
        private type: string;

        constructor(_position: Vector, _type: string) {
            this.type = _type;

            this.position = _position;

            if (this.type == "Cloud") {
                this.velocity = new Vector(0, 0);
                this.velocity.random(100, 0);
            }
        }
        abstract draw(): void;

        public move(_timeSlice: number): void {
           
           if (this.type == "Bee") {
                this.velocity = new Vector(1100, 650);
                this.velocity.random(randomNum(-300, 300), randomNum(-600, 600));
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

      
    
    }
}