namespace fifa {
    window.addEventListener("load", handleLoad);
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    export let crc2: CanvasRenderingContext2D;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


    let windowWith: number = window.innerWidth;
    let windowHeight: number = window.innerHeight;

    function handleLoad(): void {

        canvas.width = windowWith;
        canvas.height = windowHeight;

        drawField();
        drawPlayer();
        drawBall();
    }



}