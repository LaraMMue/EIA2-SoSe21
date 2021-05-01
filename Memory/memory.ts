namespace L02_memory {
    window.addEventListener("load", handleLoad);

    let allCards: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 
        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let cardArray: number[] = [];
    let cardsChosen: HTMLElement[] = [];
    let found: number = 0;

    let menu: HTMLElement = <HTMLElement>document.querySelector("#menu");
    let startBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#start");
    let cardSettings: string[] = [];
    let cardQuantity: number;
    let gameBoard: HTMLElement = <HTMLElement>document.querySelector("#board");

    let newBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#new");

    let seconds: number = 0;
    let minutes: number = 0;
    let timerDisplay: HTMLElement = <HTMLElement>document.querySelector("#timer");

    let win: HTMLElement = <HTMLElement>document.querySelector("#win");
    let time: HTMLElement = <HTMLElement>document.querySelector("#time");

    function handleLoad(): void {
        menu.addEventListener("change", formChange);
        startBtn.addEventListener("click", createBoard);
        newBtn.addEventListener("click", newGame);
    }

    function formChange(_event: Event): void {
        let menuData: FormData = new FormData(document.forms[0]);
        cardSettings = [];
        for (let input of menuData) {
            cardSettings.push(String(input[1]));
            console.log("Card Settings:" + cardSettings);
        }
    }

    function createBoard(): void {
        menu.classList.add("hidden");
        startBtn.classList.add("hidden");
        timerDisplay.classList.remove("hidden");
        cardQuantity = Number(cardSettings[0]);
        for (let i: number = 0; i < 2; i++) {
            for (let n: number = 0; n < cardQuantity; n++) {
                cardArray.push(allCards[n]);
            }
        }

        cardArray.sort(() => 0.5 - Math.random());
        gameBoard.innerHTML = "";
        document.body.style.background = cardSettings[2];
        document.body.style.fontFamily = cardSettings[5];

        for (let index: number = 0; index < cardArray.length; index++) {
            let card: HTMLElement = <HTMLElement>document.createElement("div");
            card.innerHTML = "<span>" + cardArray[index] + "</span>";
            card.style.width = cardSettings[1] + "px";
            card.style.height = cardSettings[1] + "px";
            card.style.color = cardSettings[3];
            card.style.background = cardSettings[4];
            gameBoard.appendChild(card);
            let backside: NodeListOf<HTMLElement> = document.querySelectorAll("span");
            backside[index].classList.add("invisible");
            card.addEventListener("click", turnCard);
        }
        timer();


    }

    function turnCard(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement> _event.target;
        cardsChosen.push(target);
        cardsChosen[0].querySelector("span")?.classList.remove("invisible");
        cardsChosen[1].querySelector("span")?.classList.remove("invisible");
        if (cardsChosen.length == 2) {
            setTimeout(compare, 2000);
        }
    }

    var myTimer: number;

    function timer(): void {
        myTimer = setInterval (function (): void {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            timerDisplay.innerHTML = "Zeit " + minutes + ":" + seconds;
        },                     1000);
    }

    function compare(): void {
        let firstCard: string = <string>cardsChosen[0].querySelector("span")?.innerHTML;
        let secondCard: string = <string>cardsChosen[1].querySelector("span")?.innerHTML;
        if (firstCard == secondCard) {
            cardsChosen[0].classList.add("invisible");
            cardsChosen[1].classList.add("invisible");
            cardsChosen = [];
            found++;
        } else {
            cardsChosen[0].querySelector("span")?.classList.add("invisible");
            cardsChosen[1].querySelector("span")?.classList.add("invisible");
            cardsChosen = [];
        }
        if (found == cardQuantity) {
            win.classList.remove("hidden");
            time.innerHTML = "Benötigte Zeit: " + minutes + ":" + seconds;
            clearTimeout(myTimer);
            minutes = 0;
            seconds = 0;
            timerDisplay.innerHTML = minutes + ":" + seconds;
        }
    }

    function newGame(_event: MouseEvent): void {
        window.location.reload();
    }


}

