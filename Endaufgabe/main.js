"use strict";
var endaufgabe_jogi;
(function (endaufgabe_jogi) {
    window.addEventListener("load", handleLoad);
    endaufgabe_jogi.canvas = document.querySelector("canvas");
    endaufgabe_jogi.crc2 = endaufgabe_jogi.canvas.getContext("2d");
    let imgData;
    endaufgabe_jogi.ballPossession = document.querySelector("#ballPossession");
    endaufgabe_jogi.goals = document.querySelector("#goals");
    endaufgabe_jogi.playerInfo = document.querySelector("#playerInfo");
    endaufgabe_jogi.checkArrival = true;
    endaufgabe_jogi.canvas.width = window.innerHeight;
    endaufgabe_jogi.canvas.height = endaufgabe_jogi.canvas.width / 110 * 75;
    endaufgabe_jogi.width = Number(endaufgabe_jogi.canvas.width);
    endaufgabe_jogi.height = Number(endaufgabe_jogi.canvas.height);
    //let positionsA: Vector [] = [new Vector(width / 2 - 20, height / 2 + 30), new Vector(width / 110 * 15, height / 75 * 17), new Vector (width / 110 * 15, height / 75 * 65), new Vector(width / 110 * 32, height / 2 + 30), new Vector(width / 110 * 43, height / 2 - 110), new Vector(width / 110 * 43, height / 2 + 180), new Vector(width / 110 * 57, height / 2 + 125), new Vector(width / 110 * 75, height / 75 * 15), new Vector(width / 110 * 75, height / 75 * 68), new Vector(width / 110 * 88.5, height / 2 - 50), new Vector(width / 110 * 88.5, height / 2 + 110)];
    //let positionsB: Vector [] = [new Vector(width / 110 * 100, height / 2 + 30), new Vector(width / 110 * 78, height / 2 + 30), new Vector(width / 110 * 67, height / 2 - 110), new Vector(width / 110 * 67, height / 2 + 180), new Vector(width / 110 * 54, height / 2 - 60), new Vector(width / 110 * 35, height / 75 * 68), new Vector(width / 110 * 21.5, height / 2 + 110), new Vector(width / 110 * 21.5, height / 2 - 50), new Vector(width / 110 * 35, height / 75 * 15), new Vector(width / 110 * 95, height / 75 * 65), new Vector(width / 110 * 95, height / 75 * 17)];
    //let baseA: Vector [] = [new Vector(width / 110 * 10, height / 2 + 30), new Vector(width / 110 * 15, height / 75 * 17), new Vector (width / 110 * 15, height / 75 * 65), new Vector(width / 110 * 32, height / 2 + 30), new Vector(width / 110 * 43, height / 2 - 110), new Vector(width / 110 * 43, height / 2 + 180), new Vector(width / 110 * 57, height / 2 + 125), new Vector(width / 110 * 75, height / 75 * 15), new Vector(width / 110 * 75, height / 75 * 68), new Vector(width / 110 * 88.5, height / 2 - 50), new Vector(width / 110 * 88.5, height / 2 + 110)];
    //let baseB: Vector [] = [new Vector(width / 110 * 100, height / 2 + 30), new Vector(width / 110 * 78, height / 2 + 30), new Vector(width / 110 * 67, height / 2 - 110), new Vector(width / 110 * 67, height / 2 + 180), new Vector(width / 110 * 54, height / 2 - 60), new Vector(width / 110 * 35, height / 75 * 68), new Vector(width / 110 * 21.5, height / 2 + 110), new Vector(width / 110 * 21.5, height / 2 - 50), new Vector(width / 110 * 35, height / 75 * 15), new Vector(width / 110 * 95, height / 75 * 65), new Vector(width / 110 * 95, height / 75 * 17)]; 
    /*let positionsA: Vector [] = [new Vector(100, 550), new Vector(200, 200), new Vector (200, 900), new Vector(300, 550), new Vector(400, 200), new Vector(400, 900), new Vector(500, 400), new Vector(500, 700), new Vector(700, 550), new Vector(800, 200), new Vector(800, 900)];
    let positionsB: Vector [] = [new Vector(1000, 550), new Vector(900, 200), new Vector(900, 900), new Vector(800, 550), new Vector(700, 200), new Vector(700, 900), new Vector(600, 400), new Vector(600, 700), new Vector(400, 550), new Vector(300, 200), new Vector(300, 900)];
    let baseA: Vector [] = [new Vector(100, 550), new Vector(200, 200), new Vector (200, 900), new Vector(300, 550), new Vector(400, 200), new Vector(400, 900), new Vector(500, 400), new Vector(500, 700), new Vector(700, 550), new Vector(800, 200), new Vector(800, 900)];
    let baseB: Vector [] = [new Vector(1000, 550), new Vector(900, 200), new Vector(900, 900), new Vector(800, 550), new Vector(700, 200), new Vector(700, 900), new Vector(600, 400), new Vector(600, 700), new Vector(400, 550), new Vector(300, 200), new Vector(300, 900)];
    */
    /*let positionsA: Vector [] = [new Vector(width / 2 - 20, 550), new Vector(width / 2 + 40, 200), new Vector (width / 2 + 40, 900), new Vector(width / 2 + 200, 550), new Vector(width / 2 + 400, 200), new Vector(width / 2 + 400, 900), new Vector(width / 2 + 600, 400), new Vector(width / 2 + 600, 700), new Vector(width / 2 + 900, 550), new Vector(width / 2 + 1000, 200), new Vector(width / 2 + 1000, 900)];
    let positionsB: Vector [] = [new Vector(width / 2 + 1350, 550), new Vector(width / 2 + 1200, 200), new Vector(width / 2 + 1200, 900), new Vector(width / 2 + 1140, 550), new Vector(width / 2 + 840, 200), new Vector(width / 2 + 840, 900), new Vector(width / 2 + 750, 400), new Vector(width / 2 + 750, 700), new Vector(width / 2 + 450, 550), new Vector(width / 2 + 250, 200), new Vector(width / 2 + 250, 900)];
    let baseA: Vector [] = [new Vector(width / 2 - 20, 550), new Vector(width / 2 + 40, 200), new Vector (width / 2 + 40, 900), new Vector(width / 2 + 200, 550), new Vector(width / 2 + 400, 200), new Vector(width / 2 + 400, 900), new Vector(width / 2 + 600, 400), new Vector(width / 2 + 600, 700), new Vector(width / 2 + 900, 550), new Vector(width / 2 + 1000, 200), new Vector(width / 2 + 1000, 900)];
    let baseB: Vector [] = [new Vector(width / 2 + 1400, 550), new Vector(width / 2 + 1200, 200), new Vector(width / 2 + 1200, 900), new Vector(width / 2 + 1040, 550), new Vector(width / 2 + 840, 200), new Vector(width / 2 + 840, 900), new Vector(width / 2 + 750, 400), new Vector(width / 2 + 750, 700), new Vector(width / 2 + 450, 550), new Vector(width / 2 + 400, 200), new Vector(width / 2 + 400, 900)];
    */
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
    //let windowWidth: number = window.innerWidth / 1.3;
    //let windowHeight: number = window.innerHeight;
    let settingsA = document.querySelector("#settingsA");
    let settingsB = document.querySelector("#settingsB");
    let teamA = "";
    let teamB = "";
    let colorA = "";
    let colorB = "";
    let speedMin = 5;
    let speedMaxA = Number("");
    let speedMaxB = Number("");
    let precisionMin = 5;
    let precisionMaxA = Number("");
    let precisionMaxB = Number("");
    let colorSettingA = [];
    let playerNumbersA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let playerNumbersB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let menu = document.querySelector("#settings");
    let startbtn = document.querySelector("#start");
    let newGameBtn = document.querySelector("#newGame");
    let animation = true;
    let eventClick;
    let moveables = [];
    endaufgabe_jogi.goal = false;
    endaufgabe_jogi.ran = false;
    endaufgabe_jogi.ballMoves = false;
    endaufgabe_jogi.goalsA = 0;
    endaufgabe_jogi.goalsB = 0;
    function createRandomNum(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    endaufgabe_jogi.createRandomNum = createRandomNum;
    function handleLoad() {
        settingsA.addEventListener("change", formChangeA);
        settingsB.addEventListener("change", formChangeB);
        startbtn.addEventListener("click", startGame);
        endaufgabe_jogi.canvas.addEventListener("first_player", reachBall);
        endaufgabe_jogi.canvas.addEventListener("click", handleClick);
        document.addEventListener("keydown", replacePlayer);
        endaufgabe_jogi.canvas.addEventListener("click", displayPlayerInfo);
        endaufgabe_jogi.drawField();
        //drawPlayer();
        //drawBall();
    }
    /*function formChangeA(_event: Event): void {
        let menuDataA: FormData = new FormData(document.forms[0]);
        for (let input of menuDataA) {
            switch (input[0]) {
                case "colorA":
                    colorA = String(input[1]);
                    break;
                case "maxA1":
                    speedMaxA = Number(input[1]);
                    break;
                case "maxA2":
                    precisionMaxA = Number(input[1]);
                    break;
                default:
                    console.log("no settings for A");
            }
            
            
        }
        console.log("Team A Settings: Color: " + colorA + " Max Speed: " + speedMaxA + " Max Precision: " + precisionMaxA);
    }*/
    function formChangeA(_event) {
        let menuDataA = new FormData(document.forms[0]);
        for (let input of menuDataA) {
            switch (input[0]) {
                case "colorA":
                    colorSettingA.push(String(input[1]));
                    break;
                case "maxA1":
                    speedMaxA = Number(input[1]);
                    break;
                case "maxA2":
                    precisionMaxA = Number(input[1]);
                    break;
                default:
                    console.log("no settings for A");
            }
        }
        console.log("Team A Settings: Color: " + colorSettingA[0] + " Max Speed: " + speedMaxA + " Max Precision: " + precisionMaxA);
    }
    console.log(colorSettingA[0]);
    function formChangeB(_event) {
        let menuDataB = new FormData(document.forms[1]);
        for (let input of menuDataB) {
            switch (input[0]) {
                case "colorB":
                    colorB = String(input[1]);
                    break;
                case "maxB1":
                    speedMaxB = Number(input[1]);
                    break;
                case "maxB2":
                    precisionMaxB = Number(input[1]);
                    break;
                default:
                    console.log("no settings for B");
            }
        }
        console.log("Team B Settings: Color: " + colorB + " Max Speed: " + speedMaxB + " Max Precision: " + precisionMaxB);
    }
    function startGame(_event) {
        menu.classList.add("hidden");
        newGameBtn.classList.remove("hidden");
        newGameBtn.addEventListener("click", startNewGame);
        imgData = endaufgabe_jogi.crc2.getImageData(0, 0, endaufgabe_jogi.crc2.canvas.width, endaufgabe_jogi.crc2.canvas.height);
        createTeamA();
        createTeamB();
        createReferee();
        createLineJudge();
        let ball = new endaufgabe_jogi.Ball(new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 2 + 670, endaufgabe_jogi.height / 2 + 450));
        ball.draw();
        moveables.push(ball);
        window.setInterval(update, 20);
        console.log(colorA);
    }
    function createTeamA() {
        console.log(colorA);
        for (let i = 0; i < 11; i++) {
            let playerA = new endaufgabe_jogi.Player(positionsA[i], baseA[i], "Team A", createRandomNum(speedMin, speedMaxA), createRandomNum(precisionMin, precisionMaxA), colorA, playerNumbersA[i]);
            playerA.draw();
            moveables.push(playerA);
        }
    }
    function createTeamB() {
        for (let i = 0; i < 11; i++) {
            let playerB = new endaufgabe_jogi.Player(positionsB[i], baseB[i], "Team B", createRandomNum(speedMin, speedMaxB), createRandomNum(precisionMin, precisionMaxB), colorB, playerNumbersB[i]);
            playerB.draw();
            moveables.push(playerB);
        }
    }
    function createLineJudge() {
        for (let i = 0; i < 2; i++) {
            if (i == 0) {
                let lineJudge = new endaufgabe_jogi.LineJudge(new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 2, endaufgabe_jogi.height / 80 * 60), "black");
                lineJudge.draw();
                moveables.push(lineJudge);
            }
            else if (i == 1) {
                let lineJudge = new endaufgabe_jogi.LineJudge(new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 2, endaufgabe_jogi.height / 80 * 5), "black");
                lineJudge.draw();
                moveables.push(lineJudge);
            }
        }
    }
    function createReferee() {
        let referee = new endaufgabe_jogi.Referee(new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 2, endaufgabe_jogi.height / 2), "black");
        referee.draw();
        moveables.push(referee);
    }
    function startNewGame() {
        location.reload();
    }
    function update() {
        if (animation == true) {
            endaufgabe_jogi.crc2.clearRect(0, 0, endaufgabe_jogi.canvas.width, endaufgabe_jogi.canvas.height);
            endaufgabe_jogi.crc2.putImageData(imgData, 0, 0);
            if (endaufgabe_jogi.checkArrival == true) {
                checkDistance();
            }
            if (endaufgabe_jogi.ballMoves == true) {
                let player = [];
                //let ball: Ball [] = [];
                for (let moveable of moveables) {
                    if (moveable instanceof endaufgabe_jogi.Ball) {
                        //ball.push(moveable);
                        //ball[0].move(event);
                        //ball[0].draw();
                        moveable.move(eventClick);
                        moveable.draw();
                    }
                    else if (moveable instanceof endaufgabe_jogi.Player) {
                        player.push(moveable);
                    }
                    for (let i = 0; i < player.length; i++) {
                        player[i].changeTask(TASK.MOVEBACK);
                    }
                }
            }
            for (let moveable of moveables) {
                if (moveable instanceof endaufgabe_jogi.LineJudge || moveable instanceof endaufgabe_jogi.Referee) {
                    moveable.move();
                }
                else if (moveable instanceof endaufgabe_jogi.Ball) {
                    if (endaufgabe_jogi.goal == false) {
                        moveable.goal();
                    }
                }
                moveable.draw();
            }
        }
    }
    function checkDistance() {
        let ball = [];
        let player = [];
        ball.length = 0;
        player.length = 0;
        for (let moveable of moveables) {
            if (moveable instanceof endaufgabe_jogi.Player) {
                player.push(moveable);
            }
            else if (moveable instanceof endaufgabe_jogi.Ball) {
                ball.push(moveable);
            }
        }
        for (let i = 0; i < player.length; i++) {
            let vector1 = new endaufgabe_jogi.Vector(player[i].position.x, player[i].position.y);
            let vector2 = new endaufgabe_jogi.Vector(ball[0].position.x, ball[0].position.y);
            let difference = endaufgabe_jogi.Vector.getDifference(vector1, vector2);
            if (difference.length <= endaufgabe_jogi.canvas.width / 110 * 30) {
                player[i].changeTask(TASK.MOVE, ball[0].position);
            }
        }
    }
    function reachBall(_player) {
        animation = false;
    }
    function handleClick(_event) {
        animation = true;
        endaufgabe_jogi.checkArrival = true;
        endaufgabe_jogi.ballMoves = true;
        eventClick = _event;
    }
    function replacePlayer(_event) {
        let keyPressed = _event.key;
        if (keyPressed == "a") {
            endaufgabe_jogi.canvas.addEventListener("click", newPlayerA);
        }
        else if (keyPressed == "b") {
            endaufgabe_jogi.canvas.addEventListener("click", newPlayerB);
        }
        else if (keyPressed == "-") {
            endaufgabe_jogi.canvas.addEventListener("click", deletePlayer);
        }
    }
    function newPlayerA(_event) {
        let altPressed = _event.altKey;
        if (altPressed == true) {
            let rect = endaufgabe_jogi.canvas.getBoundingClientRect();
            let x = _event.clientX - rect.left;
            let y = _event.clientY - rect.top;
            baseA.push(new endaufgabe_jogi.Vector(x, y));
            playerNumbersA.push(1);
            let newPlayer = new endaufgabe_jogi.Player(new endaufgabe_jogi.Vector(x, y), baseA[baseA.length - 1], teamA, createRandomNum(speedMin, speedMaxA), createRandomNum(precisionMin, precisionMaxA), colorA, playerNumbersA.length);
            moveables.push(newPlayer);
            endaufgabe_jogi.canvas.removeEventListener("click", newPlayerA);
        }
    }
    function newPlayerB(_event) {
        let altPressed = _event.altKey;
        if (altPressed == true) {
            let rect = endaufgabe_jogi.canvas.getBoundingClientRect();
            let x = _event.clientX - rect.left;
            let y = _event.clientY - rect.top;
            baseB.push(new endaufgabe_jogi.Vector(x, y));
            playerNumbersB.push(1);
            let newPlayer = new endaufgabe_jogi.Player(new endaufgabe_jogi.Vector(x, y), baseB[baseB.length - 1], teamB, createRandomNum(speedMin, speedMaxB), createRandomNum(precisionMin, precisionMaxB), colorB, playerNumbersB.length);
            moveables.push(newPlayer);
            endaufgabe_jogi.canvas.removeEventListener("click", newPlayerB);
        }
    }
    function deletePlayer(_event) {
        let ctrlPressed = _event.ctrlKey;
        if (ctrlPressed == true) {
            let rect = endaufgabe_jogi.canvas.getBoundingClientRect();
            let x = _event.clientX - rect.left;
            let y = _event.clientY - rect.top;
            for (let [i, moveable] of moveables.entries()) {
                if (moveable instanceof endaufgabe_jogi.Player) {
                    let vector1 = new endaufgabe_jogi.Vector(moveable.position.x, moveable.position.y);
                    let vector2 = new endaufgabe_jogi.Vector(x, y);
                    let difference = endaufgabe_jogi.Vector.getDifference(vector1, vector2);
                    if (difference.length <= endaufgabe_jogi.canvas.width / 110 * 5) {
                        moveables.splice(i, 1);
                    }
                }
            }
        }
    }
    function displayPlayerInfo(_event) {
        let shiftPressed = _event.shiftKey;
        if (shiftPressed == true) {
            for (let moveable of moveables) {
                if (moveable instanceof endaufgabe_jogi.Player) {
                    let rect = endaufgabe_jogi.canvas.getBoundingClientRect();
                    let x = _event.clientX - rect.left;
                    let y = _event.clientY - rect.top;
                    let mousePos = new endaufgabe_jogi.Vector(x, y);
                    let difference = endaufgabe_jogi.Vector.getDifference(moveable.position, mousePos);
                    if (difference.length / 100 < 1) {
                        moveable.playerInformation(_event);
                    }
                }
            }
        }
    }
})(endaufgabe_jogi || (endaufgabe_jogi = {}));
//# sourceMappingURL=main.js.map