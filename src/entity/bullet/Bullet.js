

theLivingLab.entity.Bullet = function(owner, xPos, yPos, direction) {


    this._owner = owner || null;


    this._direction = direction || 'RIGHT';


    var width;


    var height;


    var resource;


    this.BULLET_SPEED = 15;


    if(this._direction === 'UP' || this._direction === 'DOWN'){
        width = 2;
        height = 10;
        resource = 'skottupp';
    }
    else{
        width = 10;
        height = 2;
        resource = 'skott';
    }


    rune.display.Sprite.call(this, xPos, yPos, width, height, '', resource);
    

}
 


 theLivingLab.entity.Bullet.prototype = Object.create(rune.display.Sprite.prototype);
 theLivingLab.entity.Bullet.prototype.constructor = theLivingLab.entity.Bullet;
 


 theLivingLab.entity.Bullet.prototype.init = function() {

    rune.display.Sprite.prototype.init.call(this);
 }
 


 theLivingLab.entity.Bullet.prototype.update = function(step) {
    
    rune.display.Sprite.prototype.update.call(this, step);
    this._updatePosition();
    this._updateCollision();
}



theLivingLab.entity.Bullet.prototype._updatePosition = function() {

    switch (this._direction) {
        case 'RIGHT':
            this.x += this.BULLET_SPEED;
            break;
        case 'LEFT':
            this.x -= this.BULLET_SPEED;
            break;
        case 'UP':
            this.y -= this.BULLET_SPEED;
            break;
        case 'DOWN':
            this.y += this.BULLET_SPEED;
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
    
    this.dispose();
    zombie.health -= 50;
    zombie.hurtSound.play();
    
    if(zombie.health === 0){
        zombie.animations.gotoAndPlay(zombie.DEAD_ANIM)
        this._owner.score += 10;
        zombie.hurtSound.play();
    }
}



theLivingLab.entity.Bullet.prototype.dispose = function() {
    
    this.parent.removeChild(this);
}



