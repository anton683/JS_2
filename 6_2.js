let ctx = document.getElementById("root");
let context = ctx.getContext("2d");
context.beginPath();
context.moveTo(100,100);
context.lineTo(200,100);
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(100,150);
context.lineTo(200,150);
context.closePath();
context.stroke();
