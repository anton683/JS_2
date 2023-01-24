document.addEventListener('mousemove', e =>{
	ctx.beginPath();
	ctx.arc(e.offsetX, e.offsetY, 50, 0, 2 *Math.PI);
	ctx.stroke();
});