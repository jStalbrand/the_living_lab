

theLivingLab.entity.Player = function(xPos, yPos, sprite) {

    
    
    this._speed = 3;
    
    

    this._acceleration = 0.3;

    this.angularAcceleration = 0.25;
    

    
    this.score = 0;



    this.shootSound = this.application.sounds.music.get("shoot-sound");



    this.damageSound = this.application.sounds.sound.get("playerdamage");


    this.damageSound.volume = 0.3;


    this._direction = 'RIGHT';



    this._inputs = null;



    this.DEAD_ANIMATION = 'dead';



    theLivingLab.entity.Entity.call(this, xPos, yPos, 50, 100, sprite);

    
}


theLivingLab.entity.Player.prototype = Object.create(theLivingLab.entity.Entity.prototype);
theLivingLab.entity.Player.prototype.constructor = theLivingLab.entity.Player;



theLivingLab.entity.Player.prototype.init = function() {

    theLivingLab.entity.Entity.prototype.init.call(this);
    this._initVelocity();
    this._initInputs();
}


theLivingLab.entity.Player.prototype._initAnimations = function() {

    theLivingLab.entity.Entity.prototype._initAnimations.call(this);

    this.animations.add(this.WALK_SIDE_ANIM, [0,1,2,3], 15, true);
    this.animations.add(this.WALK_DOWN_ANIM, [4,5,6,7], 10, true);
    this.animations.add(this.WALK_UP_ANIM, [8,9,10,11], 10, true);

    this.animations.add(this.WALK_SIDE_HURT_ANIM, [12,13,14,15], 15, true);
    this.animations.add(this.WALK_DOWN_HURT_ANIM, [16,17,18,19], 10, true);
    this.animations.add(this.WALK_UP_HURT_ANIM, [20,21,22,23], 10, true);
   
    this.animations.add(this.DEAD_ANIMATION, [24,25,26], 2);
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
    
    this.velocity.drag.x = 0.01;
    this.velocity.drag.y = 0.01;
    this.velocity.max.x = this._speed;
    this.velocity.max.y = this._speed;
};



theLivingLab.entity.Player.prototype._initInputs = function() {

    if (this._inputs == null) {
        this._inputs = new theLivingLab.entity.PlayerInputs();
    }
}



theLivingLab.entity.Player.prototype.update = function(step) {

    theLivingLab.entity.Entity.prototype.update.call(this, step);
    this._updateInput(step);
}



theLivingLab.entity.Player.prototype._updateInput = function(step) {

    if(this._health !== 0) {

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
        if (this.keyboard.justPressed(this._inputs.space)) {
            this.shoot();
        }
    }
}



theLivingLab.entity.Player.prototype.moveLeft = function() {

    this.velocity.x -= this._acceleration;
    this.flippedX = true;
    this._direction = 'LEFT';
}



theLivingLab.entity.Player.prototype.moveRight = function() {

    this.velocity.x += this._acceleration;
    this.flippedX = false;
    this._direction = 'RIGHT';
}



theLivingLab.entity.Player.prototype.moveUp = function() {

    this.velocity.y -= this.angularAcceleration
    this._direction = 'UP';
}



theLivingLab.entity.Player.prototype.moveDown = function() {

    this.velocity.y += this._acceleration;
    this._direction = 'DOWN';
}



theLivingLab.entity.Player.prototype._updateAnimations = function() {

    theLivingLab.entity.Entity.prototype._updateAnimations.call(this);
    
    if(this._health === 0){
        this.animations.gotoAndPlay(this.DEAD_ANIMATION);
    }
    if(this.velocity.x !== 0 && this.velocity.y === 0){
        this.isHurt ? this.animations.gotoAndPlay(this.WALK_SIDE_HURT_ANIM, 0) : this.animations.gotoAndPlay(this.WALK_SIDE_ANIM, 0)
    }
    if(this.previousY < this.y && this.velocity.y !== 0){
        this.isHurt ? this.animations.gotoAndPlay(this.WALK_DOWN_HURT_ANIM, 0) : this.animations.gotoAndPlay(this.WALK_DOWN_ANIM, 0)
    }
    if(this.velocity.y !== 0 && this.previousY > this.y){
        this.isHurt ? this.animations.gotoAndPlay(this.WALK_UP_HURT_ANIM, 0) : this.animations.gotoAndPlay(this.WALK_UP_ANIM, 0);
    }
}



theLivingLab.entity.Player.prototype.shoot = function() {

    this.shootSound.stop();
    this.shootSound.play();
    
    var bullet;
    if(this.animations.current.name === this.WALK_SIDE_ANIM  && this.flippedX || this.animations.current.name === this.WALK_SIDE_HURT_ANIM && this.flippedX){
    
        bullet = new theLivingLab.entity.Bullet(this, this.centerX - 15, this.centerY + 5, this._direction);
    }
    if(this.animations.current.name === this.WALK_SIDE_ANIM && !this.flippedX || this.animations.current.name === this.WALK_SIDE_HURT_ANIM && !this.flippedX){
    
        bullet = new theLivingLab.entity.Bullet(this,this.centerX + 15, this.centerY + 5, this._direction);
    }
    if(this.animations.current.name === this.WALK_UP_ANIM || this.animations.current.name === this.WALK_UP_HURT_ANIM){
        
        bullet = new theLivingLab.entity.Bullet(this, this.centerX + 5, this.centerY - 5, this._direction);
    }
    if(this.animations.current.name === this.WALK_DOWN_ANIM || this.animations.current.name === this.WALK_DOWN_HURT_ANIM){
       
        bullet = new theLivingLab.entity.Bullet(this, this.centerX - 5, this.centerY + 5, this._direction);
    }

    this.application.scenes.selected.stage.addChild(bullet);
}



theLivingLab.entity.Player.prototype._checkHealth = function() {
    
    theLivingLab.entity.Entity.prototype._checkHealth.call(this);
    if(this._health === 0){
        this.hitbox.dispose();
    }
    if(this._health === 0 && this.animations.m_frameIndex === 2){

        this.application.scenes.selected.onGameOver()
    }
};



theLivingLab.entity.Player.prototype.dispose = function() {

    this._inputs = null;
    this.shootSound = null;
    this.damageSound = null;
    theLivingLab.entity.Entity.prototype.dispose.call(this);
}



