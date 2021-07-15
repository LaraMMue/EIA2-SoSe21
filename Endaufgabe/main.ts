namespace endaufgabe_jogi {
    
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    export let crc2: CanvasRenderingContext2D;
    
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    let imgData: ImageData;

    export let ballPossession: HTMLElement = <HTMLElement> document.querySelector("#ballPossession");
    export let goals: HTMLElement = <HTMLElement> document.querySelector("#goals");

    export let activePlayerPrecision: Vector;
    export let checkArrival: boolean = true;

    export let width: number = Number (canvas.width);
    export let height: number = Number (canvas.height);

    let positionsA: Vector [] = [new Vector(width / 110 * 10, height / 2 + 30), new Vector(width / 110 * 15, height / 75 * 17), new Vector (width / 110 * 15, height / 75 * 65), new Vector(width / 110 * 32, height / 2 + 30), new Vector(width / 110 * 43, height / 2 - 110), new Vector(width / 110 * 43, height / 2 + 180), new Vector(width / 110 * 57, height / 2 + 125), new Vector(width / 110 * 75, height / 75 * 15), new Vector(width / 110 * 75, height / 75 * 68), new Vector(width / 110 * 88.5, height / 2 - 50), new Vector(width / 110 * 88.5, height / 2 + 110)];
    let positionsB: Vector [] = [new Vector(width / 110 * 100, height / 2 + 30), new Vector(width / 110 * 78, height / 2 + 30), new Vector(width / 110 * 67, height / 2 - 110), new Vector(width / 110 * 67, height / 2 + 180), new Vector(width / 110 * 54, height / 2 - 60), new Vector(width / 110 * 35, height / 75 * 68), new Vector(width / 110 * 21.5, height / 2 + 110), new Vector(width / 110 * 21.5, height / 2 - 50), new Vector(width / 110 * 35, height / 75 * 15), new Vector(width / 110 * 95, height / 75 * 65), new Vector(width / 110 * 95, height / 75 * 17)];
    let baseA: Vector [] = [new Vector(width / 110 * 10, height / 2 + 30), new Vector(width / 110 * 15, height / 75 * 17), new Vector (width / 110 * 15, height / 75 * 65), new Vector(width / 110 * 32, height / 2 + 30), new Vector(width / 110 * 43, height / 2 - 110), new Vector(width / 110 * 43, height / 2 + 180), new Vector(width / 110 * 57, height / 2 + 125), new Vector(width / 110 * 75, height / 75 * 15), new Vector(width / 110 * 75, height / 75 * 68), new Vector(width / 110 * 88.5, height / 2 - 50), new Vector(width / 110 * 88.5, height / 2 + 110)];
    let baseB: Vector [] = [new Vector(width / 110 * 100, height / 2 + 30), new Vector(width / 110 * 78, height / 2 + 30), new Vector(width / 110 * 67, height / 2 - 110), new Vector(width / 110 * 67, height / 2 + 180), new Vector(width / 110 * 54, height / 2 - 60), new Vector(width / 110 * 35, height / 75 * 68), new Vector(width / 110 * 21.5, height / 2 + 110), new Vector(width / 110 * 21.5, height / 2 - 50), new Vector(width / 110 * 35, height / 75 * 15), new Vector(width / 110 * 95, height / 75 * 65), new Vector(width / 110 * 95, height / 75 * 17)];

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

    let playerNumbers: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    let menu: HTMLDivElement = <HTMLDivElement> document.querySelector("#settings");

    let startbtn: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#start");
    let moveables: Moveable [] = [];


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



        drawField();
        drawPlayer();
        drawBall();
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
        
        let newGame: HTMLButtonElement = <HTMLButtonElement> document.createElement("button");
        newGame.innerHTML = "New Game";
        newGame.setAttribute("id", "newGame");
        newGame.addEventListener("click", startNewGame);
        document.body.appendChild(newGame);

        
        drawField();

        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        createTeamA();
        createTeamB();
        createReferee();
        createLineReferees();

        let ball: Ball = new Ball;
        ball.draw();
        moveables.push(ball);

        window.setInterval(update, 20); 

    }

    function createTeamA(): void {
        for (let i: number = 0; i < 11; i ++) {
            let playerA: Player = new Player(positionsA[i], baseA[i], teamA, createRandomNum(speedMin, speedMaxA), createRandomNum(precisionMin, precisionMaxA), colorA, playerNumbers[i]);
            playerA.draw();
            moveables.push(playerA);
        }
    }

    function createTeamB(): void {
        for (let i: number = 0; i < 11; i ++) {
            let playerB: Player = new Player(positionsB[i], baseB[i], teamB, createRandomNum(speedMin, speedMaxB), createRandomNum(precisionMin, precisionMaxB), colorB, playerNumbers[i]);
            playerB.draw();
            moveables.push(playerB);
        }
    }


}