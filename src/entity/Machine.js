
theLivingLab.entity.Machine = function() {

    
    this._timer = null;


    this.hasLoadedSound = null;


    this._popupDesc = null;

    this.powerup = null;


    rune.display.Sprite.call(this, 880, -43, 424, 240, '', 'exmachine');
    

}

theLivingLab.entity.Machine.prototype = Object.create(rune.display.Sprite.prototype);
theLivingLab.entity.Machine.prototype.constructor = theLivingLab.entity.Machine;


Object.defineProperty(theLivingLab.entity.Machine.prototype, "hasLoaded", {


  get : function() {

      return this.animations.current.name === 'finishedloaded';
  }

});



theLivingLab.entity.Machine.prototype.init = function() {
   
  rune.display.Sprite.prototype.init.call(this);
  this._initSound();
  this._initAnimations();
  this._initTimer();
  this._initHitbox();
  //this._initPopup();
}

theLivingLab.entity.Machine.prototype._initSound = function() {

  this.hasLoadedSound = this.application.sounds.music.get('machinesound');
  this.hasLoadedSound.volume = 0.5
}


theLivingLab.entity.Machine.prototype._initPopup = function() {

  this._popupDesc = new theLivingLab.entity.Popup(600, 50);
  this.application.scenes.selected.stage.addChild(this._popupDesc);
}


theLivingLab.entity.Machine.prototype._initAnimations = function() {

  this.animations.add('loading', [0,1,2,3,4], 0);
  this.animations.add('finishedLoading', [5,6], 5, true);
}

theLivingLab.entity.Machine.prototype._initHitbox = function() {

  this.hitbox.set(
      50,  
      100, 
      100,  
      80   
  );
}


theLivingLab.entity.Machine.prototype._initTimer = function(step) {
    
  this._timer = new rune.timer.Timer(
    new rune.timer.TimerOptions({
      duration: 5000, 
      repeat: Infinity, 
      scope: this,
      onTick: this._changeSprite
  }))

  this.application.scenes.selected.timers.add(this._timer, true)
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

  
  if (this.animations.current.name === 'finishedloading' && player.keyboard.justPressed('Q')) {

      this.addPowerup();
      this.animations.goto('loading')
  }
}


theLivingLab.entity.Machine.prototype._changeSprite = function(step) {
  
    if(this.animations.m_frameIndex === this.animations.current.frames.length -1 && this.animations.current.name === 'loading'){
      
      this._used = false;
      this.animations.gotoAndPlay('finishedLoading'); 
      this.hasLoadedSound.play();
      return;
    }
    if(this.animations.current.name === 'finishedloading'){
      this.animations.goto('loading');
      return;
    }
    this.animations.gotoNextFrame();

}


theLivingLab.entity.Machine.prototype.dispose = function() {

  this.parent.removeChild(this);
  rune.display.Sprite.prototype.dispose.call(this);
}

