namespace L08GenArt { 

    /* 
    L08.1: Generative Kunst
    Name: Lara Müller
    Matrikel-Nr: 266298
    Datum: 08.05.2021 */

   window.addEventListener("load", handleLoad);
   let crc2: CanvasRenderingContext2D;

   let windowWith: number = window.innerWidth;
   let windowHeight: number = window.innerHeight;

   function handleLoad(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = windowWith;
        canvas.height = windowHeight;
        drawBackground();
        drawPattern();
        drawCircle();
        drawTriangle();
        drawEllipse();
    }

    //colors for canvas elements
   let colors: string[] = ["#40547c", "#735895", "#b15394", "#e54e77", "#ff6347",
    "#97acd0", "#6d90ca", "#716aa5", "#2a3a5d", "#141114"];

   
   //random numbers for color and quuantity/size: 
   // source: https://attacomsian.com/blog/javascript-generate-random-numbers 
   let min: number = 0;
   let max: number = 1000;
   function randomize(): number {
    let num: number = Math.floor(Math.random() * (max - min) + min);
    return num;
   }  

   let colorMin: number = 0;
   let colorMax: number = 10;
   function randomColor(): number {
    let num: number = Math.floor(Math.random() * (colorMax - colorMin) + colorMin);
    return num;
   } 


   //gradient background with random colors
   function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 50, 500);
        gradient.addColorStop(0, colors[randomColor()]);
        gradient.addColorStop(.5, colors[randomColor()]);
        gradient.addColorStop(1, colors[randomColor()]);
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, windowWith, windowHeight);
   }    

   // drawPattern funktioniert nicht??? //
   function drawPattern(): void {
       let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
       pattern.canvas.width = windowWith;
       pattern.canvas.height = windowHeight;

       pattern.beginPath();
       pattern.arc(100, 75, 50, 0, 2 * Math.PI);
       pattern.strokeStyle = colors[randomColor()];
       pattern.stroke();

       crc2.fillStyle = <CanvasPattern>crc2.createPattern(pattern.canvas, "repeat");
       crc2.fillRect(0, 0, windowWith, windowHeight);
   }

   //"number" variable to make a for loop to draw more than just one element
   let number: number = 0;

   function drawCircle(): void {
    for (number; number <= randomize() / 2; number++) {
        crc2.beginPath();
        crc2.arc(randomize(), randomize(), randomize(), 0, 2 * Math.PI);
        crc2.globalAlpha = 0.4; //transparency (gibt es eine Möglichkeit, alpha nicht global anzuwenden? habe dazu leider nichts gefunden)
        crc2.strokeStyle = colors[randomColor()];
        crc2.fillStyle = colors[randomColor()];
        crc2.stroke();
        crc2.fill();
       }
   }

   function drawTriangle(): void {
       for (number; number <= randomize() / 2; number++) {
           crc2.beginPath();
           crc2.strokeStyle = colors[randomColor()];
           crc2.lineWidth = randomize() * 0.005;
           crc2.moveTo(randomize(), randomize());
           crc2.lineTo(randomize(), randomize());
           crc2.lineTo(randomize(), randomize());
           crc2.closePath();
           crc2.stroke();
       }
   }

   function drawEllipse(): void {
       for (number; number <= randomize() / 2; number++) {
           crc2.beginPath();
           crc2.strokeStyle = colors[randomColor()];
           crc2.ellipse(randomize(), randomize(), randomize(), randomize(), Math.PI / 4, 0, 2 * Math.PI);
           crc2.stroke();
       }
   }
    




}