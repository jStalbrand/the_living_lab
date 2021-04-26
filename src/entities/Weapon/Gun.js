
const Gun = function() {

    this.damage = 50;

    Weapon.call(this, 10, 'zombian');
    
}

Gun.prototype = Object.create(Weapon.prototype);
Gun.prototype.constructor = Gun;

Gun.prototype.init = function() {


}

Gun.prototype.initAnimations = function() {


}

Gun.prototype.shoot = function() {

    


}



