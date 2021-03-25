"use strict";
var Aufgabe01Gedicht;
(function (Aufgabe01Gedicht) {
    let subjektArray = ["Gandalf", "Bilbo", "Frodo",
        "Aragorn", "Thorin", "Sam"];
    let praedikatArray = ["trusts", "hunts", "fights",
        "hates", "likes", "hides from"];
    let objektArray = ["Sauron", "dwarves", "Smaug",
        "orcs", "Galadriel", "Gollum"];
    //console.log(subjektArray);
    //console.log(praedikatArray);
    //console.log(objektArray);
    for (let i = 6; i > 0; i--) {
        let woerter = getVerse(subjektArray, praedikatArray, objektArray);
        console.log(woerter);
    }
    function getVerse(_subjekt, _praedikat, _objekt) {
        let vers = "";
        let subjektZahl = Math.floor(Math.random() * _subjekt.length);
        // console.log(subjektZahl);
        let praedikatZahl = Math.floor(Math.random() * _praedikat.length);
        // console.log(praedikatZahl);
        let objektZahl = Math.floor(Math.random() * _objekt.length);
        // console.log(objektZahl);
        vers = _subjekt[subjektZahl] + " " + _praedikat[praedikatZahl] + " " + _objekt[objektZahl];
        _subjekt.splice(subjektZahl, 1);
        _praedikat.splice(praedikatZahl, 1);
        _objekt.splice(objektZahl, 1);
        return vers;
    }
})(Aufgabe01Gedicht || (Aufgabe01Gedicht = {}));
//# sourceMappingURL=GedichtGenerator.js.map