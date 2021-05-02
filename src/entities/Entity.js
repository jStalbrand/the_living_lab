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
    rune.physics.Body.call(this, xPos, yPos, width, height, '', texture);

}

Entity.prototype = Object.create(rune.physics.Body.prototype);
Entity.prototype.constructor = Entity;

Entity.prototype.init = function() {
    this.initHitbox();
    this.initHealthBar();
    rune.physics.Body.prototype.init.call(this);
}

Entity.prototype.initHealthBar = function() {

    this.addChild(new HealthBar());
    console.log('entity: ', this);

}


Entity.prototype.update = function(step) {

    rune.physics.Body.prototype.update.call(this, step);
    this.updateBounderies();
    this.updateAnimation();

}
/*
Entity.prototype.initAnimation = function() {

    this.animations.add('walkSide', [0,1,2,3], 10, true);
    this.animations.add('walkDown', [4,5,6,7], 10, true);
    this.animations.add('walkUp', [8,9,10,11], 10, true);
    this.animations.add('standSide', [0], 0, true);
    this.animations.add('standDown', [0], 0, true);
    this.animations.add('standUp', [0], 0, true);
    
}
*/

/**
 * inititalize entity hitbox
 */
Entity.prototype.initHitbox = function() {
    
    this.hitbox.set(
        5,  
        60, 
        40,  
        40   
    );

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
        
        else if (this.top < 35) this.top = 35;
}

/**
 * update entity animation
 */
Entity.prototype.updateAnimation = function() {

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
            console.log('stand down')
        }
        if(this.direction === 'LEFT' || this.direction === 'RIGHT' )
            this.animations.gotoAndPlay('standside', 0)


    }
}
Entity.prototype.isDead = function() {

    if(this.health === 0){
        return true;
    }
    return false;
}


