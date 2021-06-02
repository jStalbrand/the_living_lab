

theLivingLab.entity.Zombies = function() {



    this._timer = null;



    this.startXPositions = [-50, -60, 1300, 1350, 200, 500, 800];



    this.zombieTextures = ['z1sprite', 'z2sprite'];



    this.MAX_NUMBER = 6;



    this.DELAY_DURATION = 2500;



    rune.display.DisplayGroup.call(this, this.application.scenes.selected.stage);


}



theLivingLab.entity.Zombies.prototype = Object.create(rune.display.DisplayGroup.prototype);
theLivingLab.entity.Zombies.prototype.constructor = theLivingLab.entity.Zombies;



theLivingLab.entity.Zombies.prototype.init = function() {

    rune.display.DisplayGroup.prototype.init.call(this);
    this._initTimer();
}



theLivingLab.entity.Zombies.prototype._initTimer = function() {

    this._timer = this.application.scenes.selected.timers.create({
        duration: this.DELAY_DURATION,
        repeat: Infinity,
        scope: this,
        onTick: this._add
    })
}



theLivingLab.entity.Zombies.prototype._add = function() {

    var y = 0;
    Array.prototype.shuffle(this.startXPositions);
    Array.prototype.shuffle(this.zombieTextures);
    var x = this.startXPositions[0];
    if(x < 0 || x > 1000){
        y = 40 + Math.random() * 300;
    }
    else{
        y = 800;
    }
    if(this.numChildren < this.MAX_NUMBER){
        try {
            var zombie1 = new theLivingLab.entity.Zombie(this.startXPositions[0], y, this.application.scenes.selected._players.m_children[0], this.zombieTextures[0]);
            
        } catch (error) {
            console.log('Error: ', error);
        }
        this.addChild(zombie1);
    }
}



theLivingLab.entity.Zombies.prototype.dispose = function() {

    rune.display.DisplayGroup.prototype.dispose.call(this);
}


