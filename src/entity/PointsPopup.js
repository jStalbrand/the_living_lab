

theLivingLab.entity.PointsPopup = function(x, y) {


    var x = x || 0;


    var y = y || 0;
    
    rune.display.Sprite.call(this, x, y, 86, 38, '', '50points');
 
 
}
 

 theLivingLab.entity.PointsPopup.prototype = Object.create(rune.display.Graphic.prototype);
 theLivingLab.entity.PointsPopup.prototype.constructor = theLivingLab.entity.PointsPopup;


 theLivingLab.entity.PointsPopup.prototype.init = function() {

    rune.display.Sprite.prototype.init.call(this);
    this.application.scenes.selected.timers.create({
        duration: 500,
        scope: this,
        onComplete: this.dispose
    });
 
}


theLivingLab.entity.PointsPopup.prototype.dispose = function() {

    this.parent.removeChild(this);
}
