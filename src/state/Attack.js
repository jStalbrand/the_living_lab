


theLivingLab.state.Attack = function() {



    rune.state.State.call(this, 'Attack');

}



theLivingLab.state.Attack.prototype = Object.create(rune.state.State.prototype);
theLivingLab.state.Attack.prototype.constructor = theLivingLab.state.Attack;



theLivingLab.state.Attack.prototype.init = function() {

    rune.state.State.prototype.init.call(this);
}



theLivingLab.state.Attack.prototype.onEnter = function() {

    rune.state.State.prototype.onEnter.call(this);
    console.log('enter attack');
}



theLivingLab.state.Attack.prototype.update = function(step) {

    rune.state.State.prototype.update.call(this, step);
    this._updatePosition();
}



theLivingLab.state.Attack.prototype._updatePosition = function() {
    
    var targetAngle = theLivingLab.geom.Points.prototype.getAngle(new rune.geom.Point(this.owner.x, this.owner.y), new rune.geom.Point(this.owner.target.x, this.owner.target.y));
    this.owner.velocity.x = Math.cos(targetAngle);
    this.owner.velocity.y = Math.sin(targetAngle);
    this.owner.x += this.owner.velocity.x;
    this.owner.y += this.owner.velocity.y;
}


theLivingLab.state.Attack.prototype.dispose = function() {

    rune.state.State.prototype.dispose.call(this);
}
