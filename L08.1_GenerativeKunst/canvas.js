"use strict";
var L08GenArt;
(function (L08GenArt) {
    /*
    L08.1: Generative Kunst
    Name: Lara Müller
    Matrikel-Nr: 266298
    Datum: 08.05.2021 */
    window.addEventListener("load", handleLoad);
    let crc2;
    let windowWith = window.innerWidth;
    let windowHeight = window.innerHeight;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.width = windowWith;
        canvas.height = windowHeight;
        drawBackground();
        drawPattern();
        drawCircle();
        drawTriangle();
        drawEllipse();
    }
    //colors for canvas elements
    let colors = ["#40547c", "#735895", "#b15394", "#e54e77", "#ff6347",
        "#97acd0", "#6d90ca", "#716aa5", "#2a3a5d", "#141114"];
    //random numbers for color and quuantity/size: 
    // source: https://attacomsian.com/blog/javascript-generate-random-numbers 
    let min = 0;
    let max = 1000;
    function randomize() {
        let num = Math.floor(Math.random() * (max - min) + min);
        return num;
    }
    let colorMin = 0;
    let colorMax = 10;
    function randomColor() {
        let num = Math.floor(Math.random() * (colorMax - colorMin) + colorMin);
        return num;
    }
    //gradient background with random colors
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 50, 500);
        gradient.addColorStop(0, colors[randomColor()]);
        gradient.addColorStop(.5, colors[randomColor()]);
        gradient.addColorStop(1, colors[randomColor()]);
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, windowWith, windowHeight);
    }
    // drawPattern funktioniert irgendwie nicht??? //
    function drawPattern() {
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = windowWith;
        pattern.canvas.height = windowHeight;
        pattern.beginPath();
        pattern.arc(100, 75, 50, 0, 2 * Math.PI);
        pattern.strokeStyle = colors[randomColor()];
        pattern.stroke();
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, windowWith, windowHeight);
    }
    //"number" variable to make a for loop to draw more than just one element
    let number = 0;
    function drawCircle() {
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
    function drawTriangle() {
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
    function drawEllipse() {
        for (number; number <= randomize() / 2; number++) {
            crc2.beginPath();
            crc2.strokeStyle = colors[randomColor()];
            crc2.ellipse(randomize(), randomize(), randomize(), randomize(), Math.PI / 4, 0, 2 * Math.PI);
            crc2.stroke();
        }
    }
})(L08GenArt || (L08GenArt = {}));
//# sourceMappingURL=canvas.js.map