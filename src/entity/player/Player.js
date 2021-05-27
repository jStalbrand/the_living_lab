

theLivingLab.entity.Player = function(xPos, yPos, sprite) {

    
    
    this._speed = 4;
    
    

    this.acceleration = 0.3;
    

    
    this.score = 0;



    this.shootSound = this.application.sounds.music.get("shoot-sound");


    this.damageSound = this.application.sounds.sound.get("playerdamage");
    

    
    this._inputs = null;



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

    this.animations.add(this.WALK_SIDE_ANIM, [0,1,2,3], 10, true);
    this.animations.add(this.WALK_DOWN_ANIM, [4,5,6,7], 10, true);
    this.animations.add(this.WALK_UP_ANIM, [8,9,10,11], 10, true);

    this.animations.add(this.WALK_SIDE_HURT_ANIM, [12,13,14,15], 10, true);
    this.animations.add(this.WALK_DOWN_HURT_ANIM, [16,17,18,19], 10, true);
    this.animations.add(this.WALK_UP_HURT_ANIM, [20,21,22,23], 10, true);
   
    //this.animations.add('dead', [8], 0, true);
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



theLivingLab.entity.Player.prototype.moveLeft = function() {

    this.velocity.x -= this.acceleration;
    this.flippedX = true;
    this.isHurt ? this.animations.gotoAndPlay(this.WALK_SIDE_HURT_ANIM, 0) : this.animations.gotoAndPlay(this.WALK_SIDE_ANIM, 0)
}



theLivingLab.entity.Player.prototype.moveRight = function() {

    this.velocity.x += this.acceleration;
    this.flippedX = false;
    this.isHurt ? this.animations.gotoAndPlay(this.WALK_SIDE_HURT_ANIM, 0) : this.animations.gotoAndPlay(this.WALK_SIDE_ANIM, 0)
}



theLivingLab.entity.Player.prototype.moveUp = function() {

    this.velocity.y -= this.acceleration;
    this.isHurt ? this.animations.gotoAndPlay(this.WALK_UP_HURT_ANIM, 0) : this.animations.gotoAndPlay(this.WALK_UP_ANIM, 0);
}



theLivingLab.entity.Player.prototype.moveDown = function() {

    this.velocity.y += this.acceleration;
    this.isHurt ? this.animations.gotoAndPlay(this.WALK_DOWN_HURT_ANIM, 0) : this.animations.gotoAndPlay(this.WALK_DOWN_ANIM, 0)
}



theLivingLab.entity.Player.prototype.shoot = function() {

    this.shootSound.stop();
    this.shootSound.play();
    var bullet;

    if(this.animations.current.name === this.WALK_SIDE_ANIM  && this.flippedX || this.animations.current.name === this.WALK_SIDE_HURT_ANIM && this.flippedX){
    
        bullet = new theLivingLab.entity.Bullet(this, this.centerX - 15, this.centerY + 5, 'LEFT');
    }
    if(this.animations.current.name === this.WALK_SIDE_ANIM && !this.flippedX || this.animations.current.name === this.WALK_SIDE_HURT_ANIM && !this.flippedX){
    
        var bullet = new theLivingLab.entity.Bullet(this,this.centerX + 15, this.centerY + 5, 'RIGHT');
    }
    if(this.animations.current.name === this.WALK_UP_ANIM || this.animations.current.name === this.WALK_UP_HURT_ANIM){
        
        var bullet = new theLivingLab.entity.Bullet(this, this.centerX + 5, this.centerY - 5, 'UP');
    }
    if(this.animations.current.name === this.WALK_DOWN_ANIM || this.animations.current.name === this.WALK_DOWN_HURT_ANIM && this.flippedX){
        
        var bullet = new theLivingLab.entity.Bullet(this, this.centerX - 5, this.centerY + 5, 'DOWN');
    }

    this.application.scenes.selected.stage.addChild(bullet);
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



