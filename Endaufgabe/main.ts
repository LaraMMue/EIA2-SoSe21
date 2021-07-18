namespace endaufgabe_jogi {
    
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    export let crc2: CanvasRenderingContext2D;
    
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    let imgData: ImageData;

    export let ballPossession: HTMLElement = <HTMLElement> document.querySelector("#ballPossession");
    export let goals: HTMLElement = <HTMLElement> document.querySelector("#goals");
    export let playerInfo: HTMLElement = <HTMLElement> document.querySelector("#playerInfo");

    export let checkArrival: boolean = true;

    export let width: number = Number (canvas.width);
    export let height: number = Number (canvas.height);

    //let positionsA: Vector [] = [new Vector(width / 110 * 10, height / 2 + 30), new Vector(width / 110 * 15, height / 75 * 17), new Vector (width / 110 * 15, height / 75 * 65), new Vector(width / 110 * 32, height / 2 + 30), new Vector(width / 110 * 43, height / 2 - 110), new Vector(width / 110 * 43, height / 2 + 180), new Vector(width / 110 * 57, height / 2 + 125), new Vector(width / 110 * 75, height / 75 * 15), new Vector(width / 110 * 75, height / 75 * 68), new Vector(width / 110 * 88.5, height / 2 - 50), new Vector(width / 110 * 88.5, height / 2 + 110)];
    //let positionsB: Vector [] = [new Vector(width / 110 * 100, height / 2 + 30), new Vector(width / 110 * 78, height / 2 + 30), new Vector(width / 110 * 67, height / 2 - 110), new Vector(width / 110 * 67, height / 2 + 180), new Vector(width / 110 * 54, height / 2 - 60), new Vector(width / 110 * 35, height / 75 * 68), new Vector(width / 110 * 21.5, height / 2 + 110), new Vector(width / 110 * 21.5, height / 2 - 50), new Vector(width / 110 * 35, height / 75 * 15), new Vector(width / 110 * 95, height / 75 * 65), new Vector(width / 110 * 95, height / 75 * 17)];
    //let baseA: Vector [] = [new Vector(width / 110 * 10, height / 2 + 30), new Vector(width / 110 * 15, height / 75 * 17), new Vector (width / 110 * 15, height / 75 * 65), new Vector(width / 110 * 32, height / 2 + 30), new Vector(width / 110 * 43, height / 2 - 110), new Vector(width / 110 * 43, height / 2 + 180), new Vector(width / 110 * 57, height / 2 + 125), new Vector(width / 110 * 75, height / 75 * 15), new Vector(width / 110 * 75, height / 75 * 68), new Vector(width / 110 * 88.5, height / 2 - 50), new Vector(width / 110 * 88.5, height / 2 + 110)];
    //let baseB: Vector [] = [new Vector(width / 110 * 100, height / 2 + 30), new Vector(width / 110 * 78, height / 2 + 30), new Vector(width / 110 * 67, height / 2 - 110), new Vector(width / 110 * 67, height / 2 + 180), new Vector(width / 110 * 54, height / 2 - 60), new Vector(width / 110 * 35, height / 75 * 68), new Vector(width / 110 * 21.5, height / 2 + 110), new Vector(width / 110 * 21.5, height / 2 - 50), new Vector(width / 110 * 35, height / 75 * 15), new Vector(width / 110 * 95, height / 75 * 65), new Vector(width / 110 * 95, height / 75 * 17)]; 
    

    export enum TASK {
        WAIT,
        MOVE,
        MOVEBACK
    }


    let windowWidth: number = window.innerWidth / 1.3;
    let windowHeight: number = window.innerHeight;

    

    let settingsA: HTMLElement = <HTMLElement> document.querySelector("#settingsA");
    let settingsB: HTMLElement = <HTMLElement> document.querySelector("#settingsB");
    let teamASettings: string[] = [];
    let teamBSettings: string[] = [];

    let teamA: string = "Team A";
    let teamB: string = "Team B";
    let colorA: string = "";
    let colorB: string = "";
    let speedMin: number = 5;
    let speedMaxA: number = Number("");
    let speedMaxB: number = Number("");
    let precisionMin: number = 5;
    let precisionMaxA: number = Number("");
    let precisionMaxB: number = Number("");

    let playerNumbersA: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let playerNumbersB: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    let menu: HTMLDivElement = <HTMLDivElement> document.querySelector("#settings");

    let startbtn: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#start");
    let newGameBtn: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#newGame");

    let animation: boolean = true;


    let moveables: Moveable [] = [];


    export let spreading: Vector[] | undefined;
    export let goal: boolean = false;
    export let ran: boolean = false;
    export let activePlayerPrecision: number;

    export let ballMoves: boolean = false;

    export let goalsA: number = 0;
    export let goalsB: number = 0;


    export function createRandomNum(_min: number, _max: number): number {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        canvas.width = windowWidth;
        canvas.height = windowHeight;

        settingsA.addEventListener("change", formChangeA);
        settingsB.addEventListener("change", formChangeB);

        startbtn.addEventListener("click", startGame);

        canvas.addEventListener("first_player", function(e: CustomEventInit): void {
            reachBall(e.detail);
        });

        canvas.addEventListener("click", handleClick);

        document.addEventListener("keydown", replacePlayer);
        canvas.addEventListener("click", displayPlayerInfo);



        drawField();
        //drawPlayer();
        //drawBall();
    }

    function formChangeA(_event: Event): void {
        let menuDataA: FormData = new FormData(document.forms[0]);
        teamASettings = [];
        for (let input of menuDataA) {
            teamASettings.push(String(input[1]));
            console.log("Team A Settings:" + teamASettings);
        }
    }

    function formChangeB(_event: Event): void {
        let menuDataB: FormData = new FormData(document.forms[1]);
        teamBSettings = [];
        for (let input of menuDataB) {
            teamBSettings.push(String(input[1]));
            console.log("Team B Settings:" + teamBSettings);
            
        }
    }

    function startGame(_event: Event): void {
        menu.classList.add("hidden");
        
        newGameBtn.classList.remove("hidden");
        newGameBtn.addEventListener("click", startNewGame);
        document.body.appendChild(newGameBtn);

        
        drawField();

        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        createTeamA();
        createTeamB();
        //createReferee();
        //createLineJudge();

        let ball: Ball = new Ball (new Vector (width / 2, height / 2));
        ball.draw();
        moveables.push(ball);

        window.setInterval(update, 20); 

    }

    function createTeamA(): void {
        for (let i: number = 0; i < 11; i ++) {
            let playerA: Player = new Player(positionsA[i], baseA[i], teamA, createRandomNum(speedMin, speedMaxA), createRandomNum(precisionMin, precisionMaxA), colorA, playerNumbersA[i]);
            playerA.draw();
            moveables.push(playerA);
        }
    }

    function createTeamB(): void {
        for (let i: number = 0; i < 11; i ++) {
            let playerB: Player = new Player(positionsB[i], baseB[i], teamB, createRandomNum(speedMin, speedMaxB), createRandomNum(precisionMin, precisionMaxB), colorB, playerNumbersB[i]);
            playerB.draw();
            moveables.push(playerB);
        }
    }



    function startNewGame(): void {
        location.reload();
    }

    function update(): void {
        if (animation == true) {

            crc2.clearRect(0, 0, canvas.width, canvas.height);
            crc2.putImageData(imgData, 0, 0);

            if (checkArrival == true) {
                checkDistance();
            }

            if (ballMoves == true) {
                let player: Player [] = [];
                let ball: Ball [] = [];
                for (let moveable of moveables) {

                    if (moveable instanceof Ball) {
                        ball.push(moveable);
                        ball[0].move(event);
                        ball[0].draw();
                    }
                    else if (moveable instanceof Player) {
                        player.push(moveable)
                    }

                    for (let i: number = 0; i < player.length; i++) {
                        player[i].changeTask(TASK.MOVEBACK);
                    }
                }
            }

            for (let moveable of moveables) {

                if (moveable instanceof LineJudge || moveable instanceof Referee) {
                    moveable.move();
                }
                else if (moveable instanceof Ball) {

                    if (goal == false) {
                        moveable.goal();
                    }

                }
                moveable.draw();
            }
        }
    }

    function checkDistance(): void {
        let ball: Ball [] = [];
        let player: Player [] = [];
        ball.length = 0;
        player.length = 0;

        for (let moveable of moveables) {
            
            if (moveable instanceof Player) {
                player.push(moveable);
            }
            else if (moveable instanceof Ball) {
                ball.push(moveable);
            }
        }

        for (let i: number = 0; i < player.length; i++) {
            let vector1: Vector = new Vector(player[i].position.x, player[i].position.y);
            let vector2: Vector = new Vector(ball[0].position.x, ball[0].position.y);
            let difference: Vector = Vector.getDifference(vector1, vector2);
            if (difference.length <= canvas.width / 110 * 30) {
                player[i].changeTask(TASK.MOVE, ball[0].position);
            }
        }
    }

    function reachBall(_player: CustomEventInit): void {
        animation = false;
    }

    function handleClick(_event: MouseEvent): void {
        animation = true;
        checkArrival = true;
        event = _event;
    }

    function replacePlayer(_event: KeyboardEvent): void {
        let keyPressed: string = _event.key;

        if (keyPressed == "a") {
            canvas.addEventListener("click", newPlayerA);
        }

        else if (keyPressed == "b") {
            canvas.addEventListener("click", newPlayerB);
        }

        else if (keyPressed == "-") {
            canvas.addEventListener("click", deletePlayer);
        }
    }

    function newPlayerA(_event: MouseEvent): void {
        let altPressed: boolean = _event.altKey;

        if (altPressed == true) {
            let rect: DOMRect = canvas.getBoundingClientRect();
            let x: number = _event.clientX - rect.left;
            let y: number = _event.clientY - rect.top;
            baseA.push(new Vector(x, y));
            playerNumbersA.push(1);
            let newPlayer: Player = new Player(new Vector(x, y), baseA[baseA.length - 1], teamA, createRandomNum(speedMin, speedMaxA), createRandomNum(precisionMin, precisionMaxA), colorA, playerNumbersA.length);
            moveables.push(newPlayer);
            canvas.removeEventListener("click", newPlayerA);
            
        }
    }

    function newPlayerB(_event: MouseEvent): void {
        let altPressed: boolean = _event.altKey;

        if (altPressed == true) {
            let rect: DOMRect = canvas.getBoundingClientRect();
            let x: number = _event.clientX - rect.left;
            let y: number = _event.clientY - rect.top;
            baseB.push(new Vector(x, y));
            playerNumbersB.push(1);
            let newPlayer: Player = new Player(new Vector(x, y), baseB[baseB.length - 1], teamB, createRandomNum(speedMin, speedMaxB), createRandomNum(precisionMin, precisionMaxB), colorB, playerNumbersB.length);
            moveables.push(newPlayer);
            canvas.removeEventListener("click", newPlayerB);
            
        }
    }

    function deletePlayer(_event: MouseEvent): void {
        let ctrlPressed: boolean = _event.ctrlKey;

        if (ctrlPressed == true) {
            let rect: DOMRect = canvas.getBoundingClientRect();
            let x: number = _event.clientX - rect.left;
            let y: number = _event.clientY - rect.top;

            for (let [i, moveable] of moveables.entries()) {
                if (moveable instanceof Player) {
                    let vector1: Vector = new Vector(moveable.position.x, moveable.position.y);
                    let vector2: Vector = new Vector(x, y);
                    let difference: Vector = Vector.getDifference(vector1, vector2);
                    if (difference.length <= canvas.width / 110 * 5) {
                        moveables.splice(i, 1);
                    }
                }
            }
        }
    }

    function displayPlayerInfo(_event: MouseEvent): void {
        let shiftPressed: boolean = _event.shiftKey;

        if (shiftPressed == true) {
            for (let moveable of moveables) {
                if (moveable instanceof Player) {
                    let rect: DOMRect = canvas.getBoundingClientRect();
                    let x: number = _event.clientX - rect.left;
                    let y: number = _event.clientY - rect.top;
                    let mousePos: Vector = new Vector(x, y);
                    let difference: Vector = Vector.getDifference(moveable.position, mousePos);

                    if (difference.length / 100 < 1) {
                        moveable.playerInformation(_event);
                    }
                }
            }
        }
    }
    
    



    




}