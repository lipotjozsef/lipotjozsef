const canvas = document.getElementById("rajz");
var btn = document.getElementById("down");
const ctx = canvas.getContext("2d");
var clr = "#000000";
var isDrawing = false;
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
    if(!isDrawing || !animFinished) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle = clr
    ctx.lineTo(e.clientX - 90, e.clientY -95);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - 90, e.clientY - 95);
}

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", StartPainting);
canvas.addEventListener("mouseup", StopPainting);

function setColor(cl)
{
    clr = cl
}

function downloadImg() {
    var link = document.createElement('a');
    var img = canvas.toDataURL("image/png");
    link.download = 'canvas.png';
    link.href = img
    link.click()
    link.remove()
}