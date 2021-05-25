
/**
 *  ...
 *
 *  @version    1.0
 *  @license    Creative Commons (BY-NC-SA)
 *  @since      Apr 18, 2021
 *  @author     Jacob Stålbrand <js224rr@student.lnu.se>    
 */

theLivingLab.entity.Zombie = function(xPos, yPos, target, texture) {

    theLivingLab.entity.Entity.call(this, xPos, yPos, 50, 100, texture);
    this.target = target || null;
    this.targetAngle = null;
    this.attackDistance = 250;
    this.hurtSound = null;
    this.directionInterval = null;
    this.walkSound = null;
    this._init();

}


theLivingLab.entity.Zombie.prototype = Object.create(theLivingLab.entity.Entity.prototype);
theLivingLab.entity.Zombie.prototype.constructor = theLivingLab.entity.Zombie;


theLivingLab.entity.Zombie.prototype._init = function() {

    this._initAnimations();
    this._initHitbox();
    this._initStates();
    this._initSounds();
}


theLivingLab.entity.Zombie.prototype._initStates = function() {
    
    this.states.load([new theLivingLab.state.RandomMovement(), new theLivingLab.state.AvoidObstacles(), new theLivingLab.state.Attack()])
}


theLivingLab.entity.Zombie.prototype._initSounds = function() {

    this.hurtSound = this.application.sounds.music.get('zombie');
    this.hurtSound.volume = 0.5
}


theLivingLab.entity.Zombie.prototype.update = function(step) {

    theLivingLab.entity.Entity.prototype.update.call(this, step);
    this._checkHealth();
    this._updateStates();
}


theLivingLab.entity.Zombie.prototype._updateAnimations = function() {

    this.isHurt ? this.animations.gotoAndPlay('walkdownhurt', 0) : this.animations.gotoAndPlay('walkdown', 0)
}


theLivingLab.entity.Zombie.prototype._updateStates = function() {

    var targetDistance = theLivingLab.geom.Points.prototype.getDistance(new rune.geom.Point(this.x, this.y), this.target)
    if(this.states.selected.name === 'RandomMovement' && targetDistance < this.attackDistance){
        this.states.select('Attack')
    }
     
    if(this.states.selected.name === 'Attack' && targetDistance > this.attackDistance){
        this.states.select('RandomMovement')
    }
}


theLivingLab.entity.Zombie.prototype.makeHurtSound = function() {

    this.hurtSound.play();
}


theLivingLab.entity.Zombie.prototype._checkHealth = function() {

    theLivingLab.entity.Entity.prototype._checkHealth.call(this);
    this.health === 0 && this.parent.removeChild(this);
}


theLivingLab.entity.Zombie.prototype.dispose = function() {

    theLivingLab.entity.Entity.prototype.dispose.call(this);
}

















