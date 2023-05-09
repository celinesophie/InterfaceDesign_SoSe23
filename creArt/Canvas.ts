namespace creArtMain {

    window.addEventListener("load", handleLoad);

    let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;

    function handleLoad(_event: Event): void {
        //get rendering context
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        //get image data
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        // crc2.putImageData(imgData, 0, 0); // das gespeicherte Bild wiederverwenden

        //verschiedene Tasten drücken um Bild zu generieren
        document.addEventListener("keydown", function (event) {
            if (event.key === "ArrowUp") {
                drawBackgroundHappy();
                // imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
            }
            if (event.key === "ArrowDown") {
                drawBackgroundSad();
                // imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
            }
            if (event.key === "a") {
                drawRect();
                // imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
            }
            if (event.key === "s") {
                drawCircle();
                // imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
            }
        })
    } // handleload

    //FUNKTIONEN
    function drawBackgroundHappy(): void {

        // Create a linear gradient
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 899, 499);

        //gradient stop 1
        let h1: number = Math.floor(Math.random() * 60) + 160; //farbe
        let s1: number = Math.floor(Math.random() * 40) + 60; //saturation
        let l1: number = Math.floor(Math.random() * 10) + 50; //luminanz
        let a1: number = 1; //durchsichtigkeit
        //gradient stop 2
        let h2: number = Math.floor(Math.random() * 60) + 166; //farbe
        let s2: number = Math.floor(Math.random() * 30) + 70; //saturation
        let l2: number = Math.floor(Math.random() * 10) + 60; //luminanz
        //gradient stop 3
        let h3: number = Math.floor(Math.random() * 60) + 166; //farbe
        let s3: number = Math.floor(Math.random() * 20) + 80; //saturation
        let l3: number = Math.floor(Math.random() * 10) + 60; //luminanz

        // Add three color stops
        gradient.addColorStop(0, "hsla(" + h1 + "," + s1 + "%," + l1 + "%," + a1 + ")");
        gradient.addColorStop(.5, "hsla(" + h2 + "," + s2 + "%," + l2 + "%," + a1 + ")");
        gradient.addColorStop(1, "hsla(" + h3 + "," + s3 + "%," + l3 + "%," + a1 + ")");

        // Set the fill style and draw a rectangle
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 900, 600);
    }

    function drawBackgroundSad(): void {

        // Create a linear gradient
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 899, 499);

        //gradient stop 1
        let h1: number = Math.floor(Math.random() * 241); //farbe
        let s1: number = Math.floor(Math.random() * 20) + 30; //saturation
        let l1: number = Math.floor(Math.random() * 10) + 20; //luminanz
        let a1: number = 1; //durchsichtigkeit
        //gradient stop 2
        let h2: number = Math.floor(Math.random() * 241); //farbe
        let s2: number = Math.floor(Math.random() * 20) + 30; //saturation
        let l2: number = Math.floor(Math.random() * 10) + 20; //luminanz
        //gradient stop 3
        let h3: number = Math.floor(Math.random() * 241); //farbe
        let s3: number = Math.floor(Math.random() * 20) + 30; //saturation
        let l3: number = Math.floor(Math.random() * 10) + 20; //luminanz

        // Add three color stops
        gradient.addColorStop(0, "hsla(" + h1 + "," + s1 + "%," + l1 + "%," + a1 + ")");
        gradient.addColorStop(.5, "hsla(" + h2 + "," + s2 + "%," + l2 + "%," + a1 + ")");
        gradient.addColorStop(1, "hsla(" + h3 + "," + s3 + "%," + l3 + "%," + a1 + ")");

        // Set the fill style and draw a rectangle
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 900, 600);
    }

    function drawRect(): void {
        //random position as variables
        let x: number = Math.random() * 700;
        let y: number = Math.random() * 500;
        //random number for shape
        let i: number = Math.random() * 3;
        
        //draw rects
        if (i < 1) {
            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.strokeRect(x, y, 250, 180);
            crc2.closePath();
            console.log(i);
        }
        if (i <= 1.5 && i > 1) {
            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.strokeRect(x, y, 100, 100);
            crc2.closePath();
            console.log(i);
        }
        if (i > 1.5) {
            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.strokeRect(x, y, 150, 50);
            crc2.closePath();
            console.log(i);
        }    
    }

    function drawCircle(): void {       
        //random position as variables
        let x: number = Math.random() * 700; 
        let y: number = Math.random() * 500;
        //random number for radius
        let r: number = Math.random() * 50;

        crc2.beginPath();
        crc2.arc(x, y, r, 0, 2 * Math.PI);
        crc2.lineWidth = 1;
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();
    }
} //namespace