
const Bullets = function(game) {


    this._game = game;
    rune.display.DisplayGroup.call(this, this._game.stage);
    
}

Bullets.prototype = Object.create(rune.display.DisplayGroup.prototype);
Bullets.prototype.constructor = Bullets;

Bullets.prototype.init = function() {

    rune.display.DisplayGroup.prototype.init.call(this);
}


Bullets.prototype.update = function() {

    this.updateCollision();
}

Bullets.prototype.updateCollision = function() {

    this.hitTestGroup(
        this._game._zombies,
        this.onCollision,
        this
    );
    
}
Bullets.prototype.onCollision = function(zombie, bullet) {
    
    this.removeChild(bullet, true);
    zombie.health -= 50;

}

Bullets.prototype.add = function(xPos, yPos, direction) {

        this.addChild(new Bullet(xPos, yPos, direction))
}
Bullets.prototype.dispose = function(bullet) {
   
   // this.parent.removeChild(bullet);
    //this._player.parent.removeChild(this._player);
    // this._player.dispose();
    // this._player = null;
    //superanrop bör vara sist i denna metod
    rune.display.DisplayGroup.prototype.dispose.call(this);
};