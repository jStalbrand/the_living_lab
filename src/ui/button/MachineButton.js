

theLivingLab.ui.MachineButton = function() {



  rune.display.Sprite.call(this, 1095, 20, 65, 80, '', 'buttonsprite');

  

}



theLivingLab.ui.MachineButton.prototype = Object.create(rune.display.Sprite.prototype);
theLivingLab.ui.MachineButton.prototype.constructor = theLivingLab.ui.MachineButton;



Object.defineProperty(theLivingLab.ui.MachineButton.prototype, "on", {

  get : function() {
  
      return this.animations.m_frameIndex === 0;
  },

  set : function(status) {
      status ? this.animations.goto('on', 0) : this.animations.goto('off', 0) ;
  }

});

  


theLivingLab.ui.MachineButton.prototype.init = function() {
 
  rune.display.Sprite.prototype.init.call(this);
  this._initAnimations();
}



theLivingLab.ui.MachineButton.prototype._initAnimations = function() {

  //this.animations.add('status', [0, 1], 0);
  this.animations.add('off', [1], 0);
  this.animations.add('on', [0], 0);
}



theLivingLab.ui.MachineButton.prototype.update = function(step) {
 
  rune.display.Sprite.prototype.update.call(this, step);
}



theLivingLab.ui.MachineButton.prototype.dispose = function() {

  this.parent.removeChild(this);
  rune.display.Sprite.prototype.dispose.call(this);
}

