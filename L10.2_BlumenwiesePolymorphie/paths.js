"use strict";
var L10_2_Polymorphie;
(function (L10_2_Polymorphie) {
    function randomNum(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    L10_2_Polymorphie.randomNum = randomNum;
    function drawCloud(_position) {
        let nParticles = 10;
        let particleRadius = 70;
        let particle = new Path2D();
        let gradient = L10_2_Polymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);
        particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L10_2_Polymorphie.crc2.save();
        L10_2_Polymorphie.crc2.translate(_position.x, _position.y);
        L10_2_Polymorphie.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L10_2_Polymorphie.crc2.save();
            let x = 50 + 10 * drawn;
            let y = 2 + drawn;
            L10_2_Polymorphie.crc2.translate(x, y);
            L10_2_Polymorphie.crc2.fill(particle);
            L10_2_Polymorphie.crc2.restore();
        }
        L10_2_Polymorphie.crc2.restore();
    }
    L10_2_Polymorphie.drawCloud = drawCloud;
    let goldenRatio = 0.62;
    function drawBackground() {
        console.log("Background");
        let gradient = L10_2_Polymorphie.crc2.createLinearGradient(0, 0, 0, L10_2_Polymorphie.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(goldenRatio - 0.02, "white");
        gradient.addColorStop(0.63, "lightgreen");
        gradient.addColorStop(1, "green");
        L10_2_Polymorphie.crc2.fillStyle = gradient;
        L10_2_Polymorphie.crc2.fillRect(0, 0, L10_2_Polymorphie.crc2.canvas.width, L10_2_Polymorphie.crc2.canvas.height);
    }
    L10_2_Polymorphie.drawBackground = drawBackground;
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = L10_2_Polymorphie.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");
        L10_2_Polymorphie.crc2.save();
        L10_2_Polymorphie.crc2.translate(_position.x, _position.y);
        L10_2_Polymorphie.crc2.fillStyle = gradient;
        L10_2_Polymorphie.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L10_2_Polymorphie.crc2.fill();
        L10_2_Polymorphie.crc2.restore();
    }
    L10_2_Polymorphie.drawSun = drawSun;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L10_2_Polymorphie.crc2.save();
        L10_2_Polymorphie.crc2.translate(_position.x, _position.y);
        L10_2_Polymorphie.crc2.beginPath();
        L10_2_Polymorphie.crc2.moveTo(0, 0);
        L10_2_Polymorphie.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L10_2_Polymorphie.crc2.lineTo(x, y);
        } while (x < L10_2_Polymorphie.crc2.canvas.width);
        L10_2_Polymorphie.crc2.lineTo(x, 0);
        L10_2_Polymorphie.crc2.closePath();
        let gradient = L10_2_Polymorphie.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L10_2_Polymorphie.crc2.fillStyle = gradient;
        L10_2_Polymorphie.crc2.fill();
        L10_2_Polymorphie.crc2.restore();
    }
    L10_2_Polymorphie.drawMountains = drawMountains;
    function drawTrees() {
        console.log("Trees");
        let x = 0;
        let minStep = 5;
        let maxStep = 400;
        let yTree = -75;
        do {
            let horizon = L10_2_Polymorphie.crc2.canvas.height * goldenRatio;
            L10_2_Polymorphie.crc2.save();
            L10_2_Polymorphie.crc2.translate(x, horizon + 20);
            //tree trunk
            L10_2_Polymorphie.crc2.beginPath();
            L10_2_Polymorphie.crc2.fillStyle = "#5c4326";
            L10_2_Polymorphie.crc2.fillRect(10, 0, 20, -75);
            L10_2_Polymorphie.crc2.fill();
            L10_2_Polymorphie.crc2.closePath();
            //right side
            L10_2_Polymorphie.crc2.beginPath();
            L10_2_Polymorphie.crc2.fillStyle = "#265c3c";
            L10_2_Polymorphie.crc2.moveTo(10, yTree);
            L10_2_Polymorphie.crc2.lineTo(80, yTree);
            L10_2_Polymorphie.crc2.lineTo(20, -275);
            L10_2_Polymorphie.crc2.fill();
            L10_2_Polymorphie.crc2.closePath();
            //left side
            L10_2_Polymorphie.crc2.beginPath();
            L10_2_Polymorphie.crc2.fillStyle = "#265c3c";
            L10_2_Polymorphie.crc2.moveTo(20, yTree);
            L10_2_Polymorphie.crc2.lineTo(-40, yTree);
            L10_2_Polymorphie.crc2.lineTo(20, -275);
            L10_2_Polymorphie.crc2.fill();
            L10_2_Polymorphie.crc2.closePath();
            x += minStep + Math.random() * (maxStep - minStep);
            L10_2_Polymorphie.crc2.restore();
        } while (x < L10_2_Polymorphie.crc2.canvas.width);
    }
    L10_2_Polymorphie.drawTrees = drawTrees;
    //Flower 1
    function drawFlower1(_min, _max) {
        console.log("Flower1");
        let minStep = 70;
        let maxStep = 80;
        let horizon = L10_2_Polymorphie.crc2.canvas.height * goldenRatio;
        let x = 0;
        do {
            let y = -_min - Math.random() * (_max - _min);
            L10_2_Polymorphie.crc2.save();
            L10_2_Polymorphie.crc2.translate(x, y + (horizon + 45));
            let randomSize = 0.5 + Math.random() * (1.5 - 0.5);
            let r1 = 7;
            let r2 = 4;
            //flower stem
            L10_2_Polymorphie.crc2.scale(randomSize, randomSize);
            L10_2_Polymorphie.crc2.fillStyle = "darkgreen";
            L10_2_Polymorphie.crc2.fillRect(0, 0, 1.5, -20);
            //leaf
            L10_2_Polymorphie.crc2.beginPath();
            L10_2_Polymorphie.crc2.arc(-4, -20, 10, 45, Math.PI);
            L10_2_Polymorphie.crc2.fillStyle = "darkgreen";
            L10_2_Polymorphie.crc2.fill();
            L10_2_Polymorphie.crc2.closePath();
            //big circle
            L10_2_Polymorphie.crc2.fillStyle = "#5f3991";
            L10_2_Polymorphie.crc2.beginPath();
            L10_2_Polymorphie.crc2.arc(0, -26, r1, 0, 2 * Math.PI);
            L10_2_Polymorphie.crc2.fill();
            //small circle
            L10_2_Polymorphie.crc2.fillStyle = "#ab8ff2";
            L10_2_Polymorphie.crc2.beginPath();
            L10_2_Polymorphie.crc2.arc(0, -26, r2, 0, 2 * Math.PI);
            L10_2_Polymorphie.crc2.fill();
            x += minStep + Math.random() * (maxStep - minStep);
            L10_2_Polymorphie.crc2.restore();
        } while (x < L10_2_Polymorphie.crc2.canvas.width);
    }
    L10_2_Polymorphie.drawFlower1 = drawFlower1;
    //Flower 2
    function drawFlower2(_min, _max) {
        console.log("Flower2");
        let minStep = 60;
        let maxStep = 70;
        let horizon = L10_2_Polymorphie.crc2.canvas.height * goldenRatio;
        let x = 0;
        do {
            let y = -_min - Math.random() * (_max - _min);
            L10_2_Polymorphie.crc2.save();
            L10_2_Polymorphie.crc2.translate(x, y + (horizon + 50));
            let randomSize = 0.5 + Math.random() * (1.5 - 0.5);
            let r1 = 7;
            let r2 = 4;
            // flower stem
            L10_2_Polymorphie.crc2.scale(randomSize, randomSize);
            L10_2_Polymorphie.crc2.fillStyle = "darkgreen";
            L10_2_Polymorphie.crc2.fillRect(0, 0, 2, -20);
            //circle 1
            L10_2_Polymorphie.crc2.fillStyle = "#7de1e8";
            L10_2_Polymorphie.crc2.beginPath();
            L10_2_Polymorphie.crc2.arc(0, -30, r1, 0, 2 * Math.PI);
            L10_2_Polymorphie.crc2.fill();
            // circle 2
            L10_2_Polymorphie.crc2.fillStyle = "#7de1e8";
            L10_2_Polymorphie.crc2.beginPath();
            L10_2_Polymorphie.crc2.arc(-5, -20, r1, 0, 2 * Math.PI);
            L10_2_Polymorphie.crc2.fill();
            //circle 3
            L10_2_Polymorphie.crc2.fillStyle = "#7de1e8";
            L10_2_Polymorphie.crc2.beginPath();
            L10_2_Polymorphie.crc2.arc(5, -20, r1, 0, 2 * Math.PI);
            L10_2_Polymorphie.crc2.fill();
            // center circle
            L10_2_Polymorphie.crc2.fillStyle = "#4f63ab";
            L10_2_Polymorphie.crc2.beginPath();
            L10_2_Polymorphie.crc2.arc(0, -25, r2, 0, 2 * Math.PI);
            L10_2_Polymorphie.crc2.fill();
            x += minStep + Math.random() * (maxStep - minStep);
            L10_2_Polymorphie.crc2.restore();
        } while (x < L10_2_Polymorphie.crc2.canvas.width);
    }
    L10_2_Polymorphie.drawFlower2 = drawFlower2;
    function drawBee(_position) {
        L10_2_Polymorphie.crc2.save();
        L10_2_Polymorphie.crc2.beginPath();
        L10_2_Polymorphie.crc2.ellipse(_position.x, _position.y, 20, 10, 0, 0, 2 * Math.PI);
        L10_2_Polymorphie.crc2.save();
        L10_2_Polymorphie.crc2.translate(_position.x - 2, _position.y - 5);
        L10_2_Polymorphie.crc2.moveTo(20, 1);
        L10_2_Polymorphie.crc2.lineTo(30, 5);
        L10_2_Polymorphie.crc2.lineTo(20, 9);
        L10_2_Polymorphie.crc2.lineTo(20, 1);
        L10_2_Polymorphie.crc2.fillStyle = "Black";
        L10_2_Polymorphie.crc2.strokeStyle = "Black";
        L10_2_Polymorphie.crc2.fill();
        L10_2_Polymorphie.crc2.stroke();
        L10_2_Polymorphie.crc2.closePath();
        L10_2_Polymorphie.crc2.save();
        L10_2_Polymorphie.crc2.beginPath();
        L10_2_Polymorphie.crc2.ellipse(0, -12, 4, 8, -10, 0, 2 * Math.PI);
        L10_2_Polymorphie.crc2.strokeStyle = "Blue";
        L10_2_Polymorphie.crc2.lineWidth = 1;
        L10_2_Polymorphie.crc2.fillStyle = "Lightblue";
        L10_2_Polymorphie.crc2.fill();
        L10_2_Polymorphie.crc2.stroke();
        L10_2_Polymorphie.crc2.closePath();
        L10_2_Polymorphie.crc2.restore();
        L10_2_Polymorphie.crc2.save();
        L10_2_Polymorphie.crc2.beginPath();
        L10_2_Polymorphie.crc2.ellipse(10, -12, 4, 8, 10, 0, 2 * Math.PI);
        L10_2_Polymorphie.crc2.strokeStyle = "Blue";
        L10_2_Polymorphie.crc2.lineWidth = 1;
        L10_2_Polymorphie.crc2.fillStyle = "Lightblue";
        L10_2_Polymorphie.crc2.fill();
        L10_2_Polymorphie.crc2.stroke();
        L10_2_Polymorphie.crc2.closePath();
        L10_2_Polymorphie.crc2.restore();
        L10_2_Polymorphie.crc2.beginPath();
        L10_2_Polymorphie.crc2.moveTo(20, -1);
        L10_2_Polymorphie.crc2.lineTo(20, 11);
        L10_2_Polymorphie.crc2.moveTo(10, -5);
        L10_2_Polymorphie.crc2.lineTo(10, 15);
        L10_2_Polymorphie.crc2.moveTo(0, -6);
        L10_2_Polymorphie.crc2.lineTo(0, 16);
        L10_2_Polymorphie.crc2.strokeStyle = "Yellow";
        L10_2_Polymorphie.crc2.lineWidth = 4;
        L10_2_Polymorphie.crc2.stroke();
        L10_2_Polymorphie.crc2.beginPath();
        L10_2_Polymorphie.crc2.arc(-10, 3, 2, 0, 2 * Math.PI);
        L10_2_Polymorphie.crc2.strokeStyle = "white";
        L10_2_Polymorphie.crc2.lineWidth = 2;
        L10_2_Polymorphie.crc2.fillStyle = "Black";
        L10_2_Polymorphie.crc2.stroke();
        L10_2_Polymorphie.crc2.fill();
        console.log("hallo");
    }
    L10_2_Polymorphie.drawBee = drawBee;
})(L10_2_Polymorphie || (L10_2_Polymorphie = {}));
//# sourceMappingURL=paths.js.map