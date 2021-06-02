


theLivingLab.entity.Obstacles = function(owner) {


    
    this._owner = owner || null;



    rune.display.DisplayGroup.call(this, this.application.scenes.selected.stage);

    
}


theLivingLab.entity.Obstacles.prototype = Object.create(rune.display.DisplayGroup.prototype);
theLivingLab.entity.Obstacles.prototype.constructor = theLivingLab.entity.Obstacles;



theLivingLab.entity.Obstacles.prototype.init = function() {

    rune.display.DisplayGroup.prototype.init.call(this);
    this.addChild(new theLivingLab.entity.Obstacle(1000,450,98,80, 'nyttbord'));
    this.addChild(new theLivingLab.entity.Obstacle(500,250,214,62, 'nyttbord22'));
    this.addChild(new theLivingLab.entity.Obstacle(150,500,213,62, 'nyttbord3'));
}



theLivingLab.entity.Obstacles.prototype.update = function(step) {

    rune.display.DisplayGroup.prototype.update.call(this,step);
    this.updateCollision();
}



theLivingLab.entity.Obstacles.prototype.updateCollision = function() {

    this.hitTestGroup(
        this.application.scenes.selected._players,
        this._onPlayerCollision,
        this
    );

    this.hitTestGroup(
        this.application.scenes.selected._zombies,
        this._onZombieCollision,
        this
    );
}



theLivingLab.entity.Obstacles.prototype._onPlayerCollision = function(player, obstacle) {
    
    player.x = player.previousX;
    player.y = player.previousY;
}



theLivingLab.entity.Obstacles.prototype._onZombieCollision = function(zombie, obstacle) {

    try {
        zombie.states.select('AvoidObstacles');
    } catch (error) {
        console.log(error)
    }
}



theLivingLab.entity.Obstacles.prototype.dispose = function(bullet) {
   
    rune.display.DisplayGroup.prototype.dispose.call(this);
};
