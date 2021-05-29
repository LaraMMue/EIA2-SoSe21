namespace L09Landscape {

    export function drawCloud(_position: Vector): void {
        let nParticles: number = 40;
        let particleRadius: number = 70;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);

        //create particle
        particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSL(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSL(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y - 350);
        crc2.fillStyle = gradient;

        //build cloud with particles
        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * 300;
            let y: number = - (Math.random() * 125);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();

    }

    export function drawBee(_position: Vector): void {

        crc2.save();
        crc2.beginPath();
        crc2.ellipse(_position.x, _position.y, 20, 10, 0, 0, 2 * Math.PI);
        crc2.save();
        crc2.translate(_position.x - 2, _position.y - 5);

        crc2.moveTo(20, 1);
        crc2.lineTo(30, 5);
        crc2.lineTo(20, 9);
        crc2.lineTo(20, 1);
        crc2.fillStyle = "Black";
        crc2.strokeStyle = "Black";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        crc2.save();
        crc2.beginPath();
        crc2.ellipse(0, -12, 4, 8, -10, 0, 2 * Math.PI);
        crc2.strokeStyle = "Blue";
        crc2.lineWidth = 1;
        crc2.fillStyle = "Lightblue";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.ellipse(10, -12, 4, 8, 10, 0, 2 * Math.PI);
        crc2.strokeStyle = "Blue";
        crc2.lineWidth = 1;
        crc2.fillStyle = "Lightblue";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

        crc2.beginPath();
        crc2.moveTo(20, -1);
        crc2.lineTo(20, 11);
        crc2.moveTo(10, -5);
        crc2.lineTo(10, 15);
        crc2.moveTo(0, -6);
        crc2.lineTo(0, 16);
        crc2.strokeStyle = "Yellow";
        crc2.lineWidth = 4;
        crc2.stroke();

        crc2.beginPath();
        crc2.arc(-10, 3, 2, 0, 2 * Math.PI);
        crc2.strokeStyle = "white";
        crc2.lineWidth = 2;
        crc2.fillStyle = "Black";
        crc2.stroke();
        crc2.fill();

    }
    

}