"use strict";
var L10_2_Polymorphie;
(function (L10_2_Polymorphie) {
    /*
   Aufgabe: L10.2 Blumenwiese: Polymorphie
   Name: Lara Müller
   Matrikel: 266298
   Datum: 12.06.2021
   mithilfe der Beispiele aus der Lektion + Lisa Herbigs Hilfe
   */
    window.addEventListener("load", handleLoad);
    let imgData;
    let windowWith = window.innerWidth;
    let windowHeight = window.innerHeight;
    let goldenRatio = 0.62;
    let moveables = [];
    L10_2_Polymorphie.canvas = document.querySelector("canvas");
    L10_2_Polymorphie.crc2 = L10_2_Polymorphie.canvas.getContext("2d");
    function handleLoad() {
        L10_2_Polymorphie.canvas.width = windowWith;
        L10_2_Polymorphie.canvas.height = windowHeight;
        let horizon = L10_2_Polymorphie.crc2.canvas.height * goldenRatio;
        L10_2_Polymorphie.drawBackground();
        L10_2_Polymorphie.drawSun(new L10_2_Polymorphie.Vector(L10_2_Polymorphie.randomNum(20, 1100), L10_2_Polymorphie.randomNum(10, 130)));
        L10_2_Polymorphie.drawMountains({ x: 0, y: horizon }, 150, 300, "#3b3b3b", "white");
        L10_2_Polymorphie.drawMountains({ x: 0, y: horizon }, 70, 150, "#3b3b3b", "grey");
        L10_2_Polymorphie.drawTrees();
        for (let i = 0; i < L10_2_Polymorphie.randomNum(50, 100); i++) {
            let flower = new L10_2_Polymorphie.Flower();
            flower.draw();
        }
        imgData = L10_2_Polymorphie.crc2.getImageData(0, 0, L10_2_Polymorphie.crc2.canvas.width, L10_2_Polymorphie.crc2.canvas.height);
        window.setInterval(update, 20);
    }
    for (let j = 0; j < 3; j++) {
        let type = "Cloud";
        let pos = new L10_2_Polymorphie.Vector(5 * j, 15);
        let cloud = new L10_2_Polymorphie.Cloud(pos, type);
        moveables.push(cloud);
    }
    for (let k = 0; k < 8; k++) {
        let type = "Bee";
        let pos = new L10_2_Polymorphie.Vector(655, 455);
        let bee = new L10_2_Polymorphie.Bee(pos, type);
        moveables.push(bee);
    }
    function update() {
        L10_2_Polymorphie.crc2.clearRect(0, 0, windowWith, windowHeight);
        L10_2_Polymorphie.crc2.putImageData(imgData, 0, 0);
        /*for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }*/
        for (let moveable of moveables) {
            if (moveable instanceof L10_2_Polymorphie.Cloud) {
                moveable.move(1 / 50);
                moveable.draw();
            }
            else if (moveable instanceof L10_2_Polymorphie.Bee) {
                moveable.move(1 / L10_2_Polymorphie.randomNum(25, 125));
                moveable.draw();
            }
        }
        console.log("update");
    }
})(L10_2_Polymorphie || (L10_2_Polymorphie = {}));
//# sourceMappingURL=main.js.map