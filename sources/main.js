const canvas = document.getElementById("rajz");
const ctx = canvas.getContext("2d");

var isDrawing = false;
var x = event.clientX;     // Get the horizontal coordinate
var y = event.clientY;     // Get the vertical coordinate
var coor = "X coords: " + x + ", Y coords: " + y;
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.strokeStyle = "#fff"
ctx.stroke();

addEventListener("mouseup",() => {
    console.log("Up");
    isDrawing = true;
});
addEventListener("mousedown", () => {
    console.log("Down");
    isDrawing = true;
    drawing()
});

function drawing()
{
    if(isDrawing)
    {
        console.log(coor);
    }
}