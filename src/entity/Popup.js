
theLivingLab.entity.Popup = function(x, y) {



  rune.display.Graphic.call(this, x, y, 164, 56, '', 'pressq');

}


theLivingLab.entity.Popup.prototype = Object.create(rune.display.Graphic.prototype);
theLivingLab.entity.Popup.prototype.constructor = theLivingLab.entity.Popup;


theLivingLab.entity.Popup.prototype.init = function() {
 
    rune.display.Graphic.prototype.init.call(this);
    this.flicker(Infinity, 500);
}

theLivingLab.entity.Popup.prototype.dispose = function() {

    this.parent.removeChild(this);
}
