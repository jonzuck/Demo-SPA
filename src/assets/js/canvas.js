var canvas = document.getElementById('canvas');
console.log(canvas);
if (canvas && canvas.getContext) {
	var context = canvas.getContext('2d');
	if (context){
		context.fillRect(30,20,120,120);
	}
}