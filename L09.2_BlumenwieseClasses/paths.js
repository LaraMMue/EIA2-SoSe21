"use strict";
var L09Landscape;
(function (L09Landscape) {
    function drawCloud(_position) {
        let nParticles = 10;
        let particleRadius = 70;
        let particle = new Path2D();
        let gradient = L09Landscape.crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);
        //create particle
        particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSL(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSL(0, 100%, 100%, 0)");
        L09Landscape.crc2.save();
        L09Landscape.crc2.translate(_position.x, _position.y - 350);
        L09Landscape.crc2.fillStyle = gradient;
        //build cloud with particles
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L09Landscape.crc2.save();
            let x = 50 + 10 * drawn;
            let y = -2 + drawn;
            L09Landscape.crc2.translate(x, y);
            L09Landscape.crc2.fill(particle);
            L09Landscape.crc2.restore();
        }
        L09Landscape.crc2.restore();
    }
    L09Landscape.drawCloud = drawCloud;
    function drawBee(_position) {
        L09Landscape.crc2.save();
        L09Landscape.crc2.beginPath();
        L09Landscape.crc2.ellipse(_position.x, _position.y, 20, 10, 0, 0, 2 * Math.PI);
        L09Landscape.crc2.save();
        L09Landscape.crc2.translate(_position.x - 2, _position.y - 5);
        L09Landscape.crc2.moveTo(20, 1);
        L09Landscape.crc2.lineTo(30, 5);
        L09Landscape.crc2.lineTo(20, 9);
        L09Landscape.crc2.lineTo(20, 1);
        L09Landscape.crc2.fillStyle = "Black";
        L09Landscape.crc2.strokeStyle = "Black";
        L09Landscape.crc2.fill();
        L09Landscape.crc2.stroke();
        L09Landscape.crc2.closePath();
        L09Landscape.crc2.save();
        L09Landscape.crc2.beginPath();
        L09Landscape.crc2.ellipse(0, -12, 4, 8, -10, 0, 2 * Math.PI);
        L09Landscape.crc2.strokeStyle = "Blue";
        L09Landscape.crc2.lineWidth = 1;
        L09Landscape.crc2.fillStyle = "Lightblue";
        L09Landscape.crc2.fill();
        L09Landscape.crc2.stroke();
        L09Landscape.crc2.closePath();
        L09Landscape.crc2.restore();
        L09Landscape.crc2.save();
        L09Landscape.crc2.beginPath();
        L09Landscape.crc2.ellipse(10, -12, 4, 8, 10, 0, 2 * Math.PI);
        L09Landscape.crc2.strokeStyle = "Blue";
        L09Landscape.crc2.lineWidth = 1;
        L09Landscape.crc2.fillStyle = "Lightblue";
        L09Landscape.crc2.fill();
        L09Landscape.crc2.stroke();
        L09Landscape.crc2.closePath();
        L09Landscape.crc2.restore();
        L09Landscape.crc2.beginPath();
        L09Landscape.crc2.moveTo(20, -1);
        L09Landscape.crc2.lineTo(20, 11);
        L09Landscape.crc2.moveTo(10, -5);
        L09Landscape.crc2.lineTo(10, 15);
        L09Landscape.crc2.moveTo(0, -6);
        L09Landscape.crc2.lineTo(0, 16);
        L09Landscape.crc2.strokeStyle = "Yellow";
        L09Landscape.crc2.lineWidth = 4;
        L09Landscape.crc2.stroke();
        L09Landscape.crc2.beginPath();
        L09Landscape.crc2.arc(-10, 3, 2, 0, 2 * Math.PI);
        L09Landscape.crc2.strokeStyle = "white";
        L09Landscape.crc2.lineWidth = 2;
        L09Landscape.crc2.fillStyle = "Black";
        L09Landscape.crc2.stroke();
        L09Landscape.crc2.fill();
    }
    L09Landscape.drawBee = drawBee;
})(L09Landscape || (L09Landscape = {}));
//# sourceMappingURL=paths.js.map