"use strict";
var creArtMain;
(function (creArtMain) {
    window.addEventListener("load", handleLoad);
    let crc2;
    // let imgData: ImageData;
    // let audioHappy = new Audio("../audio/HeartbreakAnthem.mp3");
    // let audioSad = new Audio("../audio/GoodEnough.mp3");
    // let audioAngry = new Audio("");
    let woosh = new Audio("../sounds/short-woosh.mp3");
    let pencil = new Audio("../sounds/scribble1.mp3");
    let splash = new Audio("../sounds/splash-drop.mp3");
    function handleLoad(_event) {
        //get rendering context
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        //get image data
        // imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        // crc2.putImageData(imgData, 0, 0); // das gespeicherte Bild wiederverwenden
        //verschiedene Tasten drücken um Bild zu generieren
        document.addEventListener("keydown", function (event) {
            if (event.key === "ArrowUp") {
                splash.play();
                // audioHappy.pause;
                // audioHappy.currentTime = 0;
                // audioSad.pause;
                // audioSad.currentTime = 0;
                drawBackgroundBlue();
                // imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
            }
            if (event.key === "ArrowDown") {
                splash.play();
                // audioHappy.pause;
                // audioHappy.currentTime = 0;
                // audioSad.pause;
                // audioSad.currentTime = 0;
                drawBackgroundRed();
                // imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
            }
            if (event.key === "ArrowRight") {
                splash.play();
                // audioHappy.pause;
                // audioHappy.currentTime = 0;
                // audioSad.pause;
                // audioSad.currentTime = 0;
                drawBackgroundYellow();
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
    function drawBackgroundBlue() {
        // let videoWaves = document.createElement("video");
        // videoWaves.src = "../videos/waves.mp4"
        // videoWaves.controls = false;
        // videoWaves.height = 1080;
        // videoWaves.width = 1920;
        // document.body.appendChild(videoWaves)
        // Create a linear gradient
        let gradient = crc2.createLinearGradient(0, 0, 1920, 1080);
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
        crc2.fillRect(0, 0, 1920, 1080);
        //audio
        // audioHappy.play();
    }
    function drawBackgroundRed() {
        // Create a linear gradient
        let gradient = crc2.createLinearGradient(0, 0, 1920, 1080);
        //gradient stop 1
        let h1 = Math.floor(Math.random() * 31); //farbe
        let s1 = Math.floor(Math.random() * 20) + 80; //saturation
        let l1 = Math.floor(Math.random() * 20) + 30; //luminanz
        let a1 = 1; //durchsichtigkeit
        //gradient stop 2
        let h2 = Math.floor(Math.random() * 31); //farbe
        let s2 = Math.floor(Math.random() * 20) + 80; //saturation
        let l2 = Math.floor(Math.random() * 20) + 30; //luminanz
        //gradient stop 3
        let h3 = Math.floor(Math.random() * 31); //farbe
        let s3 = Math.floor(Math.random() * 20) + 80; //saturation
        let l3 = Math.floor(Math.random() * 20) + 30; //luminanz
        // Add three color stops
        gradient.addColorStop(0, "hsla(" + h1 + "," + s1 + "%," + l1 + "%," + a1 + ")");
        gradient.addColorStop(.5, "hsla(" + h2 + "," + s2 + "%," + l2 + "%," + a1 + ")");
        gradient.addColorStop(1, "hsla(" + h3 + "," + s3 + "%," + l3 + "%," + a1 + ")");
        // Set the fill style and draw a rectangle
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1920, 1080);
        //audio
        // audioSad.play();  
    }
    function drawBackgroundYellow() {
        // Create a linear gradient
        let gradient = crc2.createLinearGradient(0, 0, 1920, 1080);
        //gradient stop 1
        let h1 = Math.floor(Math.random() * 21) + 50; //farbe
        let s1 = Math.floor(Math.random() * 30) + 70; //saturation
        let l1 = Math.floor(Math.random() * 20) + 30; //luminanz
        let a1 = 1; //durchsichtigkeit
        //gradient stop 2
        let h2 = Math.floor(Math.random() * 21) + 50; //farbe
        let s2 = Math.floor(Math.random() * 30) + 70; //saturation
        let l2 = Math.floor(Math.random() * 20) + 30; //luminanz
        //gradient stop 3
        let h3 = Math.floor(Math.random() * 21) + 50; //farbe
        let s3 = Math.floor(Math.random() * 30) + 70; //saturation
        let l3 = Math.floor(Math.random() * 20) + 30; //luminanz
        // Add three color stops
        gradient.addColorStop(0, "hsla(" + h1 + "," + s1 + "%," + l1 + "%," + a1 + ")");
        gradient.addColorStop(.5, "hsla(" + h2 + "," + s2 + "%," + l2 + "%," + a1 + ")");
        gradient.addColorStop(1, "hsla(" + h3 + "," + s3 + "%," + l3 + "%," + a1 + ")");
        // Set the fill style and draw a rectangle
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1920, 1080);
        //audio
        // audioHappy.play();
    }
    function drawRect() {
        //random position as variables
        let x = Math.random() * 1920;
        let y = Math.random() * 1080;
        //random number for shape
        let i = Math.random() * 3;
        //draw rects
        if (i < 1) {
            crc2.beginPath();
            crc2.lineWidth = 3;
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
            crc2.lineWidth = 1;
            crc2.strokeStyle = "black";
            crc2.strokeRect(x, y, 150, 50);
            crc2.closePath();
            console.log(i);
        }
    }
    function drawCircle() {
        //random position as variables
        let x = Math.random() * 1920;
        let y = Math.random() * 1080;
        //random number for radius
        let r = Math.random() * 70;
        crc2.beginPath();
        crc2.arc(x, y, r, 0, 2 * Math.PI);
        if (r >= 25) {
            crc2.lineWidth = 2;
        }
        else {
            crc2.lineWidth = 1;
        }
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();
    }
    function drawTriangle() {
        //random position as variables
        let x = Math.random() * 1920;
        let y = Math.random() * 1080;
        //random number for different triangles
        let i = Math.random() * 4;
        i;
        if (i >= 0 && i < 2) {
            console.log(i);
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
        else if (i >= 2 && i < 3) {
            console.log(i);
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x + 100, y);
            crc2.lineTo(x + 50, y - 55);
            crc2.lineTo(x, y);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();
        }
        else {
            console.log(i);
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x + 60, y);
            crc2.lineTo(x + 30, y - 45);
            crc2.lineTo(x, y);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();
        }
    }
})(creArtMain || (creArtMain = {})); //namespace
//# sourceMappingURL=Canvas.js.map