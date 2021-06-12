namespace L10_2_Polymorphie {
    /*
   Aufgabe: L10.2 Blumenwiese: Polymorphie
   Name: Lara Müller
   Matrikel: 266298
   Datum: 12.06.2021
   mithilfe der Beispiele aus der Lektion + Lisa Herbigs Hilfe
   */

   window.addEventListener("load", handleLoad);
   export let crc2: CanvasRenderingContext2D;
   let imgData: ImageData;

   let windowWith: number = window.innerWidth;
   let windowHeight: number = window.innerHeight;

   let goldenRatio: number = 0.62;

   let moveables: Moveable[] = [];

   export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
   crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
  

   function handleLoad(): void {

    canvas.width = windowWith;
    canvas.height = windowHeight;
     

    let horizon: number = crc2.canvas.height * goldenRatio;

    drawBackground();
    drawSun(new Vector(randomNum(20, 1100), randomNum(10, 130)));
    drawMountains({x: 0, y: horizon}, 150, 300, "#3b3b3b", "white");
    drawMountains({x: 0, y: horizon}, 70, 150, "#3b3b3b", "grey");
    drawTrees();
    for (let i: number = 0; i < randomNum(50, 100); i ++) {
        let flower: Flower = new Flower();
        flower.draw();
    }

    imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    
    window.setInterval(update, 20);
}

   for (let j: number = 0; j < 3; j++) {
    let type: string = "Cloud";
    let pos: Vector = new Vector(5 * j , 15);
    let cloud: Cloud = new Cloud(pos, type);
    moveables.push(cloud);
}

   for (let k: number = 0; k < 8; k++) {
    let type: string = "Bee";
    let pos: Vector = new Vector (655, 455);
    let bee: Bee = new Bee(pos, type);
    moveables.push(bee);
}

   function update(): void {
       crc2.clearRect(0, 0, windowWith, windowHeight);
       crc2.putImageData(imgData, 0, 0);
       
       /*for (let moveable of moveables) {
           moveable.move(1 / 50);
           moveable.draw();
       }*/

       for (let moveable of moveables) {
           if (moveable instanceof Cloud) {
                moveable.move(1 / 50);
                moveable.draw(); }
           else if (moveable instanceof Bee) {
                moveable.move(1 / randomNum(25, 125)); 
                moveable.draw();
            }
            
       }
       console.log("update");
       
   }
   
   
}