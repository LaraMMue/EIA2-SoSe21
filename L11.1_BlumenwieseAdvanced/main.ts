namespace L11_1_Advanced {
    /*
   Aufgabe: L11.1 BlumenwieseAdvanced
   Name: Lara Müller
   Matrikel: 266298
   Datum: 18.06.2021
   mithilfe des Codes aus de Lektion + Lisa Herbigs Hilfe
   */
   window.addEventListener("load", handleLoad);
   export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
   export let crc2: CanvasRenderingContext2D;
   crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
   let imgData: ImageData;

   let moveables: Moveable[] = [];
   let flowers: Flower [] = [];

   let windowWith: number = window.innerWidth;
   let windowHeight: number = window.innerHeight;

   export let goldenRatio: number = 0.62;

   for (let h: number = 0; h < randomNum(20, 100); h++) {
       let type: number = randomNum(0, 1);
       switch (type) {
            case(0):
                let pos1: Vector = new Vector(randomNum(10, 310), randomNum(400, 700));
                let flower1: Flower1 = new Flower1(pos1);
                flowers.push(flower1);
                break;
            case(1):
                let pos2: Vector = new Vector(randomNum(10, 310), randomNum(400, 700));
                let flower2: Flower2 = new Flower2(pos2);
                flowers.push(flower2);
                break;
            default:
                console.log("Something went wrong");
                
       }
   }

   function handleLoad(): void {

    canvas.width = windowWith;
    canvas.height = windowHeight;

    let horizon: number = crc2.canvas.height * goldenRatio;

    drawBackground();
    drawSun(new Vector(randomNum(20, 1100), randomNum(10, 130)));
    drawMountains({x: 0, y: horizon}, 150, 300, "#3b3b3b", "white");
    drawMountains({x: 0, y: horizon}, 70, 150, "#3b3b3b", "grey");
    drawTrees();
    drawBeehive({x: 0, y: horizon + 100});

    for (let flower of flowers) {
        flower.draw();
        flower.displayNectarLevel();
    }
    drawBeehive(new Vector(600, 500));
    imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    window.setInterval(update, 20);
   
   }

    //Cloud
   for (let j: number = 0; j < 3; j++) {
    let type: string = "Cloud";
    let pos: Vector = new Vector(5 * j , 15);
    let cloud: Cloud = new Cloud(pos, type);
    moveables.push(cloud);
    }

    //Bee
   for (let k: number = 0; k < 8; k++) {
    let type: string = "Bee";
    let pos: Vector = new Vector (655, 455);
    let bee: Bee = new Bee(pos, type);
    moveables.push(bee);
    }

   function update(): void {
       crc2.clearRect(0, 0, windowWith, windowHeight);
       crc2.putImageData(imgData, 0, 0);

       for (let moveable of moveables) {
                moveable.move(1 / 50); 
                moveable.draw(); 
       }
       console.log("update");
    
   }
  
}