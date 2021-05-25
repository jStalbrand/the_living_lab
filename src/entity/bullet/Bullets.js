


theLivingLab.entity.Bullets = function(owner) {


    this._owner = owner || null;
    rune.display.DisplayGroup.call(this, this.application.scenes.selected.stage);
}

theLivingLab.entity.Bullets.prototype = Object.create(rune.display.DisplayGroup.prototype);
theLivingLab.entity.Bullets.prototype.constructor = theLivingLab.entity.Bullets;

theLivingLab.entity.Bullets.prototype.init = function() {

    rune.display.DisplayGroup.prototype.init.call(this);
    
}

theLivingLab.entity.Bullets.prototype.update = function(step) {

    rune.display.DisplayGroup.prototype.update.call(this,step);
    this._updateCollision();
    //this._updateBounderies();
}

theLivingLab.entity.Bullets.prototype._updateCollision = function() {

    this.hitTestGroup(
        this.application.scenes.selected._zombies,
        this.onZombieCollision,
        this
    );
    this.hitTestGroup(
        this.application.scenes.selected._obstacles,
        this.onObstacleCollision,
        this
    );
    
}

theLivingLab.entity.Bullets.prototype._updateBounderies = function() {

    

}

theLivingLab.entity.Bullets.prototype.onObstacleCollision = function(obstacle, bullet) {
    
    bullet.dispose();
}


theLivingLab.entity.Bullets.prototype.onZombieCollision = function(zombie, bullet) {
    
    bullet.dispose();
    zombie.health -= 50;
    zombie.makeHurtSound();
    zombie.healthBar.health = 60;
    if(zombie.health === 0){
        this._owner.score += 10;
        zombie.parent.removeChild(zombie)
        zombie.dispose();
    }
}

theLivingLab.entity.Bullets.prototype.dispose = function(bullet) {
   

    rune.display.DisplayGroup.prototype.dispose.call(this);
};
