const canvas = document.getElementById("rajz");
var btn = document.getElementById("down");
var SizeRange = document.getElementById("points");
const ctx = canvas.getContext("2d");
var clr = "#000000";
var isDrawing = false;
var isErasing = false;
var animFinished = false;
var size = SizeRange.ariaValueMax;

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
    ctx.lineWidth = size;
    ctx.lineCap = "round";
    var RectOffset = canvas.getBoundingClientRect();
    if(isErasing == true){
        ctx.globalCompositeOperation="destination-out";
      }else{
        ctx.globalCompositeOperation="source-over";
        ctx.strokeStyle = clr
    }
    Drawstroke(e.clientX - RectOffset.x, e.clientY - RectOffset.y)
}

function Drawstroke(eX, eY)
{
    ctx.lineTo(eX, eY); 
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(eX, eY);
}

function StartErasing() { isErasing = true; console.log("Erasing"); }

function sizeChange() 
{
    size = SizeRange.nodeValue;
}

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