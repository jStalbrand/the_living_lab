
const HealthBar = function() {


     rune.display.Sprite.call(this, 50, 150, 25, 15, '00FF00', 'fulltliv');

}
 
 HealthBar.prototype = Object.create(rune.display.Sprite.prototype);
 HealthBar.prototype.constructor = HealthBar;
 
 HealthBar.prototype.init = function() {
    
    rune.display.Sprite.prototype.init.call(this);
    console.log('health bar init');
    
 }
 
 
 