
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

		this._width = rawImageData.width;
		this._height = rawImageData.height;

		Object.defineProperty(ImageDataManipulator.prototype, 'width', {
			'get': function(){
				return this._width;
			}, 
			'set': function(value){
				this.data = this.getRect(0, 0, value, this._height);
				return value;
			}
		});

		Object.defineProperty(ImageDataManipulator.prototype, 'height', {
			'get': function(){
				return this._height;
			}, 
			'set': function(value){
				this.data = this.getRect(0, 0, this._width, value);
				return value;
			}
		});

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