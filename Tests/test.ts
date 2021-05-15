let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

let pattern: CanvasRenderingContext2d = <CanvasRenderingContext2d>document.createElement("canvas");
pattern.canvas.width = 40;
pattern.canvas.height = 20;



pattern.moveTo(0, 10);
pattern.lineTo(10, 10);
pattern.lineTo(20, 0);
pattern.lineTo(30, 0);
pattern.lineTo(40, 10);
pattern.lineTo(30, 20);
pattern.lineTo(20, 20);
pattern.lineTo(10, 10);
pattern.stroke();

crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
crc2.fillRect(0, 0, canvas.width, canvas.height);