
const Players = function(game, bullets) {


    this._game = game;
    this.bullets = bullets;
    this.isColliding = false;
    this.collideCoords = {prevX: null, prevY: null, x: null, y: null};
    rune.display.DisplayGroup.call(this, this._game.stage);
    
}

Players.prototype = Object.create(rune.display.DisplayGroup.prototype);
Players.prototype.constructor = Players;

Players.prototype.init = function() {

    rune.display.DisplayGroup.prototype.init.call(this);
    this.initPlayers();
}

Players.prototype.initPlayers = function() {

    var player = new Player(50,120, this.bullets);
    this.addChild(player);
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

    player.health = 0;
    this.isColliding = true;
    this.collideCoords.x = player.x;
    this.collideCoords.y = player.y;
    
    
    player.velocity.x = 0;
    player.velocity.y = 0;
    
    player.x = player.previousX;
    player.y = player.previousY;

    this.collideCoords.prevX = player.x;
    this.collideCoords.prevY = player.y;

}

Players.prototype.add = function() {

    

}