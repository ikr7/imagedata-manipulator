
(function(global){

	var ImageDataManipulator = function(rawImageData){
		
		this.rawImageData = rawImageData;

		this.data = [];

		for(var i = 0; i < this.rawImageData.data.length; i += 4){
			this.data.push([
				this.rawImageData.data[i + 0], 
				this.rawImageData.data[i + 1], 
				this.rawImageData.data[i + 2], 
				this.rawImageData.data[i + 3]
			]);
		}

		this.length = this.data.length;
		this.width = this.rawImageData.width;
		this.height = this.rawImageData.height;

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