class Bubbles {
	randomNumber(min,max) {
	    return Math.floor(Math.random()*(max-min+1)+min);
	}
	// Default 80 tall, 60 wide (8 per inch)
	draw(canvas, width=60, height=80, grid=50) {
		// Grab the canvas element that was passed
		var canvasContext = canvas.getContext("2d");
		var halfGrid = grid/2;
		var x = 0;
		var y = 0;

		// Set the canvas size
		console.log('Size: ' + width + 'x' + height);
		canvas.width = width*grid;
		canvas.height = height*grid;
		canvasContext.lineWidth = 3;

		// Loop through columns
		for(x=0; x<=width; x++) {
			// Loop through rows
			for(y=0; y<=height; y++) {
				// Calculate the center of this grid square
				var bubbleX = x * grid + halfGrid;
				var bubbleY = y * grid + halfGrid;

				// TODO: Pick a random bubble size offset +/- 25%
				var maxOffsetSize = grid * 0.25;
				console.log('Max: ' + maxOffsetSize);
				var bubbleSizeOffset = this.randomNumber(4, maxOffsetSize);
				var bubbleDiameter = (grid/2) - bubbleSizeOffset;
				console.log('Size: ' + bubbleDiameter + ' Offset:' + bubbleSizeOffset);

				// Draw this circle
				canvasContext.beginPath();
				canvasContext.arc(bubbleX, bubbleY, bubbleDiameter, 0, 2 * Math.PI);
				canvasContext.stroke();
			}
		}
	}
}

var drawCanvas = document.getElementById('bubbles');
var bubbles = new Bubbles;
bubbles.draw(drawCanvas);