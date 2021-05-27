




theLivingLab.state.AvoidObstacles = function() {



    rune.state.State.call(this, 'AvoidObstacles');


    this._targets = [];


}



theLivingLab.state.AvoidObstacles.prototype = Object.create(rune.state.State.prototype);
theLivingLab.state.AvoidObstacles.prototype.constructor = theLivingLab.state.AvoidObstacles;



theLivingLab.state.AvoidObstacles.prototype.init = function() {

    rune.state.State.prototype.init.call(this);
    this._initTargets();
}



theLivingLab.state.AvoidObstacles.prototype._initTargets = function() {

    var self = this;
    this.owner.application.scenes.selected._obstacles.getChildren().forEach( function (obstacle) {
    
        self._targets.push({x: obstacle.topLeft.x - 70, y: obstacle.topLeft.y - 100 });
        self._targets.push({x: obstacle.topRight.x + 70, y: obstacle.topLeft.y - 100 });
        self._targets.push({x: obstacle.bottomRight.x + 70, y: obstacle.bottomRight.y + 100 });
        self._targets.push({x: obstacle.bottomLeft.x - 70, y: obstacle.bottomLeft.y + 100 });
    })
    this._targets.push({x: this.owner.x, y: this.owner.y});
}



theLivingLab.state.AvoidObstacles.prototype.onEnter = function() {

    rune.state.State.prototype.onEnter.call(this);
    console.log('enter avoid');
}



theLivingLab.state.AvoidObstacles.prototype.update = function(step) {

    rune.state.State.prototype.update.call(this, step);
    this._updatePosition();
}



theLivingLab.state.AvoidObstacles.prototype._updatePosition = function() {

    if(this._isFinnished()){
        this.owner.states.select('RandomMovement')
    }
    else{

        var target = theLivingLab.geom.Points.prototype.getClosestNeighbour(new rune.geom.Point(this.owner.x, this.owner.y), this._targets);
        var targetAngle = theLivingLab.geom.Points.prototype.getAngle(new rune.geom.Point(this.owner.x, this.owner.y), new rune.geom.Point(target.x, target.y));
        this.owner.velocity.x = Math.cos(targetAngle);
        this.owner.velocity.y = Math.sin(targetAngle);
        this.owner.x += this.owner.velocity.x;
        this.owner.y += this.owner.velocity.y;
    }

}



theLivingLab.state.AvoidObstacles.prototype._isFinnished = function() {
    
    var closestTarget = theLivingLab.geom.Points.prototype.getClosestNeighbour(new rune.geom.Point(this.owner.x, this.owner.y), this._targets);
    var differenceX = Math.abs(this.owner.x - closestTarget.x);
    var differenceY = Math.abs(this.owner.y - closestTarget.y);
    if(differenceX < 5 && differenceY < 5){
        return true;
    }
   return false;
}



theLivingLab.state.AvoidObstacles.prototype.dispose = function() {

    rune.state.State.prototype.dispose.call(this);
}
