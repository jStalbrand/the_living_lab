
const Background = function(src) {

 
    this.src = src || 'bakgrundstor';
     rune.display.Graphic.call(this, 0, 0, 1281, 721, '00FF00', this.src);
 }
 
 Background.prototype = Object.create(rune.display.Graphic.prototype);
 Background.prototype.constructor = Background;
 
 Background.prototype.init = function() {
    
    
 }
 