

const Player = function(xPos, yPos, bullets) {

    
    Entity.call(this, xPos, yPos, 50, 100, 'sprite1');
    this.speed = 4;
    this.acceleration = 0.3;
    this.bullets = bullets;
    this.shootSound = null;

    this._init();
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

Player.prototype._init = function() {

    this._initAnimations();
    this._initHitbox();
    this._initVelocity();
    this._initSounds();
}

Player.prototype._initHitbox = function() {

    this.hitbox.set(
        5,  
        60, 
        36,  
        40   
    );
}

Player.prototype._initVelocity = function() {
    
    this.velocity.drag.x = 0.008;
    this.velocity.drag.y = 0.008;
    this.velocity.max.x = this.speed;
    this.velocity.max.y = this.speed;
    
};

Player.prototype._initSounds = function() {

    this.shootSound = this.application.sounds.music.get("shoot-sound");
}

Player.prototype.update = function(step) {

    Entity.prototype.update.call(this, step);

    this._checkHealth();
    this._updateInput(step);
    this._updateAnimation();
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

Player.prototype.shoot = function() {

    this.shootSound.stop();
    this.shootSound.play();

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

Player.prototype._checkHealth = function() {
    
    Entity.prototype._checkHealth.call(this);
    this.health === 0 && this.application.scenes.selected.onGameOver(); 
};



