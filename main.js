var lastx,lasty;
var mouseevent = "empty";
canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color = "black";
width = 2;

var swidth = screen.width;
newwidth = screen.width-70;
newheight = screen.height-300;

if(swidth < 992){
    document.getElementById("myCanvas").width = newwidth;
    document.getElementById("myCanvas").height = newheight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart",mystart);
function mystart(e){
    console.log('touch is started');
color = document.getElementById("color").value;
width = document.getElementById("width").value;
lastx = e.touches[0].clientX - canvas.offsetLeft;
lasty = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",mymove);
function mymove(e){
currentx=e.touches[0].clientX-canvas.offsetLeft;
currenty=e.touches[0].clientY-canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(lastx,lasty);
    console.log('lastx & lasty are '+ lastx+' & '+lasty);
    ctx.lineTo(currentx,currenty);
    console.log('currentx & currenty are '+ currentx+' & '+currenty);
    ctx.stroke();

    canvas.addEventListener("mousedown",mydown);
function mydown(e){
mouseevent="mousedown";
color = document.getElementById("color").value;
width = document.getElementById("width").value;
}


canvas.addEventListener("mouseup",myup);
function myup(e){
mouseevent="mouseup";
}

canvas.addEventListener("mouseleave",myl);
function myl(e){
mouseevent="mouseleave";
}

canvas.addEventListener("mousemove",mymove);
function mymove(e){
currentx=e.clientX-canvas.offsetLeft;
currenty=e.clientY-canvas.offsetTop;

if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();
}

lastx = currentx;
lasty = currenty;
}

function cleararea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}}
