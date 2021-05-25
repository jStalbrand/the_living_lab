/**
 * 
 * @constructor
 * 
 * @class
 * @classdesc
 * 
 * Generic entity class.
 */
theLivingLab.entity.Entity = function(xPos, yPos, width, height, texture) {

    this.health = 100;
    this.healthBar = null;
    this.direction = 'RIGHT';
    this.prevCoords = {x: 0, y: 0};
    this.isHurt = false;
    rune.physics.Body.call(this, xPos, yPos, width, height, '', texture);

}

theLivingLab.entity.Entity.prototype = Object.create(rune.physics.Body.prototype);
theLivingLab.entity.Entity.prototype.constructor = theLivingLab.entity.Entity;

theLivingLab.entity.Entity.prototype.init = function() {
    this._initHitbox();
    this._initAnimations();
    this._initHealthBar();
    rune.physics.Body.prototype.init.call(this);
}

theLivingLab.entity.Entity.prototype._initHealthBar = function() {
    
    this.healthBar = new theLivingLab.entity.HealthBar(this);
    this.application.scenes.selected.stage.addChild(this.healthBar);
}

theLivingLab.entity.Entity.prototype._initAnimations = function() {

     //full health
     this.animations.add('walkSide', [0,1,2,3,4], 10, true);
     this.animations.add('walkDown', [5,6,7,8], 10, true);
     this.animations.add('walkUp', [9,10], 10, true);
     this.animations.add('standSide', [0], 0, true);
     this.animations.add('standDown', [4], 0, true);
     this.animations.add('standUp', [9], 0, true);
     //hurt 
     this.animations.add('walkSideHurt', [11,12,13,14], 10, true);
     this.animations.add('walkDownHurt', [17,18, 19,20], 10, true);
     this.animations.add('walkUpHurt', [19,20], 10, true);
     this.animations.add('standSideHurt', [0], 0, true);
     this.animations.add('standDownHurt', [4], 0, true);
     this.animations.add('standUpHurt', [8], 0, true);
}

theLivingLab.entity.Entity.prototype._initHitbox = function() {
    
    this.hitbox.set(
        15,  
        10, 
        20,  
        80   
    );
}

theLivingLab.entity.Entity.prototype.update = function(step) {

    rune.physics.Body.prototype.update.call(this, step);
    this._updateBounderies();
    this._updateHealthBar();
    this._updateAnimations();
}

theLivingLab.entity.Entity.prototype.moveLeft = function() {

    this.velocity.x -= this.acceleration;
    this.direction = 'LEFT';
    this.flippedX = true;
}

theLivingLab.entity.Entity.prototype.moveRight = function() {

    this.velocity.x += this.acceleration;
    this.direction = 'RIGHT';
    this.flippedX = false;
}

theLivingLab.entity.Entity.prototype.moveUp = function() {

    this.velocity.y -= this.acceleration;
    this.direction = 'TOP';
}

theLivingLab.entity.Entity.prototype.moveDown = function() {

    this.velocity.y += this.acceleration;
    this.direction = 'DOWN';
}

theLivingLab.entity.Entity.prototype._updateHealthBar = function() {

}    
/**
 * Make sure the theLivingLab.entity.entity is inside bounderies.
 */
theLivingLab.entity.Entity.prototype._updateBounderies = function() {

    var camera = this.application.scenes.selected.cameras.getCamera(0);

    if (this.right > camera.width) this.left = camera.width - this.width;
    
    else if(this.left < 0) this.left = 0;

    if (this.bottom > camera.height) this.bottom = camera.height;
    
    else if (this.top < 45) this.top = 45;
}


/**
 * update theLivingLab.entity.entity animation
 */
theLivingLab.entity.Entity.prototype._updateAnimations = function() {


    if(this.velocity.x === 0 && this.velocity.y === 0){
        
        if(this.direction === 'TOP')
            this.animations.gotoAndPlay('standup', 0)
        if(this.direction === 'DOWN')
            this.animations.gotoAndPlay('standdown', 0)
        if(this.direction === 'LEFT' || this.direction === 'RIGHT' )
            this.animations.gotoAndPlay('standside', 0)
    }
    
    if(this.velocity.x !== 0 && this.velocity.y === 0){
        this.isHurt ? this.animations.gotoAndPlay('walksidehurt', 0) : this.animations.gotoAndPlay('walkside', 0)
    }
    if(this.previousY < this.y && this.velocity.y !== 0){
        this.isHurt ? this.animations.gotoAndPlay('walkdownhurt', 0) : this.animations.gotoAndPlay('walkdown', 0)
    }
    if(this.velocity.y !== 0 && this.previousY > this.y){
        this.isHurt ? this.animations.gotoAndPlay('walkuphurt', 0) : this.animations.gotoAndPlay('walkup', 0);
    }
   
}

theLivingLab.entity.Entity.prototype._checkHealth = function() {
    if(this.health === 50){
        this.isHurt = true;
        this.healthBar.health = 50;
    }
    
    else if(this.health === 0){
        this.healthBar.dispose();
    }
}

theLivingLab.entity.Entity.prototype.dispose = function() {
   
    this.healthBar.dispose();
    //this.parent.removeChild(this);
    rune.physics.Body.prototype.dispose.call(this);
}

