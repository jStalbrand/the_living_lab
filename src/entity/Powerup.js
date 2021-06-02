

theLivingLab.entity.Powerup = function() {


    this._timer = null;


    var x =  theLivingLab.util.Int.prototype.getRandomFromInterval(0, 1000);


    var y =  theLivingLab.util.Int.prototype.getRandomFromInterval(50, 600);


    this.hitSound = this.application.sounds.sound.get('points');
    
    
    this._haveCollided = false;
    
    
    this.DELAY_DURATION = 3500;

    
    rune.display.Sprite.call(this, x, y, 80, 75, '', 'soda');
    


}



theLivingLab.entity.Powerup.prototype = Object.create(rune.display.Sprite.prototype);
theLivingLab.entity.Powerup.prototype.constructor = theLivingLab.entity.Powerup;



theLivingLab.entity.Powerup.prototype.init = function() {
   
    rune.display.Sprite.prototype.init.call(this);
    this._initAnimations();
    this._initHitbox();
    this._initTimers();
}



theLivingLab.entity.Powerup.prototype._initAnimations = function() {

  this.animations.add('waiting', [2,0, 3], 3, true);
  this.animations.add('taken', [1]);
}



theLivingLab.entity.Powerup.prototype._initHitbox = function() {

  this.hitbox.set(
      20,  
      30, 
      30,  
      35   
  );
}



theLivingLab.entity.Powerup.prototype._initTimers = function() {

  this.application.scenes.selected.timers.create({
      duration: this.DELAY_DURATION,
      scope: this,
      onComplete: this._startFlickering,
    })
}



theLivingLab.entity.Powerup.prototype._startFlickering = function() {
  var self = this;
  this.flicker(1500, 200, function() {
    this.dispose();
  }, this);
}



theLivingLab.entity.Powerup.prototype.update = function(step) {

    rune.display.Sprite.prototype.update.call(this, step);
    this._updateCollision();
}



theLivingLab.entity.Powerup.prototype._updateCollision = function() {

  this.hitTestGroup(
      this.application.scenes.selected._players,
      this._onPlayerCollision,
      this
  );
}



theLivingLab.entity.Powerup.prototype._onPlayerCollision = function(self, player) {
  
  if(!this._haveCollided){
    this._haveCollided = true;
    this.animations.goto('taken');
    this.hitSound.play();
    this.scaleX = 1.3; 
    this.scaleY = 1.3;
    this.y -= 20; 
    player.score += 50;
    
    this.application.scenes.selected.stage.addChild(new theLivingLab.entity.PointsPopup(player.centerX, player.y- 40))
    
    this._timer = this.application.scenes.selected.timers.create({
        duration: 300,
        scope: this,
        onComplete: this.dispose
    })
  }
}



theLivingLab.entity.Powerup.prototype.dispose = function() {

  this._timer = null
  this.parent.removeChild(this);
}

