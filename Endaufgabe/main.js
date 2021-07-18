"use strict";
var endaufgabe_jogi;
(function (endaufgabe_jogi) {
    endaufgabe_jogi.canvas = document.querySelector("canvas");
    endaufgabe_jogi.crc2 = endaufgabe_jogi.canvas.getContext("2d");
    let imgData;
    endaufgabe_jogi.ballPossession = document.querySelector("#ballPossession");
    endaufgabe_jogi.goals = document.querySelector("#goals");
    endaufgabe_jogi.playerInfo = document.querySelector("#playerInfo");
    endaufgabe_jogi.checkArrival = true;
    endaufgabe_jogi.width = Number(endaufgabe_jogi.canvas.width);
    endaufgabe_jogi.height = Number(endaufgabe_jogi.canvas.height);
    /*let positionsA: Vector [] = [new Vector(width / 110 * 10, height / 2 + 30), new Vector(width / 110 * 15, height / 75 * 17), new Vector (width / 110 * 15, height / 75 * 65), new Vector(width / 110 * 32, height / 2 + 30), new Vector(width / 110 * 43, height / 2 - 110), new Vector(width / 110 * 43, height / 2 + 180), new Vector(width / 110 * 57, height / 2 + 125), new Vector(width / 110 * 75, height / 75 * 15), new Vector(width / 110 * 75, height / 75 * 68), new Vector(width / 110 * 88.5, height / 2 - 50), new Vector(width / 110 * 88.5, height / 2 + 110)];
    let positionsB: Vector [] = [new Vector(width / 110 * 100, height / 2 + 30), new Vector(width / 110 * 78, height / 2 + 30), new Vector(width / 110 * 67, height / 2 - 110), new Vector(width / 110 * 67, height / 2 + 180), new Vector(width / 110 * 54, height / 2 - 60), new Vector(width / 110 * 35, height / 75 * 68), new Vector(width / 110 * 21.5, height / 2 + 110), new Vector(width / 110 * 21.5, height / 2 - 50), new Vector(width / 110 * 35, height / 75 * 15), new Vector(width / 110 * 95, height / 75 * 65), new Vector(width / 110 * 95, height / 75 * 17)];
    let baseA: Vector [] = [new Vector(width / 110 * 10, height / 2 + 30), new Vector(width / 110 * 15, height / 75 * 17), new Vector (width / 110 * 15, height / 75 * 65), new Vector(width / 110 * 32, height / 2 + 30), new Vector(width / 110 * 43, height / 2 - 110), new Vector(width / 110 * 43, height / 2 + 180), new Vector(width / 110 * 57, height / 2 + 125), new Vector(width / 110 * 75, height / 75 * 15), new Vector(width / 110 * 75, height / 75 * 68), new Vector(width / 110 * 88.5, height / 2 - 50), new Vector(width / 110 * 88.5, height / 2 + 110)];
    let baseB: Vector [] = [new Vector(width / 110 * 100, height / 2 + 30), new Vector(width / 110 * 78, height / 2 + 30), new Vector(width / 110 * 67, height / 2 - 110), new Vector(width / 110 * 67, height / 2 + 180), new Vector(width / 110 * 54, height / 2 - 60), new Vector(width / 110 * 35, height / 75 * 68), new Vector(width / 110 * 21.5, height / 2 + 110), new Vector(width / 110 * 21.5, height / 2 - 50), new Vector(width / 110 * 35, height / 75 * 15), new Vector(width / 110 * 95, height / 75 * 65), new Vector(width / 110 * 95, height / 75 * 17)];
    */
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
    let newGameBtn = document.querySelector("#newGame");
    let animation = true;
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
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        endaufgabe_jogi.canvas.width = windowWidth;
        endaufgabe_jogi.canvas.height = windowHeight;
        settingsA.addEventListener("change", formChangeA);
        settingsB.addEventListener("change", formChangeB);
        startbtn.addEventListener("click", startGame);
        endaufgabe_jogi.canvas.addEventListener("first_player", function (e) {
            reachBall(e.detail);
        });
        endaufgabe_jogi.canvas.addEventListener("click", handleClick);
        //document.addEventListener("keydown", handleExchange);
        //canvas.addEventListener("click", handleInfo);
        endaufgabe_jogi.drawField();
        //drawPlayer();
        //drawBall();
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
        newGameBtn.classList.remove("hidden");
        newGameBtn.addEventListener("click", startNewGame);
        document.body.appendChild(newGameBtn);
        endaufgabe_jogi.drawField();
        imgData = endaufgabe_jogi.crc2.getImageData(0, 0, endaufgabe_jogi.crc2.canvas.width, endaufgabe_jogi.crc2.canvas.height);
        createTeamA();
        createTeamB();
        //createReferee();
        //createLineJudge();
        let ball = new endaufgabe_jogi.Ball(new endaufgabe_jogi.Vector(endaufgabe_jogi.width / 2, endaufgabe_jogi.height / 2));
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
                let ball = [];
                for (let moveable of moveables) {
                    if (moveable instanceof endaufgabe_jogi.Ball) {
                        ball.push(moveable);
                        ball[0].move(event);
                        ball[0].draw();
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
                if (moveable instanceof LineJudge || moveable instanceof Referee) {
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
            let length = difference.length;
            if (length <= endaufgabe_jogi.canvas.width / 110 * 30) {
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
        event = _event;
    }
})(endaufgabe_jogi || (endaufgabe_jogi = {}));
//# sourceMappingURL=main.js.map