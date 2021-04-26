
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

    var zombie1 = new Zombie(300, 10, this._game._players.m_children[0]);
    this.addChild(zombie1);
    for (let i = 0; i < 4; i++) {
        let a = new Zombie(1 + Math.random() * 300, 1 + Math.random() * 300)
        
        this.addChild(a);
    }
    


}

Zombies.prototype.update = function() {

}

Zombies.prototype.add = function() {

    

}
