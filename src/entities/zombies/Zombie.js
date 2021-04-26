
/**
 *  ...
 *
 *  @version    1.0
 *  @license    Creative Commons (BY-NC-SA)
 *  @since      Apr 18, 2021
 *  @author     Jacob Stålbrand <js224rr@student.lnu.se>    
 */

const Zombie = function(xPos, yPos, target) {

    Entity.call(this, xPos, yPos, 20, 40, 'z1');
    this.target = target || null;
    this.targetAngle = null;
    this.directionInterval = null;
    //this.velocity = 0.1;
    this._init();

}

Zombie.prototype = Object.create(Entity.prototype);
Zombie.prototype.constructor = Zombie;


Zombie.prototype._init = function() {

    this._initAnimations();
}
Zombie.prototype._initAnimations = function() {

    this.animations.add('walkSide', [0,1,2,3], 10, true);
    this.animations.add('walkDown', [4,5,6,7], 10, true);
    this.animations.add('walkUp', [8,9,10,11], 10, true);
    this.animations.add('standSide', [0], 0, true);
    this.animations.add('standDown', [4], 0, true);
    this.animations.add('standUp', [8], 0, true);
    
}

Zombie.prototype.initHitbox = function(step) {

    Entity.prototype.initHitbox.call(this, step);
    this.hitbox.set(
        0,  
        0, 
        20,  
        40   
    );

}
Zombie.prototype.update = function(step) {

    Entity.prototype.update.call(this, step);
    
    this._updateAnimations(step);
    if(this.target !== null){
        this.followTarget();
        var xVelocity = Math.cos(this.targetAngle);
        var yVelocity = Math.sin(this.targetAngle);
       
       this.x += xVelocity;
       this.y += yVelocity;

    }

    
 //   this.getNewDirection();


}

Zombie.prototype._updateAnimations = function(step) {
    
    

    

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

Zombie.prototype.randomPlusMinus = function() {




}

Zombie.prototype.getNewDirection = function() {

    setTimeout(() => {

        let dX = 1 + Math.random() * 360;
        let dY = 1 + Math.random() * 360;
        this.targetAngle = Math.atan2(dY, dX);

    }, 5000)

}



