    var canvas = document.getElementById('canvas');
    if (canvas && canvas.getContext) {
      var context = canvas.getContext('2d');
      if (context) {
        //all objects
        context.shadowOffsetX = 3;
        context.shadowOffsetY = 3;
        context.shadowBlur = 3;
        context.shadowColor = 'rgba(0, 0, 0, 0.5)';
        
        //yellowgreen rect
        context.fillStyle ='yellowgreen';
        context.fillRect(30, 20, 120, 120);
        
        //red rect
        context.fillStyle = '#ff0000';
        context.fillRect(200, 80, 160, 160);
        
        //circle
        context.arc(360, 240, 160, 0, Math.PI * 2, false);
        
      var grd = context.createRadialGradient(260, 110, 10, 238, 50, 300);
      // light blue
      grd.addColorStop(0, '#8ED6FF');
      // dark blue
      grd.addColorStop(1, '#004CB3');        
        context.strokeStyle = '#00ffff';
        context.stroke();
      }
        context.fillStyle = grd;
        context.fill();
      
      //text
      context.font = '40pt Calibri';
      context.fillStyle = 'blue';
      context.fillText('Hello World!', 250, 380);
      

      context.beginPath();
      context.moveTo(280, 120);
      
      // squiggle
      // line 1
      context.lineTo(400, 260);
      // quadratic curve
      context.quadraticCurveTo(430, 300, 450, 220);
      // bezier curve
      context.bezierCurveTo(490, 60, 500, 300, 600, 250);
      // line 2
      context.lineTo(700, 190);

      context.lineWidth = 5;
      context.strokeStyle = 'green';
      context.stroke();
      
      //quadratic and bezier control points
      context.beginPath();
      context.moveTo(430, 300);
      context.lineTo(435, 300);
      context.lineWidth = 5;
      context.strokeStyle = 'purple';
      context.stroke();
      
      context.beginPath();
      context.moveTo(490, 60);
      context.lineTo(495, 60);
      context.lineWidth = 5;
      context.strokeStyle = 'purple';
      context.stroke(); 
      
      context.beginPath();
      context.moveTo(500, 300);
      context.lineTo(505, 300);
      context.lineWidth = 5;
      context.strokeStyle = 'purple';
      context.stroke();      
      
      // set line width for all line joins
      context.lineWidth = 20;
      context.strokeStyle = 'rgba(255,0,255,0.8)';

      // miter line join (left)
      context.beginPath();
      context.moveTo(399, 150);
      context.lineTo(449, 50);
      context.lineTo(499, 150);
      context.lineJoin = 'miter';
      context.stroke();

      // round line join (middle)
      context.beginPath();
      context.moveTo(539, 150);
      context.lineTo(589, 50);
      context.lineTo(639, 150);
      context.lineJoin = 'round';
      context.stroke();

      // bevel line join (right)
      context.beginPath();
      context.moveTo(679, 150);
      context.lineTo(729, 50);
      context.lineTo(779, 150);
      context.lineJoin = 'bevel';
      context.stroke();
      
      // maroon pseudosquare
      context.beginPath();
      context.moveTo(600,250);
      context.lineTo(650,250);
      context.lineWidth = 50;
      context.strokeStyle = 'rgba(153,0,0,0.7)';
      context.stroke();
      
      //blue mostly rounded rectangle
      var rectWidth = 168;
      var rectHeight = 100;
      var rectX = 680;
      var rectY = 100;     
      var radius = 30;
      
      context.beginPath();
      context.moveTo(rectX,rectY);
      context.lineTo(rectX + rectWidth - radius, rectY);
      context.arcTo(
        rectX + rectWidth, rectY, 
        rectX + rectWidth, rectY + rectHeight,
        radius, rectY+radius, radius);
      context.lineTo(rectX + rectWidth, rectY+ rectHeight);
      context.lineTo(rectX + radius, rectY+ rectHeight);
      context.arcTo(
        rectX, rectY + rectHeight, 
        rectX, rectY,
        radius);
      context.lineTo(rectX, rectY);
      context.lineWidth = 2;
      context.fillStyle = 'rgba(0,153,204,0.5)';
      context.fill();
      context.strokeStyle = '#6699aa';
      context.stroke();
      
      //yellow rectangle
      context.beginPath();
      context.rect(780, 350, 200, 50);
      context.fillStyle = 'yellow';
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = 'black';
      context.stroke(); 
    }


	var merc = document.querySelector('img');
	merc.addEventListener('load', function(){
		context.drawImage(merc, 50,240);
		
	/*	
		var i,
			newImg = context.getImageData(0, 0, 500,500),
			newLen = newImg.data.length;
		for (i = 0; i < newLen; i+=4) {
			newImg.data[i] = 255 - newImg.data[i];
			newImg.data[i+1] = 255 - newImg.data[i+1];
			newImg.data[i+2] = 255 - newImg.data[i+2];
		}
		context.putImageData(newImg, 0, 0);
	}, false);
*/	
	});
