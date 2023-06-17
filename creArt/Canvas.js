"use strict";
var creArtMain;
(function (creArtMain) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let imgData;
    let audioHappy = new Audio("../audio/HeartbreakAnthem.mp3");
    let audioSad = new Audio("../audio/GoodEnough.mp3");
    let audioAngry = new Audio("");
    let woosh = new Audio("../sounds/short-woosh.mp3");
    let pencil = new Audio("../sounds/scribble1.mp3");
    let splash = new Audio("../sounds/splash-drop.mp3");
    function handleLoad(_event) {
        //get rendering context
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        //get image data
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        // crc2.putImageData(imgData, 0, 0); // das gespeicherte Bild wiederverwenden
        //verschiedene Tasten drücken um Bild zu generieren
        document.addEventListener("keydown", function (event) {
            if (event.key === "ArrowUp") {
                splash.play();
                // audioHappy.pause;
                // audioHappy.currentTime = 0;
                // audioSad.pause;
                // audioSad.currentTime = 0;
                drawBackgroundHappy();
                // imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
            }
            if (event.key === "ArrowDown") {
                splash.play();
                // audioHappy.pause;
                // audioHappy.currentTime = 0;
                // audioSad.pause;
                // audioSad.currentTime = 0;
                drawBackgroundSad();
                // imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
            }
            if (event.key === "a") {
                pencil.play();
                drawRect();
                // imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
            }
            if (event.key === "s") {
                pencil.play();
                drawCircle();
                // imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
            }
            if (event.key === "d") {
                pencil.play();
                drawTriangle();
                // imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
            }
        });
    } // handleload
    //FUNKTIONEN
    function drawBackgroundHappy() {
        // let videoWaves = document.createElement("video");
        // videoWaves.src = "../videos/waves.mp4"
        // videoWaves.controls = false;
        // videoWaves.height = 1080;
        // videoWaves.width = 1920;
        // document.body.appendChild(videoWaves)
        // Create a linear gradient
        let gradient = crc2.createLinearGradient(0, 0, 899, 499);
        //gradient stop 1
        let h1 = Math.floor(Math.random() * 60) + 160; //farbe
        let s1 = Math.floor(Math.random() * 40) + 60; //saturation
        let l1 = Math.floor(Math.random() * 10) + 50; //luminanz
        let a1 = 1; //durchsichtigkeit
        //gradient stop 2
        let h2 = Math.floor(Math.random() * 60) + 166; //farbe
        let s2 = Math.floor(Math.random() * 30) + 70; //saturation
        let l2 = Math.floor(Math.random() * 10) + 60; //luminanz
        //gradient stop 3
        let h3 = Math.floor(Math.random() * 60) + 166; //farbe
        let s3 = Math.floor(Math.random() * 20) + 80; //saturation
        let l3 = Math.floor(Math.random() * 10) + 60; //luminanz
        // Add three color stops
        gradient.addColorStop(0, "hsla(" + h1 + "," + s1 + "%," + l1 + "%," + a1 + ")");
        gradient.addColorStop(.5, "hsla(" + h2 + "," + s2 + "%," + l2 + "%," + a1 + ")");
        gradient.addColorStop(1, "hsla(" + h3 + "," + s3 + "%," + l3 + "%," + a1 + ")");
        // Set the fill style and draw a rectangle
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 900, 600);
        //audio
        // audioHappy.play();
    }
    function drawBackgroundSad() {
        // Create a linear gradient
        let gradient = crc2.createLinearGradient(0, 0, 899, 499);
        //gradient stop 1
        let h1 = Math.floor(Math.random() * 241); //farbe
        let s1 = Math.floor(Math.random() * 20) + 30; //saturation
        let l1 = Math.floor(Math.random() * 10) + 20; //luminanz
        let a1 = 1; //durchsichtigkeit
        //gradient stop 2
        let h2 = Math.floor(Math.random() * 241); //farbe
        let s2 = Math.floor(Math.random() * 20) + 30; //saturation
        let l2 = Math.floor(Math.random() * 10) + 20; //luminanz
        //gradient stop 3
        let h3 = Math.floor(Math.random() * 241); //farbe
        let s3 = Math.floor(Math.random() * 20) + 30; //saturation
        let l3 = Math.floor(Math.random() * 10) + 20; //luminanz
        // Add three color stops
        gradient.addColorStop(0, "hsla(" + h1 + "," + s1 + "%," + l1 + "%," + a1 + ")");
        gradient.addColorStop(.5, "hsla(" + h2 + "," + s2 + "%," + l2 + "%," + a1 + ")");
        gradient.addColorStop(1, "hsla(" + h3 + "," + s3 + "%," + l3 + "%," + a1 + ")");
        // Set the fill style and draw a rectangle
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 900, 600);
        //audio
        // audioSad.play();  
    }
    function drawRect() {
        //random position as variables
        let x = Math.random() * 700;
        let y = Math.random() * 500;
        //random number for shape
        let i = Math.random() * 3;
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
    function drawCircle() {
        //random position as variables
        let x = Math.random() * 700;
        let y = Math.random() * 500;
        //random number for radius
        let r = Math.random() * 50;
        crc2.beginPath();
        crc2.arc(x, y, r, 0, 2 * Math.PI);
        crc2.lineWidth = 1;
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();
    }
    function drawTriangle() {
        //random position as variables
        let x = Math.random() * 700;
        let y = Math.random() * 500;
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 30, y);
        crc2.lineTo(x + 15, y - 15);
        crc2.lineTo(x, y);
        crc2.lineWidth = 1;
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();
    }
})(creArtMain || (creArtMain = {})); //namespace
//# sourceMappingURL=Canvas.js.map