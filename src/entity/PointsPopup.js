
theLivingLab.entity.PointsPopup = function(src) {

 
    this.src = src || 'bakgrundstor';
     rune.display.Sprite.call(this, 0, 0, 1281, 721, '00FF00');
 }
 
 theLivingLab.ui.Background.prototype = Object.create(rune.display.Graphic.prototype);
 theLivingLab.ui.Background.prototype.constructor = theLivingLab.ui.Background;
 