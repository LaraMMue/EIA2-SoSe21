"use strict";
var fifa;
(function (fifa) {
    function drawField() {
        fifa.crc2.fillStyle = "green";
        fifa.crc2.fillRect(0, 0, fifa.crc2.canvas.width, fifa.crc2.canvas.height);
        // Rand Linie, Aus
        fifa.crc2.beginPath();
        fifa.crc2.moveTo(fifa.canvas.width / 95 * 5, fifa.canvas.height / 75 * 5);
        fifa.crc2.lineTo(fifa.canvas.width / 100 * 95, fifa.canvas.height / 75 * 5);
        fifa.crc2.lineTo(fifa.canvas.width / 100 * 95, fifa.canvas.height / 75 * 70);
        fifa.crc2.lineTo(fifa.canvas.width / 95 * 5, fifa.canvas.height / 75 * 70);
        fifa.crc2.closePath();
        fifa.crc2.strokeStyle = "white";
        fifa.crc2.lineWidth = 10;
        fifa.crc2.stroke();
        // Mittellinie
        fifa.crc2.save();
        fifa.crc2.beginPath();
        fifa.crc2.moveTo(fifa.canvas.width / 2, fifa.canvas.height / 75 * 5);
        fifa.crc2.lineTo(fifa.canvas.width / 2, fifa.canvas.height / 75 * 70);
        fifa.crc2.closePath();
        fifa.crc2.strokeStyle = "white";
        fifa.crc2.lineWidth = 10;
        fifa.crc2.stroke();
        fifa.crc2.restore();
        // Kreis
        fifa.crc2.save();
        let radius = 50;
        fifa.crc2.beginPath();
        fifa.crc2.arc(fifa.canvas.width / 2, fifa.canvas.height / 2, radius, 0, 2 * Math.PI);
        fifa.crc2.strokeStyle = "white";
        fifa.crc2.closePath();
        fifa.crc2.stroke();
        // Tor links
        fifa.crc2.beginPath();
        fifa.crc2.moveTo(60, fifa.canvas.height / 2 - 60);
        fifa.crc2.lineTo(10, fifa.canvas.height / 2 - 60);
        fifa.crc2.lineTo(10, fifa.canvas.height / 2 + 60);
        fifa.crc2.lineTo(60, fifa.canvas.height / 2 + 60);
        fifa.crc2.strokeStyle = "black";
        fifa.crc2.fillStyle = "hsla(0, 0%, 100%, 70%)";
        fifa.crc2.lineWidth = 5;
        fifa.crc2.closePath();
        fifa.crc2.stroke();
        fifa.crc2.fill();
        // Tor rechts
        fifa.crc2.beginPath();
        fifa.crc2.moveTo(fifa.canvas.width - 60, fifa.canvas.height / 2 - 60);
        fifa.crc2.lineTo(fifa.canvas.width - 10, fifa.canvas.height / 2 - 60);
        fifa.crc2.lineTo(fifa.canvas.width - 10, fifa.canvas.height / 2 + 60);
        fifa.crc2.lineTo(fifa.canvas.width - 60, fifa.canvas.height / 2 + 60);
        fifa.crc2.strokeStyle = "black";
        fifa.crc2.fillStyle = "hsla(0, 0%, 100%, 70%)";
        fifa.crc2.lineWidth = 5;
        fifa.crc2.closePath();
        fifa.crc2.stroke();
        fifa.crc2.fill();
        // Strafraum links
        fifa.crc2.beginPath();
        fifa.crc2.moveTo(60, fifa.canvas.height / 2 - 180);
        fifa.crc2.lineTo(160, fifa.canvas.height / 2 - 180);
        fifa.crc2.lineTo(160, fifa.canvas.height / 2 + 180);
        fifa.crc2.lineTo(60, fifa.canvas.height / 2 + 180);
        fifa.crc2.strokeStyle = "White";
        fifa.crc2.lineWidth = 10;
        fifa.crc2.closePath();
        fifa.crc2.stroke();
        // Strafraum rechts
        fifa.crc2.beginPath();
        fifa.crc2.moveTo(fifa.canvas.width - 60, fifa.canvas.height / 2 - 180);
        fifa.crc2.lineTo(fifa.canvas.width - 160, fifa.canvas.height / 2 - 180);
        fifa.crc2.lineTo(fifa.canvas.width - 160, fifa.canvas.height / 2 + 180);
        fifa.crc2.lineTo(fifa.canvas.width - 60, fifa.canvas.height / 2 + 180);
        fifa.crc2.strokeStyle = "White";
        fifa.crc2.lineWidth = 10;
        fifa.crc2.closePath();
        fifa.crc2.stroke();
        // Fünf-Meter-Raum links
        fifa.crc2.beginPath();
        fifa.crc2.moveTo(60, fifa.canvas.height / 2 - 90);
        fifa.crc2.lineTo(120, fifa.canvas.height / 2 - 90);
        fifa.crc2.lineTo(120, fifa.canvas.height / 2 + 90);
        fifa.crc2.lineTo(60, fifa.canvas.height / 2 + 90);
        fifa.crc2.strokeStyle = "White";
        fifa.crc2.lineWidth = 10;
        fifa.crc2.closePath();
        fifa.crc2.stroke();
        // Fünf-Meter-Raum rechts
        fifa.crc2.beginPath();
        fifa.crc2.moveTo(fifa.canvas.width - 60, fifa.canvas.height / 2 - 90);
        fifa.crc2.lineTo(fifa.canvas.width - 120, fifa.canvas.height / 2 - 90);
        fifa.crc2.lineTo(fifa.canvas.width - 120, fifa.canvas.height / 2 + 90);
        fifa.crc2.lineTo(fifa.canvas.width - 60, fifa.canvas.height / 2 + 90);
        fifa.crc2.strokeStyle = "White";
        fifa.crc2.lineWidth = 10;
        fifa.crc2.closePath();
        fifa.crc2.stroke();
    }
    fifa.drawField = drawField;
    function drawPlayer() {
        fifa.crc2.translate(fifa.canvas.width / 2, fifa.canvas.height / 2);
        fifa.crc2.fillStyle = "red";
        fifa.crc2.lineWidth = 2;
        fifa.crc2.strokeStyle = "red";
        // Ärmel rechts
        fifa.crc2.beginPath();
        fifa.crc2.lineTo(50, 2);
        fifa.crc2.lineTo(70, 10);
        fifa.crc2.lineTo(65, 25);
        fifa.crc2.lineTo(40, 15);
        fifa.crc2.closePath();
        fifa.crc2.stroke();
        fifa.crc2.fill();
        // Ärmel links
        fifa.crc2.beginPath();
        fifa.crc2.moveTo(0, 2);
        fifa.crc2.lineTo(-20, 10);
        fifa.crc2.lineTo(-15, 25);
        fifa.crc2.lineTo(10, 15);
        fifa.crc2.closePath();
        fifa.crc2.stroke();
        fifa.crc2.fill();
        fifa.crc2.fillRect(0, 0, 50, 80);
    }
    fifa.drawPlayer = drawPlayer;
    function drawBall() {
        fifa.crc2.strokeStyle = "black";
        fifa.crc2.fillStyle = "white";
        let radius = 10;
        fifa.crc2.lineWidth = 5;
        fifa.crc2.moveTo(fifa.canvas.width / 2, fifa.canvas.height / 2);
        fifa.crc2.beginPath();
        fifa.crc2.arc(50, 80, radius, 0, 2 * Math.PI);
        fifa.crc2.closePath();
        fifa.crc2.stroke();
        fifa.crc2.fill();
    }
    fifa.drawBall = drawBall;
})(fifa || (fifa = {}));
//# sourceMappingURL=paths.js.map