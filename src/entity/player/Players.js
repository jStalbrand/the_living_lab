


theLivingLab.entity.Players = function() {

    this.score = 0;
    this.collideCoords = {prevX: null, prevY: null, x: null, y: null};
    rune.display.DisplayGroup.call(this, this.application.scenes.selected.stage);
}

theLivingLab.entity.Players.prototype = Object.create(rune.display.DisplayGroup.prototype);
theLivingLab.entity.Players.prototype.constructor = theLivingLab.entity.Players;



theLivingLab.entity.Players.prototype.init = function() {

    rune.display.DisplayGroup.prototype.init.call(this);
    this._initPlayers();
}   


theLivingLab.entity.Players.prototype._initPlayers = function() {

    if(this.application.scenes.selected.nrOfPlayers === 2){
        var boyPlayer = new theLivingLab.entity.BoyPlayer(250, 220);
        var girlPlayer = new theLivingLab.entity.GirlPlayer(850, 220);
        this.addChild(boyPlayer);
        this.addChild(girlPlayer);
        return;
    }

    var boyPlayer = new theLivingLab.entity.BoyPlayer(250, 220);
    this.addChild(boyPlayer);
}


theLivingLab.entity.Players.prototype.update = function(step) {

    rune.display.DisplayGroup.prototype.update.call(this, step);
    this.updateCollision();
    this._updateScore();
}


theLivingLab.entity.Players.prototype.updateCollision = function() {

    this.hitTestGroup(
        this.application.scenes.selected._zombies,
        this.onCollision,
        this
    );
    
}

theLivingLab.entity.Players.prototype._updateScore = function() {

    this.score = 0;
    var self = this;
    this.getChildren().forEach( function(player){
        
        self.score += player.score;
    });      
   
}


theLivingLab.entity.Players.prototype.onCollision = function(zombie, player) {

    player.health -= 2.5;
    player.healthBar.health -= 2.5;
    
    player.velocity.x !== 0 && player.velocity.x--;
    player.velocity.y !== 0 && player.velocity.y--;
}

theLivingLab.entity.Players.prototype.dispose = function() {

    rune.display.DisplayGroup.prototype.update.call(this);
}
