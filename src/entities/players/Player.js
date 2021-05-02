

const Player = function(xPos, yPos, bullets) {

    
    Entity.call(this, xPos, yPos, 50, 100, 'sprite1');
    this.speed = 4;
    this.acceleration = 0.3;
    this.bullets = bullets;

    this._init();
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

Player.prototype._init = function() {

    this._initAnimation();
    this._initVelocity();
}
Player.prototype._initAnimation = function() {

    this.animations.add('walkSide', [0,1,2,3], 10, true);
    this.animations.add('walkDown', [4,5,6,7], 10, true);
    this.animations.add('walkUp', [8,9,10,11], 10, true);
    this.animations.add('standSide', [0], 0, true);
    this.animations.add('standDown', [4], 0, true);
    this.animations.add('standUp', [8], 0, true);
    
    
}

Player.prototype.update = function(step) {

    Entity.prototype.update.call(this, step);
    this.checkHealth();
    this._updateInput(step);
    this._updateAnimations(step);
}

Player.prototype._updateInput = function(step) {

    this.prevCoords.x = this.velocity.x;
    this.prevCoords.y = this.velocity.y

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

    if (this.keyboard.justPressed('space')) {
        this.shoot();
    }
    
}
Player.prototype._updateAnimations = function(step) {
    
    

    

}
Player.prototype.shoot = function() {

    if(this.direction === 'LEFT'){
        this.bullets.addChild(new Bullet(this.centerX - 15, this.centerY + 5, this.direction))
    }
    if(this.direction === 'RIGHT'){
        this.bullets.addChild(new Bullet(this.centerX + 15, this.centerY + 5, this.direction))
    }
    if(this.direction === 'TOP'){
        this.bullets.addChild(new Bullet(this.centerX + 5, this.centerY-5, this.direction))
    }
    if(this.direction === 'DOWN'){
        this.bullets.addChild(new Bullet(this.centerX - 5, this.centerY + 5, this.direction))
    }

}

Player.prototype._initVelocity = function() {
    
    this.velocity.drag.x = 0.008;
    this.velocity.drag.y = 0.008;
    this.velocity.max.x = this.speed;
    this.velocity.max.y = this.speed;
    
};

Player.prototype.checkHealth = function() {
    
    this.health === 0 && this.application.scenes.selected.onGameOver(); 
    
};



