"use strict";
var L11_1_Advanced;
(function (L11_1_Advanced) {
    /*
   Aufgabe: L11.1 BlumenwieseAdvanced
   Name: Lara Müller
   Matrikel: 266298
   Datum: 18.06.2021
   mithilfe des Codes aus der Lektion + Lisa Herbigs Hilfe
   */
    window.addEventListener("load", handleLoad);
    L11_1_Advanced.canvas = document.querySelector("canvas");
    L11_1_Advanced.crc2 = L11_1_Advanced.canvas.getContext("2d");
    let imgData;
    let moveables = [];
    let flowers = [];
    let windowWith = window.innerWidth;
    let windowHeight = window.innerHeight;
    L11_1_Advanced.goldenRatio = 0.62;
    for (let h = 0; h < L11_1_Advanced.randomNum(20, 100); h++) {
        let type = L11_1_Advanced.randomNum(0, 1);
        switch (type) {
            case (0):
                let pos1 = new L11_1_Advanced.Vector(L11_1_Advanced.randomNum(10, 310), L11_1_Advanced.randomNum(400, 700));
                let flower1 = new L11_1_Advanced.Flower1(pos1);
                flowers.push(flower1);
                break;
            case (1):
                let pos2 = new L11_1_Advanced.Vector(L11_1_Advanced.randomNum(10, 310), L11_1_Advanced.randomNum(400, 700));
                let flower2 = new L11_1_Advanced.Flower2(pos2);
                flowers.push(flower2);
                break;
            default:
                console.log("Something went wrong");
        }
    }
    function handleLoad() {
        L11_1_Advanced.canvas.width = windowWith;
        L11_1_Advanced.canvas.height = windowHeight;
        let horizon = L11_1_Advanced.crc2.canvas.height * L11_1_Advanced.goldenRatio;
        L11_1_Advanced.drawBackground();
        L11_1_Advanced.drawSun(new L11_1_Advanced.Vector(L11_1_Advanced.randomNum(20, 1100), L11_1_Advanced.randomNum(10, 130)));
        L11_1_Advanced.drawMountains({ x: 0, y: horizon }, 150, 300, "#3b3b3b", "white");
        L11_1_Advanced.drawMountains({ x: 0, y: horizon }, 70, 150, "#3b3b3b", "grey");
        L11_1_Advanced.drawTrees();
        L11_1_Advanced.drawBeehive({ x: 0, y: horizon + 100 });
        for (let flower of flowers) {
            flower.draw();
            flower.displayNectarLevel();
        }
        L11_1_Advanced.drawBeehive(new L11_1_Advanced.Vector(600, 500));
        imgData = L11_1_Advanced.crc2.getImageData(0, 0, L11_1_Advanced.crc2.canvas.width, L11_1_Advanced.crc2.canvas.height);
        window.setInterval(update, 20);
    }
    //Cloud
    for (let j = 0; j < 3; j++) {
        let type = "Cloud";
        let pos = new L11_1_Advanced.Vector(5 * j, 15);
        let cloud = new L11_1_Advanced.Cloud(pos, type);
        moveables.push(cloud);
    }
    //Bee
    for (let k = 0; k < 8; k++) {
        let type = "Bee";
        let pos = new L11_1_Advanced.Vector(655, 455);
        let bee = new L11_1_Advanced.Bee(pos, type);
        moveables.push(bee);
    }
    function update() {
        L11_1_Advanced.crc2.clearRect(0, 0, windowWith, windowHeight);
        L11_1_Advanced.crc2.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        //console.log("update");
    }
})(L11_1_Advanced || (L11_1_Advanced = {}));
//# sourceMappingURL=main.js.map