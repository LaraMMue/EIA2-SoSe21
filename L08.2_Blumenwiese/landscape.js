"use strict";
var L08landscape;
(function (L08landscape) {
    /*
    L08.2: Blumenwiese
    Name: Lara Müller
    Matrikel-Nr: 266298
    Datum: 15.05.2021
    Hintergrund mithilfe der Videos von Jirka*/
    window.addEventListener("load", handleLoad);
    let crc2;
    let windowWith = window.innerWidth;
    let windowHeight = window.innerHeight;
    let goldenRatio = 0.62;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.width = windowWith;
        canvas.height = windowHeight;
        let horizon = crc2.canvas.height * goldenRatio;
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 150 }, { x: 250, y: 75 });
        drawCloud({ x: 1500, y: 250 }, { x: 300, y: 125 }); //bigger cloud
        drawMountains({ x: 0, y: horizon }, 150, 300, "#3b3b3b", "white"); // big mountains in the back
        drawMountains({ x: 0, y: horizon }, 70, 150, "#3b3b3b", "grey"); //smaller mountains in the front
        drawTrees();
        drawFlower1(-10, -canvas.height);
        drawFlower2(-10, -canvas.height);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(goldenRatio - 0.02, "white");
        gradient.addColorStop(0.63, "lightgreen");
        gradient.addColorStop(1, "green");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 40;
        let particleRadius = 70;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);
        //create particle
        particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSL(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSL(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        //build cloud with particles
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawTrees() {
        console.log("Trees");
        let x = 0;
        let minStep = 5;
        let maxStep = 400;
        let yTree = -75;
        do {
            let horizon = crc2.canvas.height * goldenRatio;
            crc2.save();
            crc2.translate(x, horizon + 20);
            //tree trunk
            crc2.beginPath();
            crc2.fillStyle = "#5c4326";
            crc2.fillRect(10, 0, 20, -75);
            crc2.fill();
            crc2.closePath();
            //right side
            crc2.beginPath();
            crc2.fillStyle = "#265c3c";
            crc2.moveTo(10, yTree);
            crc2.lineTo(80, yTree);
            crc2.lineTo(20, -275);
            crc2.fill();
            crc2.closePath();
            //left side
            crc2.beginPath();
            crc2.fillStyle = "#265c3c";
            crc2.moveTo(20, yTree);
            crc2.lineTo(-40, yTree);
            crc2.lineTo(20, -275);
            crc2.fill();
            crc2.closePath();
            x += minStep + Math.random() * (maxStep - minStep);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }
    function drawFlower1(_min, _max) {
        console.log("Flower1");
        let minStep = 5;
        let maxStep = 10;
        let horizon = crc2.canvas.height * goldenRatio;
        let x = 0;
        do {
            let y = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (horizon + 50));
            let randomSize = 0.5 + Math.random() * (1.5 - 0.5);
            let r1 = 7;
            let r2 = 4;
            //flower stem
            crc2.scale(randomSize, randomSize);
            crc2.fillStyle = "darkgreen";
            crc2.fillRect(0, 0, 1.5, -20);
            //leaf
            crc2.beginPath();
            crc2.arc(-4, -20, 10, 45, Math.PI);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.closePath();
            //big circle
            crc2.fillStyle = "#5f3991";
            crc2.beginPath();
            crc2.arc(0, -26, r1, 0, 2 * Math.PI);
            crc2.fill();
            //small circle
            crc2.fillStyle = "#ab8ff2";
            crc2.beginPath();
            crc2.arc(0, -26, r2, 0, 2 * Math.PI);
            crc2.fill();
            x += minStep + Math.random() * (maxStep - minStep);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }
    function drawFlower2(_min, _max) {
        console.log("Flower2");
        let minStep = 5;
        let maxStep = 10;
        let horizon = crc2.canvas.height * goldenRatio;
        let x = 0;
        do {
            let y = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (horizon + 50));
            let randomSize = 0.5 + Math.random() * (1.5 - 0.5);
            let r1 = 7;
            let r2 = 4;
            // flower stem
            crc2.scale(randomSize, randomSize);
            crc2.fillStyle = "darkgreen";
            crc2.fillRect(0, 0, 2, -20);
            //circle 1
            crc2.fillStyle = "#7de1e8";
            crc2.beginPath();
            crc2.arc(0, -30, r1, 0, 2 * Math.PI);
            crc2.fill();
            // circle 2
            crc2.fillStyle = "#7de1e8";
            crc2.beginPath();
            crc2.arc(-5, -20, r1, 0, 2 * Math.PI);
            crc2.fill();
            //circle 3
            crc2.fillStyle = "#7de1e8";
            crc2.beginPath();
            crc2.arc(5, -20, r1, 0, 2 * Math.PI);
            crc2.fill();
            // center circle
            crc2.fillStyle = "#4f63ab";
            crc2.beginPath();
            crc2.arc(0, -25, r2, 0, 2 * Math.PI);
            crc2.fill();
            x += minStep + Math.random() * (maxStep - minStep);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }
})(L08landscape || (L08landscape = {}));
//# sourceMappingURL=landscape.js.map