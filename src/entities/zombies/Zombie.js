
/**
 *  ...
 *
 *  @version    1.0
 *  @license    Creative Commons (BY-NC-SA)
 *  @since      Apr 18, 2021
 *  @author     Jacob Stålbrand <js224rr@student.lnu.se>    
 */

const Zombie = function(xPos, yPos, target, texture) {

    Entity.call(this, xPos, yPos, 50, 100, texture);
    this.target = target || null;
    this.targetAngle = null;
    this.directionInterval = null;
    this.walkSound = null;
    this._init();

}

Zombie.prototype = Object.create(Entity.prototype);
Zombie.prototype.constructor = Zombie;


Zombie.prototype._init = function() {

    this._initAnimations();
    this._initHitbox();
    this._initSounds();
}
Zombie.prototype._initSounds = function() {

    this.walkSound = this.application.sounds.music.get("zombie");
    this.walkSound.volume = 0.2
}

Zombie.prototype.initHitbox = function(step) {

    Entity.prototype.initHitbox.call(this, step);
}
Zombie.prototype.update = function(step) {

    Entity.prototype.update.call(this, step);
    this._checkHealth();
    this.updateAnimation();
    if(this.target !== null){
        
        this.followTarget();
        this.velocity.x = Math.cos(this.targetAngle);
        this.velocity.y = Math.sin(this.targetAngle);
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
 //   this.getNewDirection();

}

Entity.prototype.updateAnimation = function() {

    if(this.isHurt){

        this.animations.gotoAndPlay('walkdownhurt', 0)
    }
    else{
   
        this.animations.gotoAndPlay('walkdown', 0)
    }
}

Zombie.prototype.followTarget = function() {
    
    let dX = this.target.x - this.x;
    let dY = this.target.y - this.y;
    this.targetAngle = Math.atan2(dY, dX);
}

Zombie.prototype.checkDirection = function() {

    if(this.x < this.previousX){
        this.flippedX = true;
    }
    else{
        this.flippedX = false;
    }
}

Zombie.prototype.getNewDirection = function() {

    setTimeout(() => {

        let dX = 1 + Math.random() * 360;
        let dY = 1 + Math.random() * 360;
        this.targetAngle = Math.atan2(dY, dX);

    }, 5000)

}

Zombie.prototype._checkHealth = function() {

    Entity.prototype._checkHealth.call(this);
    this.health === 0 && this.parent.removeChild(this);
}


















