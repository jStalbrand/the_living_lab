

theLivingLab.entity.Zombies = function() {


    this._interval = null;


    this.startX = [-50, -60, 1300, 1350, 200, 500, 800];


    this.zombieTextures = ['z1sprite', 'z2sprite'];


    this.MAX_NUMBER = 5;

    rune.display.DisplayGroup.call(this, this.application.scenes.selected.stage);


}


theLivingLab.entity.Zombies.prototype = Object.create(rune.display.DisplayGroup.prototype);
theLivingLab.entity.Zombies.prototype.constructor = theLivingLab.entity.Zombies;



theLivingLab.entity.Zombies.prototype.init = function() {

    rune.display.DisplayGroup.prototype.init.call(this);
    this._initInterval();
    this._add();
}



theLivingLab.entity.Zombies.prototype._initInterval = function() {

    var self = this;
    this._interval = setInterval(function(){ self._add() }, 2500)
}



theLivingLab.entity.Zombies.prototype._add = function() {

    var y = 0;
    this.shuffle(this.startX);
    this.shuffle(this.zombieTextures);
    var x = this.startX[0];
    if(x < 0 || x > 1000){
        y = 40 + Math.random() * 300;
    }
    else{
        y = 800;
    }
    if(this.numChildren < this.MAX_NUMBER){
        var zombie1 = new theLivingLab.entity.Zombie(this.startX[0], y, this.application.scenes.selected._players.m_children[0], this.zombieTextures[0]);
        this.addChild(zombie1);
    }
}



theLivingLab.entity.Zombies.prototype.update = function() {

}


theLivingLab.entity.Zombies.prototype.shuffle = function(array) {
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



  theLivingLab.entity.Zombies.prototype.dispose = function() {

    this_interval = null;
    rune.display.DisplayGroup.prototype.dispose.call(this);
}


