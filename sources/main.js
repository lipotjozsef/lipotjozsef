const canvas = document.getElementById("rajz");
var btn = document.getElementById("down");
const ctx = canvas.getContext("2d");
var clr = "#000000";
var isDrawing = false;
var isErasing = false;
var animFinished = false;

window.setTimeout(function () {
   animFinished = true
   console.log("Hello")
}, 2000);

function StartPainting(){
    console.log(clr)
    isDrawing = true;
}

function StopPainting(){
    isDrawing = false;
    ctx.beginPath();
}

function draw(e){
    if(!isDrawing || !animFinished || isErasing) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle = clr
    ctx.lineTo(e.clientX - 90, e.clientY -95);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - 90, e.clientY - 95);
}

function erase() {
    if(!isErasing) return;
    console.log("started")
    ctx.globalCompsiteOperation = "destination-out";
    ctx.strokeStyle = "rgba(255, 255, 255, 1)";
}

function StartErasing() { isErasing = true; console.log("Erasing"); }

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", StartPainting);
canvas.addEventListener("mouseup", StopPainting);
canvas.addEventListener('mouseout', StopPainting );

function setColor(cl)
{
    isErasing = false;
    clr = cl;
    console.log("Eraseing");
}

function clrCanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function downloadImg() {
    var link = document.createElement('a');
    var img = canvas.toDataURL("image/png");
    link.download = 'canvas.png';
    link.href = img
    link.click()
    link.remove()
}