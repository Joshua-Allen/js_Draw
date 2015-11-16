var current_canvas;
var current_context;

//lifeCanvas = document.getElementById("lifeCanvas");
//ctx_life = lifeCanvas.getContext("2d");

// draw helper functions
function draw_clear(){
	current_context.clearRect(0, 0, current_canvas.width, current_canvas.height);
}
function draw_line(x1, y1, x2, y2) {
	current_context.beginPath();
	current_context.moveTo(x1,y1);
	current_context.lineTo(x2,y2);
	current_context.stroke();
}
function draw_circle(x, y, r) {
	current_context.beginPath();
	current_context.arc(x,y,r,0,2*Math.PI);
	current_context.stroke();
}
function draw_rect(x,y,width,height) {
	current_context.fillRect(x,y,width,height);
}
function draw_point(x,y) {
	current_context.fillRect(x,y,1,1);
}






















