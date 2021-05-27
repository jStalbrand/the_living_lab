
/**
 *  ...
 *
 *  @version    1.0
 *  @license    Creative Commons (BY-NC-SA)
 *  @since      Apr 18, 2021
 *  @author     Jacob Stålbrand <js224rr@student.lnu.se>    
 */

theLivingLab.entity.Zombie = function(xPos, yPos, target, texture) {


    this.target = target || null;
    
    
    this.hurtSound = this.application.sounds.sound.get('zombie');

    
    this.hurtSound.volume = 0.1;
    
    
    this.ATTACK_DISTANCE = 250;
    

    this.DEAD_ANIM = 'dead';
    

    theLivingLab.entity.Entity.call(this, xPos, yPos, 50, 100, texture);


}


theLivingLab.entity.Zombie.prototype = Object.create(theLivingLab.entity.Entity.prototype);
theLivingLab.entity.Zombie.prototype.constructor = theLivingLab.entity.Zombie;


theLivingLab.entity.Zombie.prototype.init = function() {

    theLivingLab.entity.Entity.prototype.init.call(this);
    this._initStates();
}


theLivingLab.entity.Zombie.prototype._initAnimations = function() {
    
    theLivingLab.entity.Entity.prototype._initAnimations.call(this);
    this.animations.add(this.WALK_DOWN_ANIM, [0,1,2,3], 10, true);
    this.animations.add(this.WALK_DOWN_HURT_ANIM, [4,5,6,7], 10, true);
    this.animations.add(this.DEAD_ANIM, [8,9,10], 3);
} 



theLivingLab.entity.Zombie.prototype._initStates = function() {
    
    this.states.load([new theLivingLab.state.RandomMovement(), new theLivingLab.state.AvoidObstacles(), new theLivingLab.state.Attack()])
}



theLivingLab.entity.Zombie.prototype.update = function(step) {

    theLivingLab.entity.Entity.prototype.update.call(this, step);
    this._updateStates();
}


theLivingLab.entity.Zombie.prototype._updateAnimations = function() {


    if(this.health === 0){
        this.animations.gotoAndPlay(this.DEAD_ANIM, 0)
    }
    else if(this.health !== 0 && this.isHurt){
        this.animations.gotoAndPlay(this.WALK_DOWN_HURT_ANIM, 0, true)   
    }
    else{
        this.animations.gotoAndPlay(this.WALK_DOWN_ANIM, 0, true)
    }
}



theLivingLab.entity.Zombie.prototype._updateStates = function() {

    var targetDistance = theLivingLab.geom.Points.prototype.getDistance(new rune.geom.Point(this.x, this.y), this.target)
    if(this.states !== null){

        if(this.states.selected.name === 'RandomMovement' && targetDistance < this.attackDistance){
            this.states.select('Attack')
        }
         
        if(this.states.selected.name === 'Attack' && targetDistance > this.attackDistance){
            this.states.select('RandomMovement')
        }

    }
}



theLivingLab.entity.Zombie.prototype._checkHealth = function() {

    theLivingLab.entity.Entity.prototype._checkHealth.call(this);
    if(this._health === 0 && this.animations.m_frameIndex === 2){
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.dispose();
    }
}



theLivingLab.entity.Zombie.prototype.dispose = function() {

    theLivingLab.entity.Entity.prototype.dispose.call(this);
}

















