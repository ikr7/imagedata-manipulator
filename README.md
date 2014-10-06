# ImageData-Manipulator

HTML5 Canvas のユーティリティライブラリです。  
ImageData のピクセルデータの取り扱いを容易にします。

## Usage

```javascript
var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

context.fillStyle = 'blue';
context.fillRect(0, 0, 10, 10);

context.fillStyle = 'red';
context.fillRect(10, 0, 10, 10);

var idm = new ImageDataManipulator(context.getImageData(0, 0, 20, 10));

idm.getPixel(5, 5); // => [0, 0, 255, 255];
idm.getPixel(15, 5); // => [255, 0, 0, 255];
```

## Methods
- getPixel
- getRect
- putTo
