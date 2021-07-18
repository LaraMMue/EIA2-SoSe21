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
        endaufgabe_jogi.crc2.save();
        endaufgabe_jogi.crc2.fillStyle = _color;
        endaufgabe_jogi.crc2.beginPath();
        endaufgabe_jogi.crc2.moveTo(_position.x - endaufgabe_jogi.canvas.width / 110 * 2, _position.y - endaufgabe_jogi.canvas.height / 75 * 2);
        endaufgabe_jogi.crc2.lineTo((_position.x - endaufgabe_jogi.canvas.width / 110 * 2) + endaufgabe_jogi.canvas.width / 110 * 3, _position.y - endaufgabe_jogi.canvas.height / 75 * 2);
        endaufgabe_jogi.crc2.lineTo((_position.x - endaufgabe_jogi.canvas.width / 110 * 2) + endaufgabe_jogi.canvas.width / 110 * 3, (_position.y - endaufgabe_jogi.canvas.height / 75 * 2) - endaufgabe_jogi.canvas.height / 75 * 2);
        endaufgabe_jogi.crc2.lineTo((_position.x - endaufgabe_jogi.canvas.width / 110 * 2) + endaufgabe_jogi.canvas.width / 110 * 3 + endaufgabe_jogi.canvas.width / 110 * 1, (_position.y - endaufgabe_jogi.canvas.height / 75 * 2) - endaufgabe_jogi.canvas.height / 75 * 2 + endaufgabe_jogi.canvas.height / 75 * 1);
        endaufgabe_jogi.crc2.lineTo((_position.x - endaufgabe_jogi.canvas.width / 110 * 2) + endaufgabe_jogi.canvas.width / 110 * 3 + 2 * (endaufgabe_jogi.canvas.width / 110 * 1), (_position.y - endaufgabe_jogi.canvas.height / 75 * 2) - endaufgabe_jogi.canvas.height / 75 * 2);
        endaufgabe_jogi.crc2.lineTo((_position.x - endaufgabe_jogi.canvas.width / 110 * 2) + endaufgabe_jogi.canvas.width / 110 * 3 + 2 * (endaufgabe_jogi.canvas.width / 110 * 1) - endaufgabe_jogi.canvas.width / 110 * 2, (_position.y - endaufgabe_jogi.canvas.height / 75 * 2) - endaufgabe_jogi.canvas.height / 75 * 4);
        endaufgabe_jogi.crc2.lineTo((_position.x - endaufgabe_jogi.canvas.width / 110 * 2) + endaufgabe_jogi.canvas.width / 110 * 3 + 2 * (endaufgabe_jogi.canvas.width / 110 * 1) - endaufgabe_jogi.canvas.width / 110 * 5, (_position.y - endaufgabe_jogi.canvas.height / 75 * 2) - endaufgabe_jogi.canvas.height / 75 * 4);
        endaufgabe_jogi.crc2.lineTo((_position.x - endaufgabe_jogi.canvas.width / 110 * 2) + endaufgabe_jogi.canvas.width / 110 * 3 + 2 * (endaufgabe_jogi.canvas.width / 110 * 1) - endaufgabe_jogi.canvas.width / 110 * 7, (_position.y - endaufgabe_jogi.canvas.height / 75 * 2) - endaufgabe_jogi.canvas.height / 75 * 2);
        endaufgabe_jogi.crc2.lineTo((_position.x - endaufgabe_jogi.canvas.width / 110 * 2) + endaufgabe_jogi.canvas.width / 110 * 3 + 2 * (endaufgabe_jogi.canvas.width / 110 * 1) - endaufgabe_jogi.canvas.width / 110 * 6, (_position.y - endaufgabe_jogi.canvas.height / 75 * 2) - endaufgabe_jogi.canvas.height / 75 * 1);
        endaufgabe_jogi.crc2.lineTo((_position.x - endaufgabe_jogi.canvas.width / 110 * 2) + endaufgabe_jogi.canvas.width / 110 * 3 + 2 * (endaufgabe_jogi.canvas.width / 110 * 1) - endaufgabe_jogi.canvas.width / 110 * 5, (_position.y - endaufgabe_jogi.canvas.height / 75 * 2) - endaufgabe_jogi.canvas.height / 75 * 2);
        endaufgabe_jogi.crc2.closePath();
        endaufgabe_jogi.crc2.fill();
        endaufgabe_jogi.crc2.restore();
        if (_type == "lineJudge") {
            endaufgabe_jogi.crc2.save();
            endaufgabe_jogi.crc2.beginPath();
            endaufgabe_jogi.crc2.moveTo(_position.x - endaufgabe_jogi.canvas.width / 110 * 2, _position.y - endaufgabe_jogi.canvas.height / 75 * 3);
            endaufgabe_jogi.crc2.lineTo((_position.x - endaufgabe_jogi.canvas.width / 110 * 2) + endaufgabe_jogi.canvas.width / 110 * 3, _position.y - endaufgabe_jogi.canvas.height / 75 * 3);
            endaufgabe_jogi.crc2.closePath();
            endaufgabe_jogi.crc2.lineWidth = 7;
            endaufgabe_jogi.crc2.stroke();
            endaufgabe_jogi.crc2.restore();
        }
        if (_type == "referee") {
            endaufgabe_jogi.crc2.save();
            endaufgabe_jogi.crc2.beginPath();
            endaufgabe_jogi.crc2.moveTo((_position.x - endaufgabe_jogi.canvas.width / 110 * 2.5) + endaufgabe_jogi.canvas.width / 110 + 10, _position.y - endaufgabe_jogi.canvas.height / 75 * 5);
            endaufgabe_jogi.crc2.lineTo((_position.x - endaufgabe_jogi.canvas.width / 110 * 2.5) + endaufgabe_jogi.canvas.width / 110 + 10, _position.y - endaufgabe_jogi.canvas.height / 75 * 3);
            endaufgabe_jogi.crc2.lineWidth = 3;
            endaufgabe_jogi.crc2.stroke();
            endaufgabe_jogi.crc2.restore();
        }
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