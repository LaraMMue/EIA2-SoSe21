namespace L10_2_Polymorphie {
    export class Flower {
        position: Vector;
        type: number;
        size: number;

        constructor() {
            let numX: number = randomNum(20, 1100);
            let numY: number = randomNum(340, 700);
            this.position = new Vector(numX, numY);
            this.type = randomNum(0, 1);
            this.size = randomNum(0.5, 2);
        }

        draw(): void {
          if (this.type == 0) {
              drawFlower1(-10, -canvas.height);
            }
          if (this.type == 1) {
              drawFlower2(-10, -canvas.height);
          }
          
        }

    }
}