"use strict";
var endaufgabe_jogi;
(function (endaufgabe_jogi) {
    function drawField() {
        endaufgabe_jogi.crc2.fillStyle = "green";
        endaufgabe_jogi.crc2.fillRect(0, 0, endaufgabe_jogi.crc2.canvas.width, endaufgabe_jogi.crc2.canvas.height);
        // Rand Linie, Aus
        endaufgabe_jogi.crc2.beginPath();
        endaufgabe_jogi.crc2.moveTo(endaufgabe_jogi.canvas.width / 95 * 5, endaufgabe_jogi.canvas.height / 75 * 5);
        endaufgabe_jogi.crc2.lineTo(endaufgabe_jogi.canvas.width / 100 * 95, endaufgabe_jogi.canvas.height / 75 * 5);
        endaufgabe_jogi.crc2.lineTo(endaufgabe_jogi.canvas.width / 100 * 95, endaufgabe_jogi.canvas.height / 75 * 70);
        endaufgabe_jogi.crc2.lineTo(endaufgabe_jogi.canvas.width / 95 * 5, endaufgabe_jogi.canvas.height / 75 * 70);
        endaufgabe_jogi.crc2.closePath();
        endaufgabe_jogi.crc2.strokeStyle = "white";
        endaufgabe_jogi.crc2.lineWidth = 10;
        endaufgabe_jogi.crc2.stroke();
        // Mittellinie
        endaufgabe_jogi.crc2.save();
        endaufgabe_jogi.crc2.beginPath();
        endaufgabe_jogi.crc2.moveTo(endaufgabe_jogi.canvas.width / 2, endaufgabe_jogi.canvas.height / 75 * 5);
        endaufgabe_jogi.crc2.lineTo(endaufgabe_jogi.canvas.width / 2, endaufgabe_jogi.canvas.height / 75 * 70);
        endaufgabe_jogi.crc2.closePath();
        endaufgabe_jogi.crc2.strokeStyle = "white";
        endaufgabe_jogi.crc2.lineWidth = 10;
        endaufgabe_jogi.crc2.stroke();
        endaufgabe_jogi.crc2.restore();
        // Kreis
        endaufgabe_jogi.crc2.save();
        let radius = 50;
        endaufgabe_jogi.crc2.beginPath();
        endaufgabe_jogi.crc2.arc(endaufgabe_jogi.canvas.width / 2, endaufgabe_jogi.canvas.height / 2, radius, 0, 2 * Math.PI);
        endaufgabe_jogi.crc2.strokeStyle = "white";
        endaufgabe_jogi.crc2.closePath();
        endaufgabe_jogi.crc2.stroke();
        // Tor links
        endaufgabe_jogi.crc2.beginPath();
        endaufgabe_jogi.crc2.moveTo(60, endaufgabe_jogi.canvas.height / 2 - 60);
        endaufgabe_jogi.crc2.lineTo(10, endaufgabe_jogi.canvas.height / 2 - 60);
        endaufgabe_jogi.crc2.lineTo(10, endaufgabe_jogi.canvas.height / 2 + 60);
        endaufgabe_jogi.crc2.lineTo(60, endaufgabe_jogi.canvas.height / 2 + 60);
        endaufgabe_jogi.crc2.strokeStyle = "black";
        endaufgabe_jogi.crc2.fillStyle = "hsla(0, 0%, 100%, 70%)";
        endaufgabe_jogi.crc2.lineWidth = 5;
        endaufgabe_jogi.crc2.closePath();
        endaufgabe_jogi.crc2.stroke();
        endaufgabe_jogi.crc2.fill();
        // Tor rechts
        endaufgabe_jogi.crc2.beginPath();
        endaufgabe_jogi.crc2.moveTo(endaufgabe_jogi.canvas.width - 60, endaufgabe_jogi.canvas.height / 2 - 60);
        endaufgabe_jogi.crc2.lineTo(endaufgabe_jogi.canvas.width - 10, endaufgabe_jogi.canvas.height / 2 - 60);
        endaufgabe_jogi.crc2.lineTo(endaufgabe_jogi.canvas.width - 10, endaufgabe_jogi.canvas.height / 2 + 60);
        endaufgabe_jogi.crc2.lineTo(endaufgabe_jogi.canvas.width - 60, endaufgabe_jogi.canvas.height / 2 + 60);
        endaufgabe_jogi.crc2.strokeStyle = "black";
        endaufgabe_jogi.crc2.fillStyle = "hsla(0, 0%, 100%, 70%)";
        endaufgabe_jogi.crc2.lineWidth = 5;
        endaufgabe_jogi.crc2.closePath();
        endaufgabe_jogi.crc2.stroke();
        endaufgabe_jogi.crc2.fill();
        // Strafraum links
        endaufgabe_jogi.crc2.beginPath();
        endaufgabe_jogi.crc2.moveTo(60, endaufgabe_jogi.canvas.height / 2 - 180);
        endaufgabe_jogi.crc2.lineTo(160, endaufgabe_jogi.canvas.height / 2 - 180);
        endaufgabe_jogi.crc2.lineTo(160, endaufgabe_jogi.canvas.height / 2 + 180);
        endaufgabe_jogi.crc2.lineTo(60, endaufgabe_jogi.canvas.height / 2 + 180);
        endaufgabe_jogi.crc2.strokeStyle = "White";
        endaufgabe_jogi.crc2.lineWidth = 10;
        endaufgabe_jogi.crc2.closePath();
        endaufgabe_jogi.crc2.stroke();
        // Strafraum rechts
        endaufgabe_jogi.crc2.beginPath();
        endaufgabe_jogi.crc2.moveTo(endaufgabe_jogi.canvas.width - 60, endaufgabe_jogi.canvas.height / 2 - 180);
        endaufgabe_jogi.crc2.lineTo(endaufgabe_jogi.canvas.width - 160, endaufgabe_jogi.canvas.height / 2 - 180);
        endaufgabe_jogi.crc2.lineTo(endaufgabe_jogi.canvas.width - 160, endaufgabe_jogi.canvas.height / 2 + 180);
        endaufgabe_jogi.crc2.lineTo(endaufgabe_jogi.canvas.width - 60, endaufgabe_jogi.canvas.height / 2 + 180);
        endaufgabe_jogi.crc2.strokeStyle = "White";
        endaufgabe_jogi.crc2.lineWidth = 10;
        endaufgabe_jogi.crc2.closePath();
        endaufgabe_jogi.crc2.stroke();
        // Fünf-Meter-Raum links
        endaufgabe_jogi.crc2.beginPath();
        endaufgabe_jogi.crc2.moveTo(60, endaufgabe_jogi.canvas.height / 2 - 90);
        endaufgabe_jogi.crc2.lineTo(120, endaufgabe_jogi.canvas.height / 2 - 90);
        endaufgabe_jogi.crc2.lineTo(120, endaufgabe_jogi.canvas.height / 2 + 90);
        endaufgabe_jogi.crc2.lineTo(60, endaufgabe_jogi.canvas.height / 2 + 90);
        endaufgabe_jogi.crc2.strokeStyle = "White";
        endaufgabe_jogi.crc2.lineWidth = 10;
        endaufgabe_jogi.crc2.closePath();
        endaufgabe_jogi.crc2.stroke();
        // Fünf-Meter-Raum rechts
        endaufgabe_jogi.crc2.beginPath();
        endaufgabe_jogi.crc2.moveTo(endaufgabe_jogi.canvas.width - 60, endaufgabe_jogi.canvas.height / 2 - 90);
        endaufgabe_jogi.crc2.lineTo(endaufgabe_jogi.canvas.width - 120, endaufgabe_jogi.canvas.height / 2 - 90);
        endaufgabe_jogi.crc2.lineTo(endaufgabe_jogi.canvas.width - 120, endaufgabe_jogi.canvas.height / 2 + 90);
        endaufgabe_jogi.crc2.lineTo(endaufgabe_jogi.canvas.width - 60, endaufgabe_jogi.canvas.height / 2 + 90);
        endaufgabe_jogi.crc2.strokeStyle = "White";
        endaufgabe_jogi.crc2.lineWidth = 10;
        endaufgabe_jogi.crc2.closePath();
        endaufgabe_jogi.crc2.stroke();
    }
    endaufgabe_jogi.drawField = drawField;
    function drawPlayer(_position, _type, _color, _team) {
        endaufgabe_jogi.crc2.translate(endaufgabe_jogi.canvas.width / 2, endaufgabe_jogi.canvas.height / 2);
        endaufgabe_jogi.crc2.fillStyle = "red";
        endaufgabe_jogi.crc2.lineWidth = 2;
        endaufgabe_jogi.crc2.strokeStyle = "red";
        // Ärmel rechts
        endaufgabe_jogi.crc2.beginPath();
        endaufgabe_jogi.crc2.lineTo(50, 2);
        endaufgabe_jogi.crc2.lineTo(70, 10);
        endaufgabe_jogi.crc2.lineTo(65, 25);
        endaufgabe_jogi.crc2.lineTo(40, 15);
        endaufgabe_jogi.crc2.closePath();
        endaufgabe_jogi.crc2.stroke();
        endaufgabe_jogi.crc2.fill();
        // Ärmel links
        endaufgabe_jogi.crc2.beginPath();
        endaufgabe_jogi.crc2.moveTo(0, 2);
        endaufgabe_jogi.crc2.lineTo(-20, 10);
        endaufgabe_jogi.crc2.lineTo(-15, 25);
        endaufgabe_jogi.crc2.lineTo(10, 15);
        endaufgabe_jogi.crc2.closePath();
        endaufgabe_jogi.crc2.stroke();
        endaufgabe_jogi.crc2.fill();
        endaufgabe_jogi.crc2.fillRect(0, 0, 50, 80);
    }
    endaufgabe_jogi.drawPlayer = drawPlayer;
    function drawBall(_position) {
        endaufgabe_jogi.crc2.strokeStyle = "black";
        endaufgabe_jogi.crc2.fillStyle = "white";
        let radius = 10;
        endaufgabe_jogi.crc2.lineWidth = 5;
        endaufgabe_jogi.crc2.moveTo(endaufgabe_jogi.canvas.width / 2, endaufgabe_jogi.canvas.height / 2);
        endaufgabe_jogi.crc2.beginPath();
        endaufgabe_jogi.crc2.arc(50, 80, radius, 0, 2 * Math.PI);
        endaufgabe_jogi.crc2.closePath();
        endaufgabe_jogi.crc2.stroke();
        endaufgabe_jogi.crc2.fill();
    }
    endaufgabe_jogi.drawBall = drawBall;
})(endaufgabe_jogi || (endaufgabe_jogi = {}));
//# sourceMappingURL=paths.js.map