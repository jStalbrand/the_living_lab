

theLivingLab.entity.Player = function(xPos, yPos, sprite) {

    
    theLivingLab.entity.Entity.call(this, xPos, yPos, 50, 100, sprite);
    
    this.speed = 4;
    this.acceleration = 0.3;
    this.shootSound = null;
    this.score = 0;
    this._bullets = null;
    this._inputs = null;
}

theLivingLab.entity.Player.prototype = Object.create(theLivingLab.entity.Entity.prototype);
theLivingLab.entity.Player.prototype.constructor = theLivingLab.entity.Player;

theLivingLab.entity.Player.prototype.init = function() {

    theLivingLab.entity.Entity.prototype.init.call(this);
    this._initHitbox();
    this._initVelocity();
    this._initSounds();
    this._initBullets();
    this._initInputs();
}

theLivingLab.entity.Player.prototype._initBullets = function() {

    this._bullets = new theLivingLab.entity.Bullets(this);
    this.application.scenes.selected.groups.add(this._bullets);
}
theLivingLab.entity.Player.prototype._initInputs = function() {

    this._inputs = new theLivingLab.entity.PlayerInputs();
}
theLivingLab.entity.Player.prototype._initHitbox = function() {

    this.hitbox.set(
        15,  
        60, 
        20,  
        40   
    );
}

theLivingLab.entity.Player.prototype._initVelocity = function() {
    
    this.velocity.drag.x = 0.008;
    this.velocity.drag.y = 0.008;
    this.velocity.max.x = this.speed;
    this.velocity.max.y = this.speed;
    
};

theLivingLab.entity.Player.prototype._initSounds = function() {

    this.shootSound = this.application.sounds.music.get("shoot-sound");
}

theLivingLab.entity.Player.prototype.update = function(step) {

    theLivingLab.entity.Entity.prototype.update.call(this, step);
    this._checkHealth();
    this._updateInput(step);
}

theLivingLab.entity.Player.prototype._updateInput = function(step) {

    this.prevCoords.x = this.velocity.x;
    this.prevCoords.y = this.velocity.y

    if (this.keyboard.pressed(this._inputs.right)) {
        this.moveRight();
    }
    if (this.keyboard.pressed(this._inputs.left)) {
        this.moveLeft();
    }
    if (this.keyboard.pressed(this._inputs.up)) {
        this.moveUp();
    }
    if (this.keyboard.pressed(this._inputs.down)) {
        this.moveDown();
    }
    if (this.keyboard.justPressed(this._inputs.shoot)) {
        this.shoot();
    }
    
}

theLivingLab.entity.Player.prototype.shoot = function() {

    //this.shootSound.stop();
    //this.shootSound.play();

    if(this.direction === 'LEFT'){
        this._bullets.addChild(new theLivingLab.entity.Bullet(this.centerX - 15, this.centerY + 5, this.direction))
    }
    if(this.direction === 'RIGHT'){
        this._bullets.addChild(new theLivingLab.entity.Bullet(this.centerX + 15, this.centerY + 5, this.direction))
    }
    if(this.direction === 'TOP'){
        this._bullets.addChild(new theLivingLab.entity.Bullet(this.centerX + 5, this.centerY-5, this.direction))
    }
    if(this.direction === 'DOWN'){
        this._bullets.addChild(new theLivingLab.entity.Bullet(this.centerX - 5, this.centerY + 5, this.direction))
    }


}

theLivingLab.entity.Player.prototype._checkHealth = function() {
    
    theLivingLab.entity.Entity.prototype._checkHealth.call(this);
    if(this.health === 0){

        this.application.scenes.selected.onGameOver(); 
    } 
};
theLivingLab.entity.Zombie.prototype.dispose = function() {

    theLivingLab.entity.Entity.prototype.dispose.call(this);
}



