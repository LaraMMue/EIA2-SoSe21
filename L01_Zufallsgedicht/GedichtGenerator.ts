namespace Aufgabe01Gedicht {
    let subjektArray: string[] = ["Gandalf", "Bilbo", "Frodo", 
    "Aragorn", "Thorin", "Sam"];

    let praedikatArray: string[] = ["trusts", "hunts", "fights", 
    "hates", "likes", "hides from"];

    let objektArray: string[] = ["Sauron", "dwarves", "Smaug", 
    "orcs", "Galadriel", "Gollum"];

    //console.log(subjektArray);
    //console.log(praedikatArray);
    //console.log(objektArray);
    
    for (let i: number = 6; i > 0; i--) {
        let woerter: string = getVerse(subjektArray, praedikatArray, objektArray);
        console.log(woerter);
    }

    function getVerse (_subjekt: string[], _praedikat: string[], _objekt: string[]): string { 
            let vers: string = "";
            
            let subjektZahl: number = Math.floor(Math.random() * _subjekt.length);
           // console.log(subjektZahl);
            
            let praedikatZahl: number = Math.floor(Math.random() * _praedikat.length);
           // console.log(praedikatZahl);
            

            let objektZahl: number = Math.floor(Math.random() * _objekt.length);
           // console.log(objektZahl);
            

            vers = _subjekt[subjektZahl] + " " + _praedikat[praedikatZahl] + " " + _objekt[objektZahl];

            _subjekt.splice(subjektZahl, 1);
            _praedikat.splice(praedikatZahl, 1);
            _objekt.splice(objektZahl, 1);

            return vers;
    }
    
}