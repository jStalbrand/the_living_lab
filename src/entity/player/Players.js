


theLivingLab.entity.Players = function() {


    this.score = 0;


    this.collideCoords = {prevX: null, prevY: null, x: null, y: null};


    this.SCORE_DOWN_DELAY = 1000;


    rune.display.DisplayGroup.call(this, this.application.scenes.selected.stage);


}


theLivingLab.entity.Players.prototype = Object.create(rune.display.DisplayGroup.prototype);
theLivingLab.entity.Players.prototype.constructor = theLivingLab.entity.Players;



theLivingLab.entity.Players.prototype.init = function() {

    rune.display.DisplayGroup.prototype.init.call(this);
    this._initPlayers();
}   



theLivingLab.entity.Players.prototype._initPlayers = function() {

    var boyPlayer = new theLivingLab.entity.BoyPlayer(250, 220);
    this.addChild(boyPlayer);
    
    if(this.application.scenes.selected.nrOfPlayers === 2){

        var girlPlayer = new theLivingLab.entity.GirlPlayer(850, 220);
        this.addChild(girlPlayer);
    }
}



theLivingLab.entity.Players.prototype.update = function(step) {

    rune.display.DisplayGroup.prototype.update.call(this, step);
    this._updateCollision();
    this._updateScore();
}



theLivingLab.entity.Players.prototype._updateCollision = function() {
    
    this.hitTestGroup(
        this.application.scenes.selected._zombies,
        this._onZombieCollision,
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



theLivingLab.entity.Players.prototype._onZombieCollision = function(zombie, player) {

    player.damageSound.play();
    player.health -= 2.5;
    if(player.health < 10){

        if(zombie.velocity.x > 0){
            zombie.velocity.x -= 2;
        }
        else if(zombie.velocity.x < 0){
            zombie.velocity.x += 2;
        }
    }
    else{

        player.velocity.x !== 0 && player.velocity.x--;
        player.velocity.y !== 0 && player.velocity.y--;
    }
}



theLivingLab.entity.Players.prototype.dispose = function() {

    rune.display.DisplayGroup.prototype.update.call(this);
}
