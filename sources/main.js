const canvas = document.getElementById("rajz");
var btn = document.getElementById("down");
const ctx = canvas.getContext("2d");
var isDrawing = false;
var animFinished = false;

window.setTimeout(function () {
   animFinished = true
   console.log("Hello")
}, 2000);

function StartPainting(){
    isDrawing = true;
}

function StopPainting(){
    isDrawing = false;
    ctx.beginPath();
}

function draw(e){
    if(!isDrawing || !animFinished) return;

    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    var offset = 85
    ctx.lineTo(e.clientX - 50, e.clientY - offset);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - 50, e.clientY - offset);
}

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", StartPainting);
canvas.addEventListener("mouseup", StopPainting);


function downloadImg() {
    var img = canvas.toDataURL("image/png");
    btn.download = 'canvas.png';
    btn.href = img
    btn.click()
}