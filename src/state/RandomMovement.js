


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
    this.owner.speed = 2;
    console.log('enter random movement')

    this.checkPoint = this._getCheckpoint();
}

theLivingLab.state.RandomMovement.prototype.update = function(step) {

    rune.state.State.prototype.update.call(this, step);
    //console.log('in random')
    this._updatePosition();

}

theLivingLab.state.RandomMovement.prototype._updatePosition = function() {

    //console.log('owner: ', this.owner.center)
    //console.log('checkpoint: ', this.checkPoint)
    
    if(this._isFinished() === true){
        //console.log('is finiehd')
        this.checkPoint = this._getCheckpoint();
       // console.log('new checkpoint: ', this.checkPoint)
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
    return point;
    
}


theLivingLab.state.RandomMovement.prototype._isFinished = function() {
    
    var differenceX = Math.abs(this.owner.x - this.checkPoint.x);
   // console.log('diff x: ', differenceX)

    var differenceY = Math.abs(this.owner.y - this.checkPoint.y);
  //  console.log('diff y: ', differenceY)
    
    if(differenceX < 50 && differenceY < 50){
       // console.log('is finished')
        return true;
    }
   return false;
}


theLivingLab.state.RandomMovement.prototype.dispose = function() {

    console.log('dispose in RandomMovement');
    rune.state.State.prototype.dispose.call(this);
}
