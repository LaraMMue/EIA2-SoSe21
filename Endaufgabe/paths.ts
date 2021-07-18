namespace endaufgabe_jogi {
    export function drawField(): void {
        
        crc2.fillStyle = "green";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


        // Rand Linie, Aus
        crc2.beginPath();
        crc2.moveTo(canvas.width / 95 * 5, canvas.height / 75 * 5);
        crc2.lineTo(canvas.width / 100 * 95, canvas.height / 75 * 5);
        crc2.lineTo(canvas.width / 100 * 95, canvas.height / 75 * 70);
        crc2.lineTo(canvas.width / 95 * 5, canvas.height / 75 * 70);
        crc2.closePath();

        crc2.strokeStyle = "white";
        crc2.lineWidth = 10;
        crc2.stroke();

        // Mittellinie
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(canvas.width / 2, canvas.height / 75 * 5);
        
        crc2.lineTo(canvas.width / 2, canvas.height / 75 * 70);
        crc2.closePath();

        crc2.strokeStyle = "white";
        crc2.lineWidth = 10;
        crc2.stroke();

        crc2.restore();

        // Kreis
        crc2.save();
        let radius: number = 50;
        crc2.beginPath();
        crc2.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
        crc2.strokeStyle = "white";
        crc2.closePath();
        crc2.stroke();

        // Tor links
        crc2.beginPath();
        crc2.moveTo(60, canvas.height / 2 - 60);
        crc2.lineTo(10, canvas.height / 2 - 60);
        crc2.lineTo(10, canvas.height / 2 + 60);
        crc2.lineTo(60, canvas.height / 2 + 60);

        crc2.strokeStyle = "black";
        crc2.fillStyle = "hsla(0, 0%, 100%, 70%)";
        crc2.lineWidth = 5;
        crc2.closePath();
        
        crc2.stroke();
        crc2.fill();

        // Tor rechts
        crc2.beginPath();
        crc2.moveTo(canvas.width - 60, canvas.height / 2 - 60);
        crc2.lineTo(canvas.width - 10, canvas.height / 2 - 60);
        crc2.lineTo(canvas.width - 10, canvas.height / 2 + 60);
        crc2.lineTo(canvas.width - 60, canvas.height / 2 + 60);

        crc2.strokeStyle = "black";
        crc2.fillStyle = "hsla(0, 0%, 100%, 70%)";
        crc2.lineWidth = 5;
        crc2.closePath();
        
        crc2.stroke();
        crc2.fill();

        // Strafraum links
        crc2.beginPath();
        crc2.moveTo(60, canvas.height / 2 - 180);
        crc2.lineTo(160, canvas.height / 2 - 180);
        crc2.lineTo(160, canvas.height / 2 + 180);
        crc2.lineTo(60, canvas.height / 2 + 180);

        crc2.strokeStyle = "White";
        crc2.lineWidth = 10;
        crc2.closePath();

        crc2.stroke();
       

        // Strafraum rechts
        crc2.beginPath();
        crc2.moveTo(canvas.width - 60, canvas.height / 2 - 180);
        crc2.lineTo(canvas.width - 160, canvas.height / 2 - 180);
        crc2.lineTo(canvas.width - 160, canvas.height / 2 + 180);
        crc2.lineTo(canvas.width - 60, canvas.height / 2 + 180);

        crc2.strokeStyle = "White";
        crc2.lineWidth = 10;
        crc2.closePath();

        crc2.stroke();

        // Fünf-Meter-Raum links
        crc2.beginPath();
        crc2.moveTo(60, canvas.height / 2 - 90);
        crc2.lineTo(120, canvas.height / 2 - 90);
        crc2.lineTo(120, canvas.height / 2 + 90);
        crc2.lineTo(60, canvas.height / 2 + 90);

        crc2.strokeStyle = "White";
        crc2.lineWidth = 10;
        crc2.closePath();

        crc2.stroke();

        // Fünf-Meter-Raum rechts
        crc2.beginPath();
        crc2.moveTo(canvas.width - 60, canvas.height / 2 - 90);
        crc2.lineTo(canvas.width - 120, canvas.height / 2 - 90);
        crc2.lineTo(canvas.width - 120, canvas.height / 2 + 90);
        crc2.lineTo(canvas.width - 60, canvas.height / 2 + 90);

        crc2.strokeStyle = "White";
        crc2.lineWidth = 10;
        crc2.closePath();

        crc2.stroke();
    }

    export function drawPlayer(_position: Vector, _type: string, _color: string, _team: string): void {
        crc2.save();
        crc2.fillStyle = _color;
        crc2.beginPath();
        crc2.moveTo(_position.x - canvas.width / 110 * 2, _position.y - canvas.height / 75 * 2);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3, _position.y - canvas.height / 75 * 2);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3, (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 2);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3 + canvas.width / 110 * 1, (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 2 + canvas.height / 75 * 1);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3 + 2 * (canvas.width / 110 * 1), (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 2);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3 + 2 * (canvas.width / 110 * 1) - canvas.width / 110 * 2, (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 4);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3 + 2 * (canvas.width / 110 * 1) - canvas.width / 110 * 5, (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 4);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3 + 2 * (canvas.width / 110 * 1) - canvas.width / 110 * 7, (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 2);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3 + 2 * (canvas.width / 110 * 1) - canvas.width / 110 * 6, (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 1);
        crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3 + 2 * (canvas.width / 110 * 1) - canvas.width / 110 * 5, (_position.y - canvas.height / 75 * 2) - canvas.height / 75 * 2);
        crc2.closePath();
        
        crc2.fill();
        crc2.restore();

        if (_type == "lineJudge") {
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(_position.x - canvas.width / 110 * 2, _position.y - canvas.height / 75 * 3);
            crc2.lineTo((_position.x - canvas.width / 110 * 2) + canvas.width / 110 * 3, _position.y - canvas.height / 75 * 3);
            crc2.closePath();
            crc2.lineWidth = 7;
            crc2.stroke();
            crc2.restore();
        }
        if (_type == "referee") {
            crc2.save();
            crc2.beginPath();
            crc2.moveTo((_position.x - canvas.width / 110 * 2.5) + canvas.width / 110 + 10, _position.y - canvas.height / 75 * 5);
            crc2.lineTo((_position.x - canvas.width / 110 * 2.5) + canvas.width / 110 + 10, _position.y - canvas.height / 75 * 3);
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.restore();
        }
    }

    export function drawBall(_position: Vector): void {
        crc2.strokeStyle = "black";
        crc2.fillStyle = "white";
        let radius: number = 10;
        crc2.lineWidth = 5;

        crc2.moveTo(canvas.width / 2, canvas.height / 2);

        crc2.beginPath();
        crc2.arc(50, 80, radius, 0, 2 * Math.PI);

        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }


}