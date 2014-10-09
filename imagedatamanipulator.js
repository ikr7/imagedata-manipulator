
(function(global){

	var ImageDataManipulator = function(rawImageData){

		this.data = [];

		for(var i = 0; i < rawImageData.data.length; i += 4){
			this.data.push([
				rawImageData.data[i + 0], 
				rawImageData.data[i + 1], 
				rawImageData.data[i + 2], 
				rawImageData.data[i + 3]
			]);
		}

		this.length = this.data.length;
		this.width = rawImageData.width;
		this.height = rawImageData.height;

	};

	ImageDataManipulator.prototype.getPixel = function(x, y){
		return this.data[this.width * y + x];
	};

	ImageDataManipulator.prototype.getRect = function(x, y, w, h){
		var pixels = [];
		for(var i = x; i < x + w; i++){
			for(var j = y; j < y + h; j++){
				pixels.push(this.getPixel(j, i));
			}
		}
		return pixels;
	};

	ImageDataManipulator.prototype.putTo = function(targetContext){
		console.log('#################\n# UnImplemented #\n#################');
		return null;
	};

	global.ImageDataManipulator = ImageDataManipulator;

})(this);