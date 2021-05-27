


theLivingLab.state.RandomMovement = function() {


    this.checkPoint = null;


    this._maxCheckpointDistance = 100;


    rune.state.State.call(this, 'RandomMovement');
    

}


theLivingLab.state.RandomMovement.prototype = Object.create(rune.state.State.prototype);
theLivingLab.state.RandomMovement.prototype.constructor = theLivingLab.state.RandomMovement;



theLivingLab.state.RandomMovement.prototype.init = function() {

    rune.state.State.prototype.init.call(this);
    this.checkPoint = this._getCheckpoint();
}



theLivingLab.state.RandomMovement.prototype.onEnter = function() {

    rune.state.State.prototype.onEnter.call(this);
    console.log('enter random')
    this.checkPoint = this._getCheckpoint();
}



theLivingLab.state.RandomMovement.prototype.update = function(step) {

    rune.state.State.prototype.update.call(this, step);
    this._updatePosition();
}



theLivingLab.state.RandomMovement.prototype._updatePosition = function() {

    if(this._isFinished() === true){
        this.checkPoint = this._getCheckpoint();
    }
    else{

        var targetAngle = theLivingLab.geom.Points.prototype.getAngle(new rune.geom.Point(this.owner.x, this.owner.y), this.checkPoint);
        this.owner.velocity.x = Math.cos(targetAngle);
        this.owner.velocity.y = Math.sin(targetAngle);
        this.owner.x += this.owner.velocity.x;
        this.owner.y += this.owner.velocity.y;
    }

}



theLivingLab.state.RandomMovement.prototype._getCheckpoint = function() {

    var notInGameBounderies = true;
    var point = null;
    while(notInGameBounderies){
        
        var xCoord = this.owner.x + (theLivingLab.util.Int.prototype.getNegativeOrPositive() * theLivingLab.util.Int.prototype.getRandomFromInterval(150,250));
        var yCoord = this.owner.y + (theLivingLab.util.Int.prototype.getNegativeOrPositive() * theLivingLab.util.Int.prototype.getRandomFromInterval(150,250));
        point = new rune.geom.Point(xCoord, yCoord);
        if(this.owner.application.scenes.selected.isInBounderies(point)){
            notInGameBounderies = false;
        }
        
    }
    console.log('point x: ', point.x);
    console.log('point y: ', point.y);
    
    return point;
    
}



theLivingLab.state.RandomMovement.prototype._isFinished = function() {
    
    var differenceX = Math.abs(this.owner.x - this.checkPoint.x);
    var differenceY = Math.abs(this.owner.y - this.checkPoint.y);
    
    if(differenceX < 50 && differenceY < 50){
        return true;
    }
   return false;
}



theLivingLab.state.RandomMovement.prototype.dispose = function() {

    rune.state.State.prototype.dispose.call(this);
}
