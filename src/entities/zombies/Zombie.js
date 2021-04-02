

const Zombie = function() {

    
    Entity.call(this, 80, 50, 25, 50, 'zombian');

    this._init();
}

Zombie.prototype = Object.create(Entity.prototype);
Zombie.prototype.constructor = Zombie;


Zombie.prototype._init = function() {

   // this.animations.add('walk', [11,12,13,14,15,16,17,18], 10, true)
   // this.animations.add('idle', [0,1,2,3,4,5,6,7,8,9,10], 6, true)
    
}
Zombie.prototype.update = function(step) {
    Entity.prototype.update.call(this, step);
    this._updateAnimations();
}



Zombie.prototype._updateAnimations = function() {

    this.velocity.x === 0 ? this.animations.gotoAndPlay('idle', 8) : this.animations.gotoAndPlay('walk', 8);
}

Zombie.prototype.attack = function() {


}

