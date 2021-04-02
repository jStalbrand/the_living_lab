
const Zombies = function(game) {


    this._game = game;


    rune.display.DisplayGroup.call(this, this._game.stage);

}
Zombies.prototype = Object.create(rune.display.DisplayGroup.prototype);
Zombies.prototype.constructor = Zombies;


Zombies.prototype.init = function() {

    rune.display.DisplayGroup.prototype.init.call(this);
    this.initZombies();


}

Zombies.prototype.initZombies = function() {

    var zombie = new Zombie();
    
    this.addChild(zombie);
    
}


Zombies.prototype.update = function() {

    
}

Zombies.prototype.add = function() {

    

}