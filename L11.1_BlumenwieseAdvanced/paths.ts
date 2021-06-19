namespace L11_1_Advanced {

    //Random Number
    export function randomNum(_min: number, _max: number): number {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }

    //Background
    export function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(goldenRatio - 0.02, "white");
        gradient.addColorStop(0.63, "lightgreen");
        gradient.addColorStop(1, "green");
    
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    } 

    //Cloud
    export function drawCloud(_position: Vector): void {
        let nParticles: number = 10;
        let particleRadius: number = 70;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);
 
        particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
 
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
 
        for (let drawn: number = 0; drawn < nParticles; drawn ++) {
        crc2.save();
        let x: number = 50 + 10 * drawn;
        let y: number = 2 + drawn;
        crc2.translate(x, y);
        crc2.fill(particle);
        crc2.restore();
       }
        crc2.restore();
    }

        //Sun
    export function drawSun(_position: Vector): void {
            let r1: number = 30;
            let r2: number = 150;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        
        }

            //Mountains
    export function drawMountains(_position: any, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;
    
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
    
        do {
            x += stepMin + randomNum(stepMin, stepMax);
            let y: number = -_min - randomNum(_min, _max);
    
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
    
        crc2.lineTo(x, 0);
        crc2.closePath();
    
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore(); 
    }

    export function drawTrees(): void {
        console.log("Trees");
        let x: number = 0;
        let minStep: number = 5;
        let maxStep: number = 400;
        let yTree: number = -75;

        do {
            let horizon: number = crc2.canvas.height * goldenRatio;
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

 
        //Flower 1
    export function drawFlower1(_min: number, _max: number): void {
                let minStep: number = 70;
                let maxStep: number = 80;
                let horizon: number = crc2.canvas.height * goldenRatio;
                let x: number = 0;

                do {
                    let y: number = -_min - Math.random() * (_max - _min);
                    crc2.save();
                    crc2.translate(x, y + (horizon + 45));
        
                    let randomSize: number = 0.5 + Math.random() * (1.5 - 0.5);
                    let r1: number = 7;
                    let r2: number = 4;
        
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
        
        //Flower 2
    export function drawFlower2(_min: number, _max: number): void {
            console.log("Flower2");
            let minStep: number = 60;
            let maxStep: number = 70;
            let horizon: number = crc2.canvas.height * goldenRatio;
            let x: number = 0;
    
            do {
                let y: number = -_min - Math.random() * (_max - _min);
                crc2.save();
                crc2.translate(x, y + (horizon + 50));
    
                let randomSize: number = 0.5 + Math.random() * (1.5 - 0.5);
                let r1: number = 7;
                let r2: number = 4;
    
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
    
        

        //Bee
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

        //console.log("hallo");
        
    }
        
        //beehive
    export function drawBeehive(_position: any): void {
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.beginPath();
            crc2.fillStyle = "#de8e4a";
            crc2.fillRect(500, 0, 80, -80);
            crc2.fill();
            crc2.closePath();
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(_position.x, _position.y - 20);
            crc2.fillStyle = "#5c4326";
            crc2.fillRect(500, 0, 80, -10);
            crc2.moveTo(0, 20);
            crc2.fillRect(500, -20, 80, -10);
            crc2.moveTo(0, 20);
            crc2.fillRect(500, -40, 80, -10);
            crc2.moveTo(0, 20);
            crc2.fillRect(500, -60, 80, -10);
            crc2.fill();
            crc2.closePath();
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(_position.x, _position.y);
            crc2.fillStyle = "black";
            crc2.fillRect(530, -55, 20, 20);

        }
        //Nectar
    export function showNectar(_position: Vector, _degree: number, _color: string, _fps: number): void {
        let x: number = _position.x + 2;
        let y: number = _position.y + 7;
        let degree: number = _degree;
        degree = 0;
        let intervall: number = setInterval (function(): void {
        degree += 1;
        crc2.save();
        crc2.beginPath();
        crc2.arc(x, y, 10, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
        crc2.strokeStyle = "white";
        crc2.lineWidth = 5;
        crc2.lineCap = "round";
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
        crc2.save();
        crc2.beginPath();
        crc2.strokeStyle = _color;
        crc2.lineWidth = 5;
        crc2.lineCap = "round";
        crc2.arc(x, y, 10, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + degree));
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
        //console.log(intervall);
        if (degree == 361)   
            clearInterval(intervall);
    },                                       _fps);    
    }



}
