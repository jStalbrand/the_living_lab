
theLivingLab.entity.Powerup = function() {

    var x =  theLivingLab.util.Int.prototype.getRandomFromInterval(0, 1000);
    var y =  theLivingLab.util.Int.prototype.getRandomFromInterval(50, 600);
    
    this.counter = 0;
    rune.display.Sprite.call(this, x, y, 22, 32, '', 'soda');
    

}

theLivingLab.entity.Powerup.prototype = Object.create(rune.display.Sprite.prototype);
theLivingLab.entity.Powerup.prototype.constructor = theLivingLab.entity.Powerup;


theLivingLab.entity.Powerup.prototype.init = function() {
   
  rune.display.Sprite.prototype.init.call(this);
  var self = this;
  this.flicker(2500, 500, self.checkTime, self)
 
}


theLivingLab.entity.Powerup.prototype.checkTime = function() {
    
    //console.log('this in checktime: (parent) ', this.parent);
    //this.dispose();
}


theLivingLab.entity.Powerup.prototype._initHitbox = function() {

  this.hitbox.set(
      50,  
      100, 
      100,  
      80   
  );
}


theLivingLab.entity.Powerup.prototype.update = function(step) {

  rune.display.Sprite.prototype.update.call(this, step);
  this._updateCollision();
}


theLivingLab.entity.Powerup.prototype._updateCollision = function(step) {

  this.hitTestGroup(
      this.application.scenes.selected._players,
      this._onPlayerCollision,
      this
  );

}


theLivingLab.entity.Powerup.prototype._onPlayerCollision = function(self, player) {

      player.score += 50;
      console.log('colliding');
      this.dispose();
}

theLivingLab.entity.Powerup.prototype.dispose = function() {

    console.log('disposed')
    this.hitbox = null;
    this.parent.removeChild(this);
    rune.display.Sprite.prototype.dispose.call(this);
}

