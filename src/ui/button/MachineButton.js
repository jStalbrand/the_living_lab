
theLivingLab.ui.MachineButton = function() {


    this.active = false;


    rune.display.Sprite.call(this, 1095, 14, 65, 80, '', 'buttonsprite');
    

}

theLivingLab.ui.MachineButton.prototype = Object.create(rune.display.Sprite.prototype);
theLivingLab.ui.MachineButton.prototype.constructor = theLivingLab.ui.MachineButton;


theLivingLab.ui.MachineButton.prototype.init = function() {
   
  rune.display.Sprite.prototype.init.call(this);
  this._initAnimations();
}


theLivingLab.ui.MachineButton.prototype._initAnimations = function() {

    this.animations.add('status', [1, 0], 0, true);
}


theLivingLab.ui.MachineButton.prototype.update = function(step) {
   
  rune.display.Sprite.prototype.update.call(this, step);
  this._updateAnimations();
}


theLivingLab.ui.MachineButton.prototype._updateAnimations = function() {

    if(this.application.scenes.selected._objects._machine !== undefined){

      this.application.scenes.selected._objects._machine.hasLoaded ? this.animations.gotoAndPlay('status', 1) : this.animations.gotoAndPlay('status', 0)
    }
}


theLivingLab.ui.MachineButton.prototype.dispose = function() {

  this.parent.removeChild(this);
  rune.display.Sprite.prototype.dispose.call(this);
}
