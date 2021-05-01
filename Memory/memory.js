"use strict";
var L02_memory;
(function (L02_memory) {
    window.addEventListener("load", handleLoad);
    let allCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let cardArray = [];
    let cardsChosen = [];
    let found = 0;
    let menu = document.querySelector("#menu");
    let startBtn = document.querySelector("#start");
    let cardSettings = [];
    let cardQuantity;
    let gameBoard = document.querySelector("#board");
    let newBtn = document.querySelector("#new");
    let seconds = 0;
    let minutes = 0;
    let timerDisplay = document.querySelector("#timer");
    let win = document.querySelector("#win");
    let time = document.querySelector("#time");
    function handleLoad() {
        menu.addEventListener("change", formChange);
        startBtn.addEventListener("click", createBoard);
        newBtn.addEventListener("click", newGame);
    }
    function formChange(_event) {
        let menuData = new FormData(document.forms[0]);
        cardSettings = [];
        for (let input of menuData) {
            cardSettings.push(String(input[1]));
            console.log("Card Settings:" + cardSettings);
        }
    }
    function createBoard() {
        menu.classList.add("hidden");
        startBtn.classList.add("hidden");
        timerDisplay.classList.remove("hidden");
        cardQuantity = Number(cardSettings[0]);
        for (let i = 0; i < 2; i++) {
            for (let n = 0; n < cardQuantity; n++) {
                cardArray.push(allCards[n]);
            }
        }
        cardArray.sort(() => 0.5 - Math.random());
        gameBoard.innerHTML = "";
        document.body.style.background = cardSettings[2];
        document.body.style.fontFamily = cardSettings[5];
        for (let index = 0; index < cardArray.length; index++) {
            let card = document.createElement("div");
            card.innerHTML = "<span>" + cardArray[index] + "</span>";
            card.style.width = cardSettings[1] + "px";
            card.style.height = cardSettings[1] + "px";
            card.style.color = cardSettings[3];
            card.style.background = cardSettings[4];
            gameBoard.appendChild(card);
            let backside = document.querySelectorAll("span");
            backside[index].classList.add("invisible");
            card.addEventListener("click", turnCard);
        }
        timer();
    }
    function turnCard(_event) {
        let target = _event.target;
        cardsChosen.push(target);
        cardsChosen[0].querySelector("span")?.classList.remove("invisible");
        cardsChosen[1].querySelector("span")?.classList.remove("invisible");
        if (cardsChosen.length == 2) {
            setTimeout(compare, 2000);
        }
    }
    var myTimer;
    function timer() {
        myTimer = setInterval(function () {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            timerDisplay.innerHTML = "Zeit " + minutes + ":" + seconds;
        }, 1000);
    }
    function compare() {
        let firstCard = cardsChosen[0].querySelector("span")?.innerHTML;
        let secondCard = cardsChosen[1].querySelector("span")?.innerHTML;
        if (firstCard == secondCard) {
            cardsChosen[0].classList.add("invisible");
            cardsChosen[1].classList.add("invisible");
            cardsChosen = [];
            found++;
        }
        else {
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
    function newGame(_event) {
        window.location.reload();
    }
})(L02_memory || (L02_memory = {}));
//# sourceMappingURL=memory.js.map