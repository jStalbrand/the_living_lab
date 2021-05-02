
/**
 *  ...
 *
 *  @version    1.0
 *  @license    Creative Commons (BY-NC-SA)
 *  @since      Apr 18, 2021
 *  @author     Jacob Stålbrand <js224rr@student.lnu.se>    
 */

const Zombie = function(xPos, yPos, target) {

    Entity.call(this, xPos, yPos, 50, 100, 'z1sprite');
    this.target = target || null;
    this.targetAngle = null;
    this.directionInterval = null;
    this._init();

}

Zombie.prototype = Object.create(Entity.prototype);
Zombie.prototype.constructor = Zombie;


Zombie.prototype._init = function() {

    this._initAnimations();
}
Zombie.prototype._initAnimations = function() {
    //full health
    this.animations.add('walkSide', [0,1,2,3,4], 10, true);
    this.animations.add('walkDown', [5,6,7,8], 10, true);
    this.animations.add('walkUp', [9,10], 10, true);
    this.animations.add('standSide', [0], 0, true);
    this.animations.add('standDown', [4], 0, true);
    this.animations.add('standUp', [9], 0, true);
    //hurt 
    this.animations.add('walkSideHurt', [11,12,13,14], 10, true);
    this.animations.add('walkDownHurt', [4,5,6,7], 10, true);
    this.animations.add('walkUpHurt', [8,9,10,11], 10, true);
    this.animations.add('standSideHurt', [0], 0, true);
    this.animations.add('standDownHurt', [4], 0, true);
    this.animations.add('standUpHurt', [8], 0, true);
    


    
}

Zombie.prototype.initHitbox = function(step) {

    Entity.prototype.initHitbox.call(this, step);
   

}
Zombie.prototype.update = function(step) {

    Entity.prototype.update.call(this, step);
    this.checkIfAlive();
    this._updateAnimations(step);
   /* if(this.target !== null){
        this.followTarget();
        var xVelocity = Math.cos(this.targetAngle);
        var yVelocity = Math.sin(this.targetAngle);
       
       this.x += xVelocity;
       this.y += yVelocity;

    }
    */
    
 //   this.getNewDirection();


}

Zombie.prototype._updateAnimations = function(step) {
    if(this.health === 50){

        if(this.velocity.x !== 0 && this.velocity.y === 0){
            this.animations.gotoAndPlay('walksidehurt', 0)
    
        } 
        else if(this.previousY < this.y && this.velocity.y !== 0){
            this.animations.gotoAndPlay('walkdownhurt', 0)
            
        }
        else if(this.velocity.y !== 0 && this.previousY > this.y){
            this.animations.gotoAndPlay('walkuphurt', 0)
        }
        else if(this.velocity.x === 0 && this.velocity.y === 0){ 
            if(this.direction === 'TOP')
                this.animations.gotoAndPlay('standuphurt', 0)
            if(this.direction === 'DOWN'){
                this.animations.gotoAndPlay('standdownhurt', 0)
                console.log('stand down')
            }
            if(this.direction === 'LEFT' || this.direction === 'RIGHT' )
                this.animations.gotoAndPlay('standsidehurt', 0)
        }
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
Zombie.prototype.checkIfAlive = function() {

    if(this.health === 0){
        this.parent.removeChild(this);
    }
}


















