

const Axe = function() {

    this.damage = 10;


    this.bulletsInMag = 6;
    
    Weapon.call(this, 10, 'zombian');
    
}

Axe.prototype = Object.create(Weapon.prototype);
Axe.prototype.constructor = Axe;


Axe.prototype.init = function() {


}

Axe.prototype.initAnimations = function() {


}

Axe.prototype.onShot = function() {


}
