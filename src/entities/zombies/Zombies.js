
const Zombies = function(game) {

    this._game = game;
    this._interval = null;
    this.startX = [-10, -40, 1250, 1350, 200, 500, 800];
    this.zombieTextures = ['z1sprite', 'z2sprite'];
    rune.display.DisplayGroup.call(this, this._game.stage);
}
Zombies.prototype = Object.create(rune.display.DisplayGroup.prototype);
Zombies.prototype.constructor = Zombies;

Zombies.prototype.init = function() {

    rune.display.DisplayGroup.prototype.init.call(this);
    this._initInterval();
    this._add();
}

Zombies.prototype._initInterval = function() {

    var self = this;
    this._interval = setInterval(function(){ self._add() }, 2500)
}


Zombies.prototype._add = function() {

    var y = 0;
    this.shuffle(this.startX);
    this.shuffle(this.zombieTextures);
    var x = this.startX[0];
    if(x < 0 || x > 1000){
        y = 40 + Math.random() * 300;
    }
    else{
        y = 700;
    }
    var zombie1 = new Zombie(this.startX[0], y, this._game._players.m_children[0], this.zombieTextures[0]);
    this.addChild(zombie1);
}

Zombies.prototype.update = function() {

}
Zombies.prototype.shuffle = function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


