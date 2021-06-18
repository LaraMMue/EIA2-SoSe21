namespace L11_1_Advanced {
    export class Flower2 extends Flower {
        private color: string = "DodgerBlue";
        private fps: number = 11;

        constructor(_position: Vector) {
            super();
        }

        public displayNectarLevel(): void {
            //Nectar
            showNectar(this.position, Flower2.degree, this.color, this.fps);

            crc2.save();
            crc2.beginPath();
            crc2.strokeStyle = this.color;
            crc2.lineWidth = 5;
            crc2.lineCap = "round";
            crc2.arc(this.position.x + 2, this.position.y + 7, 10, 0, 360);
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
            
        }

        public draw(): void {
            //drawFlower1
            drawFlower2(-10, -canvas.height);
        }
    }
}