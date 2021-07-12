"use strict";
var fifa;
(function (fifa) {
    window.addEventListener("load", handleLoad);
    fifa.canvas = document.querySelector("canvas");
    fifa.crc2 = fifa.canvas.getContext("2d");
    let windowWith = window.innerWidth;
    let windowHeight = window.innerHeight;
    function handleLoad() {
        fifa.canvas.width = windowWith;
        fifa.canvas.height = windowHeight;
        fifa.drawField();
        fifa.drawPlayer();
        fifa.drawBall();
    }
})(fifa || (fifa = {}));
//# sourceMappingURL=main.js.map