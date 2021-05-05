/**
 * 
 * @constructor
 * 
 * @class
 * @classdesc
 * 
 * Generic entity class.
 */
const Entity = function(xPos, yPos, width, height, texture) {

    this.health = 100;
    this.texture = texture;
    this.direction = 'RIGHT';
    this.prevCoords = {x: 0, y: 0};
    this.isHurt = false;
    rune.physics.Body.call(this, xPos, yPos, width, height, '', texture);

}

Entity.prototype = Object.create(rune.physics.Body.prototype);
Entity.prototype.constructor = Entity;

Entity.prototype.init = function() {
    this._initHitbox();
    this._initAnimations();
    this._initHealthBar();
    rune.physics.Body.prototype.init.call(this);
}

Entity.prototype._initHealthBar = function() {

    this.addChild(new HealthBar());
}

Entity.prototype._initAnimations = function() {

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

Entity.prototype._initHitbox = function() {
    
    this.hitbox.set(
        5,  
        12, 
        36,  
        80   
    );
}

Entity.prototype.update = function(step) {

    rune.physics.Body.prototype.update.call(this, step);
   // this._checkHealth();
    this.updateBounderies();
    //this._updateAnimation();
}

Entity.prototype.moveLeft = function() {

    this.velocity.x -= this.acceleration;
    this.direction = 'LEFT';
    this.flippedX = true;
}

Entity.prototype.moveRight = function() {

    this.velocity.x += this.acceleration;
    this.direction = 'RIGHT';
    this.flippedX = false;
}

Entity.prototype.moveUp = function() {

    this.velocity.y -= this.acceleration;
    this.direction = 'TOP';
}

Entity.prototype.moveDown = function() {

    this.velocity.y += this.acceleration;
    this.direction = 'DOWN';
}


/**
 * Make sure the entity is inside bounderies.
 */
Entity.prototype.updateBounderies = function() {

    var camera = this.application.scenes.selected.cameras.getCamera(0);
    
        if (this.right > camera.width) this.left = camera.width - this.width;
        
        else if(this.left < 0) this.left = 0;

        if (this.bottom > camera.height) this.bottom = camera.height;
        
        else if (this.top < 40) this.top = 40;
}

/**
 * update entity animation
 */
Entity.prototype._updateAnimation = function() {

    if(this.isHurt){

        this.animations.gotoAndPlay('walkdownhurt', 0)
    
    }
    else{

        if(this.velocity.x !== 0 && this.velocity.y === 0){
            this.animations.gotoAndPlay('walkside', 0)
    
        } 
        else if(this.previousY < this.y && this.velocity.y !== 0){
            this.animations.gotoAndPlay('walkdown', 0)
            
        }
        else if(this.velocity.y !== 0 && this.previousY > this.y){
            this.animations.gotoAndPlay('walkup', 0)
        }
        else if(this.velocity.x === 0 && this.velocity.y === 0){ 
            if(this.direction === 'TOP')
                this.animations.gotoAndPlay('standup', 0)
            if(this.direction === 'DOWN'){
                this.animations.gotoAndPlay('standdown', 0)
            }
            if(this.direction === 'LEFT' || this.direction === 'RIGHT' )
                this.animations.gotoAndPlay('standside', 0)
    
    
        }
    }

}

Entity.prototype._checkHealth = function() {
    
    if(this.health === 50){
        this.isHurt = true;
    }
}


