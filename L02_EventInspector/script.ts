namespace EventInspector {

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        let body: HTMLElement = <HTMLElement>document.querySelector("#body");
        let div0: HTMLDivElement = <HTMLDivElement>document.querySelector("#div0");
        let div1: HTMLDivElement = <HTMLDivElement>document.querySelector("#div1");

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        //document.body.addEventListener("mousemove", setInfoBox);

        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);

        div0.addEventListener("mousemove", setInfoBox);
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);

        div1.addEventListener("mousemove", setInfoBox);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
    }

    function setInfoBox(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;

        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");

        span.style.left = x + "px";
        span.style.top = y + "px";

        span.innerHTML = "Current Position: <br> left: " + x + "<br> top: " + y + "<br>" + _event.target;
    }

    function logInfo (_event: Event): void {
        
        console.log("Event Type: ", _event.type);
        console.log("Target: ", _event.target);
        console.log("Current Target: ", _event.currentTarget);
        console.log("Event: ", _event);
        
    }

}