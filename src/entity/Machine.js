

theLivingLab.entity.Machine = function() {


      this._timer = null;



      this._popupDesc = null;



      this.powerup = null;



      this.DELAY_DURATION = 2000;

      

      this.sound = this.application.sounds.sound.get('machinesound');



      this.sound.volume = 1;



      this.LOADED_ANIMATION = 'finishedloading'



      this.LOADING_ANIMATION = 'loading'



      rune.display.Sprite.call(this, 880, -43, 424, 240, '', 'exmachine');

  
}



theLivingLab.entity.Machine.prototype = Object.create(rune.display.Sprite.prototype);
theLivingLab.entity.Machine.prototype.constructor = theLivingLab.entity.Machine;



Object.defineProperty(theLivingLab.entity.Machine.prototype, "hasLoaded", {


    get : function() {

        return this.animations.current.name === this.LOADED_ANIMATION;
    }


});



theLivingLab.entity.Machine.prototype.init = function() {
 
    rune.display.Sprite.prototype.init.call(this);
    this._initAnimations();
    this._initTimer();
    this._initHitbox();
}




theLivingLab.entity.Machine.prototype.addPopup = function() {

    this._popupDesc = new theLivingLab.entity.Popup(50, 70);
    this.application.scenes.selected.stage.addChild(this._popupDesc);
}



theLivingLab.entity.Machine.prototype._initAnimations = function() {

    this.animations.add(this.LOADING_ANIMATION, [0,1,2,3,4], 0);
    this.animations.add(this.LOADED_ANIMATION, [5,6], 5, true);
}



theLivingLab.entity.Machine.prototype._initHitbox = function() {

    this.hitbox.set(
        220,  
        100, 
        80,  
        80   
    );
}



theLivingLab.entity.Machine.prototype._initTimer = function(step) {
  
    this.application.scenes.selected.timers.create({
      duration: this.DELAY_DURATION,
      repeat: Infinity,
      scope: this,
      onTick: this._changeSprite
    });
}



theLivingLab.entity.Machine.prototype.addPowerup = function() {

    this.powerup = new theLivingLab.entity.Powerup();
    this.application.scenes.selected.stage.addChild(this.powerup);
}



theLivingLab.entity.Machine.prototype.update = function(step) {

    rune.display.Sprite.prototype.update.call(this, step);
    this._updateCollision();
}



theLivingLab.entity.Machine.prototype._updateCollision = function() {

    this.hitTestGroup(
        this.application.scenes.selected._players,
        this._onPlayerCollision,
        this
    );
}



theLivingLab.entity.Machine.prototype._onPlayerCollision = function(self, player) {

    if (this.animations.current.name === this.LOADED_ANIMATION && player.keyboard.justPressed(player._inputs.Q)) {

        this.application.scenes.selected._objects._machineButton.on = false;
        this._popupDesc.dispose();
        this.addPowerup();
        this.animations.goto(this.LOADING_ANIMATION)
    }

}



theLivingLab.entity.Machine.prototype._changeSprite = function(step) {

    if(this.animations.m_frameIndex === this.animations.current.frames.length -1 && this.animations.current.name === this.LOADING_ANIMATION){
      
      this.animations.gotoAndPlay(this.LOADED_ANIMATION); 
      this.application.scenes.selected._objects._machineButton.on = true;
      this.addPopup();
      this.sound.play();
      return;
    }
    if(this.animations.current.name === this.LOADED_ANIMATION){

      this.application.scenes.selected._objects._machineButton.on = true;
      this.animations.goto(this.LOADING_ANIMATION);

      this._popupDesc.dispose();
      return;
    }
    this.animations.gotoNextFrame();
}



theLivingLab.entity.Machine.prototype.dispose = function() {

    this.parent.removeChild(this);
    rune.display.Sprite.prototype.dispose.call(this);
}
