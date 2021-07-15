"use strict";
var endaufgabe_jogi;
(function (endaufgabe_jogi) {
    endaufgabe_jogi.canvas = document.querySelector("canvas");
    endaufgabe_jogi.crc2 = endaufgabe_jogi.canvas.getContext("2d");
    let imgData;
    endaufgabe_jogi.ballPossession = document.querySelector("#ballPossession");
    endaufgabe_jogi.goals = document.querySelector("#goals");
    endaufgabe_jogi.checkArrival = true;
    endaufgabe_jogi.width = Number(endaufgabe_jogi.canvas.width);
    endaufgabe_jogi.height = Number(endaufgabe_jogi.canvas.height);
    let positionsA = [new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 10, endaufgabe_jogi.height / 2 + 30), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 15, endaufgabe_jogi.height / 75 * 17), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 15, endaufgabe_jogi.height / 75 * 65), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 32, endaufgabe_jogi.height / 2 + 30), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 43, endaufgabe_jogi.height / 2 - 110), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 43, endaufgabe_jogi.height / 2 + 180), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 57, endaufgabe_jogi.height / 2 + 125), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 75, endaufgabe_jogi.height / 75 * 15), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 75, endaufgabe_jogi.height / 75 * 68), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 88.5, endaufgabe_jogi.height / 2 - 50), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 88.5, endaufgabe_jogi.height / 2 + 110)];
    let positionsB = [new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 100, endaufgabe_jogi.height / 2 + 30), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 78, endaufgabe_jogi.height / 2 + 30), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 67, endaufgabe_jogi.height / 2 - 110), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 67, endaufgabe_jogi.height / 2 + 180), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 54, endaufgabe_jogi.height / 2 - 60), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 35, endaufgabe_jogi.height / 75 * 68), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 21.5, endaufgabe_jogi.height / 2 + 110), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 21.5, endaufgabe_jogi.height / 2 - 50), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 35, endaufgabe_jogi.height / 75 * 15), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 95, endaufgabe_jogi.height / 75 * 65), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 95, endaufgabe_jogi.height / 75 * 17)];
    let baseA = [new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 10, endaufgabe_jogi.height / 2 + 30), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 15, endaufgabe_jogi.height / 75 * 17), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 15, endaufgabe_jogi.height / 75 * 65), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 32, endaufgabe_jogi.height / 2 + 30), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 43, endaufgabe_jogi.height / 2 - 110), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 43, endaufgabe_jogi.height / 2 + 180), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 57, endaufgabe_jogi.height / 2 + 125), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 75, endaufgabe_jogi.height / 75 * 15), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 75, endaufgabe_jogi.height / 75 * 68), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 88.5, endaufgabe_jogi.height / 2 - 50), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 88.5, endaufgabe_jogi.height / 2 + 110)];
    let baseB = [new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 100, endaufgabe_jogi.height / 2 + 30), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 78, endaufgabe_jogi.height / 2 + 30), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 67, endaufgabe_jogi.height / 2 - 110), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 67, endaufgabe_jogi.height / 2 + 180), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 54, endaufgabe_jogi.height / 2 - 60), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 35, endaufgabe_jogi.height / 75 * 68), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 21.5, endaufgabe_jogi.height / 2 + 110), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 21.5, endaufgabe_jogi.height / 2 - 50), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 35, endaufgabe_jogi.height / 75 * 15), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 95, endaufgabe_jogi.height / 75 * 65), new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 110 * 95, endaufgabe_jogi.height / 75 * 17)];
    let TASK;
    (function (TASK) {
        TASK[TASK["WAIT"] = 0] = "WAIT";
        TASK[TASK["MOVE"] = 1] = "MOVE";
        TASK[TASK["MOVEBACK"] = 2] = "MOVEBACK";
    })(TASK = endaufgabe_jogi.TASK || (endaufgabe_jogi.TASK = {}));
    let windowWidth = window.innerWidth / 1.3;
    let windowHeight = window.innerHeight;
    let settingsA = document.querySelector("#settingsA");
    let settingsB = document.querySelector("#settingsB");
    let teamASettings = [];
    let teamBSettings = [];
    let teamA = "Team A";
    let teamB = "Team B";
    let colorA = "";
    let colorB = "";
    let speedMin = 5;
    let speedMaxA = Number("");
    let speedMaxB = Number("");
    let precisionMin = 5;
    let precisionMaxA = Number("");
    let precisionMaxB = Number("");
    let playerNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let menu = document.querySelector("#settings");
    let startbtn = document.querySelector("#start");
    let moveables = [];
    function createRandomNum(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    endaufgabe_jogi.createRandomNum = createRandomNum;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        endaufgabe_jogi.canvas.width = windowWidth;
        endaufgabe_jogi.canvas.height = windowHeight;
        settingsA.addEventListener("change", formChangeA);
        settingsB.addEventListener("change", formChangeB);
        startbtn.addEventListener("click", startGame);
        endaufgabe_jogi.drawField();
        endaufgabe_jogi.drawPlayer();
        endaufgabe_jogi.drawBall();
    }
    function formChangeA(_event) {
        let menuDataA = new FormData(document.forms[0]);
        teamASettings = [];
        for (let input of menuDataA) {
            teamASettings.push(String(input[1]));
            console.log("Team A Settings:" + teamASettings);
        }
    }
    function formChangeB(_event) {
        let menuDataB = new FormData(document.forms[1]);
        teamBSettings = [];
        for (let input of menuDataB) {
            teamBSettings.push(String(input[1]));
            console.log("Team B Settings:" + teamBSettings);
        }
    }
    function startGame(_event) {
        menu.classList.add("hidden");
        let newGame = document.createElement("button");
        newGame.innerHTML = "New Game";
        newGame.setAttribute("id", "newGame");
        newGame.addEventListener("click", startNewGame);
        document.body.appendChild(newGame);
        endaufgabe_jogi.drawField();
        imgData = endaufgabe_jogi.crc2.getImageData(0, 0, endaufgabe_jogi.crc2.canvas.width, endaufgabe_jogi.crc2.canvas.height);
        createTeamA();
        createTeamB();
        createReferee();
        createLineReferees();
        let ball = new endaufgabe_jogi.Ball;
        ball.draw();
        moveables.push(ball);
        window.setInterval(update, 20);
    }
    function createTeamA() {
        for (let i = 0; i < 11; i++) {
            let playerA = new endaufgabe_jogi.Player(positionsA[i], baseA[i], teamA, createRandomNum(speedMin, speedMaxA), createRandomNum(precisionMin, precisionMaxA), colorA, playerNumbers[i]);
            playerA.draw();
            moveables.push(playerA);
        }
    }
    function createTeamB() {
        for (let i = 0; i < 11; i++) {
            let playerB = new endaufgabe_jogi.Player(positionsB[i], baseB[i], teamB, createRandomNum(speedMin, speedMaxB), createRandomNum(precisionMin, precisionMaxB), colorB, playerNumbers[i]);
            playerB.draw();
            moveables.push(playerB);
        }
    }
})(endaufgabe_jogi || (endaufgabe_jogi = {}));
//# sourceMappingURL=main.js.map