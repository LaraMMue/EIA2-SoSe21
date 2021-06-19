"use strict";
var L11_1_Advanced;
(function (L11_1_Advanced) {
    //Random Number
    function randomNum(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    L11_1_Advanced.randomNum = randomNum;
    //Background
    function drawBackground() {
        let gradient = L11_1_Advanced.crc2.createLinearGradient(0, 0, 0, L11_1_Advanced.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L11_1_Advanced.goldenRatio - 0.02, "white");
        gradient.addColorStop(0.63, "lightgreen");
        gradient.addColorStop(1, "green");
        L11_1_Advanced.crc2.fillStyle = gradient;
        L11_1_Advanced.crc2.fillRect(0, 0, L11_1_Advanced.crc2.canvas.width, L11_1_Advanced.crc2.canvas.height);
    }
    L11_1_Advanced.drawBackground = drawBackground;
    //Cloud
    function drawCloud(_position) {
        let nParticles = 10;
        let particleRadius = 70;
        let particle = new Path2D();
        let gradient = L11_1_Advanced.crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);
        particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L11_1_Advanced.crc2.save();
        L11_1_Advanced.crc2.translate(_position.x, _position.y);
        L11_1_Advanced.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L11_1_Advanced.crc2.save();
            let x = 50 + 10 * drawn;
            let y = 2 + drawn;
            L11_1_Advanced.crc2.translate(x, y);
            L11_1_Advanced.crc2.fill(particle);
            L11_1_Advanced.crc2.restore();
        }
        L11_1_Advanced.crc2.restore();
    }
    L11_1_Advanced.drawCloud = drawCloud;
    //Sun
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 150;
        let gradient = L11_1_Advanced.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L11_1_Advanced.crc2.save();
        L11_1_Advanced.crc2.translate(_position.x, _position.y);
        L11_1_Advanced.crc2.fillStyle = gradient;
        L11_1_Advanced.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L11_1_Advanced.crc2.fill();
        L11_1_Advanced.crc2.restore();
    }
    L11_1_Advanced.drawSun = drawSun;
    //Mountains
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L11_1_Advanced.crc2.save();
        L11_1_Advanced.crc2.translate(_position.x, _position.y);
        L11_1_Advanced.crc2.beginPath();
        L11_1_Advanced.crc2.moveTo(0, 0);
        L11_1_Advanced.crc2.lineTo(0, -_max);
        do {
            x += stepMin + randomNum(stepMin, stepMax);
            let y = -_min - randomNum(_min, _max);
            L11_1_Advanced.crc2.lineTo(x, y);
        } while (x < L11_1_Advanced.crc2.canvas.width);
        L11_1_Advanced.crc2.lineTo(x, 0);
        L11_1_Advanced.crc2.closePath();
        let gradient = L11_1_Advanced.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L11_1_Advanced.crc2.fillStyle = gradient;
        L11_1_Advanced.crc2.fill();
        L11_1_Advanced.crc2.restore();
    }
    L11_1_Advanced.drawMountains = drawMountains;
    function drawTrees() {
        console.log("Trees");
        let x = 0;
        let minStep = 5;
        let maxStep = 400;
        let yTree = -75;
        do {
            let horizon = L11_1_Advanced.crc2.canvas.height * L11_1_Advanced.goldenRatio;
            L11_1_Advanced.crc2.save();
            L11_1_Advanced.crc2.translate(x, horizon + 20);
            //tree trunk
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.fillStyle = "#5c4326";
            L11_1_Advanced.crc2.fillRect(10, 0, 20, -75);
            L11_1_Advanced.crc2.fill();
            L11_1_Advanced.crc2.closePath();
            //right side
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.fillStyle = "#265c3c";
            L11_1_Advanced.crc2.moveTo(10, yTree);
            L11_1_Advanced.crc2.lineTo(80, yTree);
            L11_1_Advanced.crc2.lineTo(20, -275);
            L11_1_Advanced.crc2.fill();
            L11_1_Advanced.crc2.closePath();
            //left side
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.fillStyle = "#265c3c";
            L11_1_Advanced.crc2.moveTo(20, yTree);
            L11_1_Advanced.crc2.lineTo(-40, yTree);
            L11_1_Advanced.crc2.lineTo(20, -275);
            L11_1_Advanced.crc2.fill();
            L11_1_Advanced.crc2.closePath();
            x += minStep + Math.random() * (maxStep - minStep);
            L11_1_Advanced.crc2.restore();
        } while (x < L11_1_Advanced.crc2.canvas.width);
    }
    L11_1_Advanced.drawTrees = drawTrees;
    //Flower 1
    function drawFlower1(_min, _max) {
        let minStep = 70;
        let maxStep = 80;
        let horizon = L11_1_Advanced.crc2.canvas.height * L11_1_Advanced.goldenRatio;
        let x = 0;
        do {
            let y = -_min - Math.random() * (_max - _min);
            L11_1_Advanced.crc2.save();
            L11_1_Advanced.crc2.translate(x, y + (horizon + 45));
            let randomSize = 0.5 + Math.random() * (1.5 - 0.5);
            let r1 = 7;
            let r2 = 4;
            //flower stem
            L11_1_Advanced.crc2.scale(randomSize, randomSize);
            L11_1_Advanced.crc2.fillStyle = "darkgreen";
            L11_1_Advanced.crc2.fillRect(0, 0, 1.5, -20);
            //leaf
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.arc(-4, -20, 10, 45, Math.PI);
            L11_1_Advanced.crc2.fillStyle = "darkgreen";
            L11_1_Advanced.crc2.fill();
            L11_1_Advanced.crc2.closePath();
            //big circle
            L11_1_Advanced.crc2.fillStyle = "#5f3991";
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.arc(0, -26, r1, 0, 2 * Math.PI);
            L11_1_Advanced.crc2.fill();
            //small circle
            L11_1_Advanced.crc2.fillStyle = "#ab8ff2";
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.arc(0, -26, r2, 0, 2 * Math.PI);
            L11_1_Advanced.crc2.fill();
            x += minStep + Math.random() * (maxStep - minStep);
            L11_1_Advanced.crc2.restore();
        } while (x < L11_1_Advanced.crc2.canvas.width);
    }
    L11_1_Advanced.drawFlower1 = drawFlower1;
    //Flower 2
    function drawFlower2(_min, _max) {
        console.log("Flower2");
        let minStep = 60;
        let maxStep = 70;
        let horizon = L11_1_Advanced.crc2.canvas.height * L11_1_Advanced.goldenRatio;
        let x = 0;
        do {
            let y = -_min - Math.random() * (_max - _min);
            L11_1_Advanced.crc2.save();
            L11_1_Advanced.crc2.translate(x, y + (horizon + 50));
            let randomSize = 0.5 + Math.random() * (1.5 - 0.5);
            let r1 = 7;
            let r2 = 4;
            // flower stem
            L11_1_Advanced.crc2.scale(randomSize, randomSize);
            L11_1_Advanced.crc2.fillStyle = "darkgreen";
            L11_1_Advanced.crc2.fillRect(0, 0, 2, -20);
            //circle 1
            L11_1_Advanced.crc2.fillStyle = "#7de1e8";
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.arc(0, -30, r1, 0, 2 * Math.PI);
            L11_1_Advanced.crc2.fill();
            // circle 2
            L11_1_Advanced.crc2.fillStyle = "#7de1e8";
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.arc(-5, -20, r1, 0, 2 * Math.PI);
            L11_1_Advanced.crc2.fill();
            //circle 3
            L11_1_Advanced.crc2.fillStyle = "#7de1e8";
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.arc(5, -20, r1, 0, 2 * Math.PI);
            L11_1_Advanced.crc2.fill();
            // center circle
            L11_1_Advanced.crc2.fillStyle = "#4f63ab";
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.arc(0, -25, r2, 0, 2 * Math.PI);
            L11_1_Advanced.crc2.fill();
            x += minStep + Math.random() * (maxStep - minStep);
            L11_1_Advanced.crc2.restore();
        } while (x < L11_1_Advanced.crc2.canvas.width);
    }
    L11_1_Advanced.drawFlower2 = drawFlower2;
    //Bee
    function drawBee(_position) {
        L11_1_Advanced.crc2.save();
        L11_1_Advanced.crc2.beginPath();
        L11_1_Advanced.crc2.ellipse(_position.x, _position.y, 20, 10, 0, 0, 2 * Math.PI);
        L11_1_Advanced.crc2.save();
        L11_1_Advanced.crc2.translate(_position.x - 2, _position.y - 5);
        L11_1_Advanced.crc2.moveTo(20, 1);
        L11_1_Advanced.crc2.lineTo(30, 5);
        L11_1_Advanced.crc2.lineTo(20, 9);
        L11_1_Advanced.crc2.lineTo(20, 1);
        L11_1_Advanced.crc2.fillStyle = "Black";
        L11_1_Advanced.crc2.strokeStyle = "Black";
        L11_1_Advanced.crc2.fill();
        L11_1_Advanced.crc2.stroke();
        L11_1_Advanced.crc2.closePath();
        L11_1_Advanced.crc2.save();
        L11_1_Advanced.crc2.beginPath();
        L11_1_Advanced.crc2.ellipse(0, -12, 4, 8, -10, 0, 2 * Math.PI);
        L11_1_Advanced.crc2.strokeStyle = "Blue";
        L11_1_Advanced.crc2.lineWidth = 1;
        L11_1_Advanced.crc2.fillStyle = "Lightblue";
        L11_1_Advanced.crc2.fill();
        L11_1_Advanced.crc2.stroke();
        L11_1_Advanced.crc2.closePath();
        L11_1_Advanced.crc2.restore();
        L11_1_Advanced.crc2.save();
        L11_1_Advanced.crc2.beginPath();
        L11_1_Advanced.crc2.ellipse(10, -12, 4, 8, 10, 0, 2 * Math.PI);
        L11_1_Advanced.crc2.strokeStyle = "Blue";
        L11_1_Advanced.crc2.lineWidth = 1;
        L11_1_Advanced.crc2.fillStyle = "Lightblue";
        L11_1_Advanced.crc2.fill();
        L11_1_Advanced.crc2.stroke();
        L11_1_Advanced.crc2.closePath();
        L11_1_Advanced.crc2.restore();
        L11_1_Advanced.crc2.beginPath();
        L11_1_Advanced.crc2.moveTo(20, -1);
        L11_1_Advanced.crc2.lineTo(20, 11);
        L11_1_Advanced.crc2.moveTo(10, -5);
        L11_1_Advanced.crc2.lineTo(10, 15);
        L11_1_Advanced.crc2.moveTo(0, -6);
        L11_1_Advanced.crc2.lineTo(0, 16);
        L11_1_Advanced.crc2.strokeStyle = "Yellow";
        L11_1_Advanced.crc2.lineWidth = 4;
        L11_1_Advanced.crc2.stroke();
        L11_1_Advanced.crc2.beginPath();
        L11_1_Advanced.crc2.arc(-10, 3, 2, 0, 2 * Math.PI);
        L11_1_Advanced.crc2.strokeStyle = "white";
        L11_1_Advanced.crc2.lineWidth = 2;
        L11_1_Advanced.crc2.fillStyle = "Black";
        L11_1_Advanced.crc2.stroke();
        L11_1_Advanced.crc2.fill();
        //console.log("hallo");
    }
    L11_1_Advanced.drawBee = drawBee;
    //beehive
    function drawBeehive(_position) {
        L11_1_Advanced.crc2.save();
        L11_1_Advanced.crc2.translate(_position.x, _position.y);
        L11_1_Advanced.crc2.beginPath();
        L11_1_Advanced.crc2.fillStyle = "#de8e4a";
        L11_1_Advanced.crc2.fillRect(500, 0, 80, -80);
        L11_1_Advanced.crc2.fill();
        L11_1_Advanced.crc2.closePath();
        L11_1_Advanced.crc2.save();
        L11_1_Advanced.crc2.beginPath();
        L11_1_Advanced.crc2.moveTo(_position.x, _position.y - 20);
        L11_1_Advanced.crc2.fillStyle = "#5c4326";
        L11_1_Advanced.crc2.fillRect(500, 0, 80, -10);
        L11_1_Advanced.crc2.moveTo(0, 20);
        L11_1_Advanced.crc2.fillRect(500, -20, 80, -10);
        L11_1_Advanced.crc2.moveTo(0, 20);
        L11_1_Advanced.crc2.fillRect(500, -40, 80, -10);
        L11_1_Advanced.crc2.moveTo(0, 20);
        L11_1_Advanced.crc2.fillRect(500, -60, 80, -10);
        L11_1_Advanced.crc2.fill();
        L11_1_Advanced.crc2.closePath();
        L11_1_Advanced.crc2.save();
        L11_1_Advanced.crc2.beginPath();
        L11_1_Advanced.crc2.moveTo(_position.x, _position.y);
        L11_1_Advanced.crc2.fillStyle = "black";
        L11_1_Advanced.crc2.fillRect(530, -55, 20, 20);
    }
    L11_1_Advanced.drawBeehive = drawBeehive;
    //Nectar
    function showNectar(_position, _degree, _color, _fps) {
        let x = _position.x + 2;
        let y = _position.y + 7;
        let degree = _degree;
        degree = 0;
        let intervall = setInterval(function () {
            degree += 1;
            L11_1_Advanced.crc2.save();
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.arc(x, y, 10, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
            L11_1_Advanced.crc2.strokeStyle = "white";
            L11_1_Advanced.crc2.lineWidth = 5;
            L11_1_Advanced.crc2.lineCap = "round";
            L11_1_Advanced.crc2.stroke();
            L11_1_Advanced.crc2.closePath();
            L11_1_Advanced.crc2.restore();
            L11_1_Advanced.crc2.save();
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.strokeStyle = _color;
            L11_1_Advanced.crc2.lineWidth = 5;
            L11_1_Advanced.crc2.lineCap = "round";
            L11_1_Advanced.crc2.arc(x, y, 10, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + degree));
            L11_1_Advanced.crc2.stroke();
            L11_1_Advanced.crc2.closePath();
            L11_1_Advanced.crc2.restore();
            //console.log(intervall);
            if (degree == 361)
                clearInterval(intervall);
        }, _fps);
    }
    L11_1_Advanced.showNectar = showNectar;
})(L11_1_Advanced || (L11_1_Advanced = {}));
//# sourceMappingURL=paths.js.map