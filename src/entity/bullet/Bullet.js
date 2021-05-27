

theLivingLab.entity.Bullet = function(owner, xPos, yPos, direction) {


    this._owner = owner || null;


    this.direction = direction || 'RIGHT';
    

    //change!!
    if(this.direction === 'UP' || this.direction === 'DOWN'){
   
        rune.display.Sprite.call(this, xPos, yPos, 2, 10, '', 'skottupp');
    }
    else{

        rune.display.Sprite.call(this, xPos, yPos, 10, 2, '', 'skott');
    }

}
 


 theLivingLab.entity.Bullet.prototype = Object.create(rune.display.Sprite.prototype);
 theLivingLab.entity.Bullet.prototype.constructor = theLivingLab.entity.Bullet;
 


 theLivingLab.entity.Bullet.prototype.init = function() {

    rune.display.Sprite.prototype.init.call(this);
 }
 

 //FIX
 theLivingLab.entity.Bullet.prototype.update = function(step) {
    
    rune.display.Sprite.prototype.update.call(this, step);
    this._updatePosition();
    this._updateCollision();
}



theLivingLab.entity.Bullet.prototype._updatePosition = function() {

    switch (this.direction) {
        case 'RIGHT':
            this.x += 15;
            break;
        case 'LEFT':
            this.x -= 15;
            break;
        case 'UP':
            this.y -= 15;
            break;
        case 'DOWN':
            this.y += 15;
            break;
        default:
            break;
    }
}



theLivingLab.entity.Bullet.prototype._updateCollision = function() {

    this.hitTestGroup(
        this.application.scenes.selected._zombies,
        this._onZombieCollision,
        this
    );
    
    this.hitTestGroup(
        this.application.scenes.selected._obstacles,
        this.dispose,
        this
    );
    
}


theLivingLab.entity.Bullet.prototype._onZombieCollision = function(self, zombie) {
    
    self.dispose();
    zombie.health -= 50;
    zombie.hurtSound.play();
    if(zombie.health === 0){
        zombie.animations.gotoAndPlay(zombie.DEAD_ANIM)
        this._owner.score += 10;
        zombie.hurtSound.play();
        zombie.animations.gotoAndPlay(zombie.DEAD_ANIM, 0)
    }
}



theLivingLab.entity.Bullet.prototype.dispose = function() {
    
    this.parent.removeChild(this);
}



