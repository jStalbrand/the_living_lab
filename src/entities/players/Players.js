
const Players = function(game) {


    this._game = game;


    rune.display.DisplayGroup.call(this, this._game.stage);

}
Players.prototype = Object.create(rune.display.DisplayGroup.prototype);
Players.prototype.constructor = Players;


Players.prototype.init = function() {

    rune.display.DisplayGroup.prototype.init.call(this);
    this.initPlayers();
    console.log('players: ', this)


}

Players.prototype.initPlayers = function() {

    var player1 = new Player(80,120);
    
    
    this.addChild(player1);
    
    
}


Players.prototype.update = function() {

    this.updateCollision();
}

Players.prototype.updateCollision = function() {

    this.hitTestGroup(
        this._game._zombies,
        this.onCollision,
        this
    );
    
}
Players.prototype.onCollision = function(zombie, player) {
    
    player.x = player.previousX;
    player.y = player.previousY;
    
}


Players.prototype.add = function() {

    

}