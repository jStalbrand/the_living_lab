

const Player = function(xPos, yPos, type) {

    this.type = type || 'player1';
    
    Entity.call(this, xPos, yPos, 25, 50, 'zombian');
    this.speed = 2;
    this.allowCollisions = false;
    this._init();
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;


Player.prototype._init = function() {

    this._initAnimation();
    this._initVelocity();
    
}
Player.prototype._initAnimation = function() {

    this.animations.add('idle', [0,1,2,3,4], 6, true);
}

Player.prototype.update = function(step) {

    Entity.prototype.update.call(this, step);
    this._updateInput(step);
    this._updateAnimations(step);
}

Player.prototype._updateInput = function(step) {

    if (this.keyboard.pressed('D')) {
        this.moveRight();
    }
    if (this.keyboard.pressed('A')) {
        this.moveLeft();
    }
    if (this.keyboard.pressed('W')) {
        this.moveUp();
    }
    if (this.keyboard.pressed('S')) {
        this.moveDown();
    }
    
}
Player.prototype._updateAnimations = function(step) {

    if(this.velocity.x === 0){
        this.animations.gotoAndPlay('idle', 6)
    }
    else{
        this.animations.gotoAndPlay('idle', 6)

    }
    

}
Player.prototype._initVelocity = function() {
    
    this.velocity.drag.x = 0.008;
    this.velocity.drag.y = 0.008;
    this.velocity.max.x = this.speed;
    this.velocity.max.y = this.speed;
    
};



