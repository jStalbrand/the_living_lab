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



    this._health = 100;


    this.healthBar = null;


    this.prevCoords = {x: 0, y: 0};


    this.isHurt = false;


    this.WALK_SIDE_ANIM = 'walkside';


    this.WALK_DOWN_ANIM = 'walkdown';


    this.WALK_UP_ANIM = 'walkup';


    this.WALK_SIDE_HURT_ANIM = 'walksidehurt';


    this.WALK_DOWN_HURT_ANIM = 'walkdownhurt';


    this.WALK_UP_HURT_ANIM = 'walkuphurt';


    rune.physics.Body.call(this, xPos, yPos, width, height, '', texture);


}


theLivingLab.entity.Entity.prototype = Object.create(rune.physics.Body.prototype);
theLivingLab.entity.Entity.prototype.constructor = theLivingLab.entity.Entity;


Object.defineProperty(theLivingLab.entity.Entity.prototype, "health", {

    get : function() {
    
        return this._health;
    },

    set : function(health) {
        
        console.log('in set(health): ', health)

        this._health = health;
        if(this.healthBar !== null){
            this.healthBar.health = this._health;
        }
    }

});




theLivingLab.entity.Entity.prototype.init = function() {
    
    rune.physics.Body.prototype.init.call(this);
    this._initHitbox();
    this._initAnimations();
    this._initHealthBar();
}



theLivingLab.entity.Entity.prototype._initHitbox = function() {
    
    this.hitbox.set(
        15,  
        10, 
        20,  
        80   
    );
}



theLivingLab.entity.Entity.prototype._initAnimations = function() {


}



theLivingLab.entity.Entity.prototype._initHealthBar = function() {
    
    this.healthBar = new theLivingLab.entity.HealthBar(this);
    this.application.scenes.selected.stage.addChild(this.healthBar);
}



theLivingLab.entity.Entity.prototype.update = function(step) {

    rune.physics.Body.prototype.update.call(this, step);
    this._updateBounderies();
    this._updateHealthBar();
    this._updateAnimations();
    this._checkHealth();
}



theLivingLab.entity.Entity.prototype._updateHealthBar = function() {

}    



theLivingLab.entity.Entity.prototype._updateBounderies = function() {

    var camera = this.application.scenes.selected.cameras.getCamera(0);

    if (this.right > camera.width) this.left = camera.width - this.width;
    
    else if(this.left < 0) this.left = 0;

    if (this.bottom > camera.height) this.bottom = camera.height;
    
    else if (this.top < 45) this.top = 45;
}



theLivingLab.entity.Entity.prototype._updateAnimations = function() {

    if(this.velocity.x === 0 && this.velocity.y === 0){
        this.animations.stop();
    }
    else{
        this.animations.play();
    }
}



theLivingLab.entity.Entity.prototype._checkHealth = function() {
    if(this._health < 100){
        this.isHurt = true;
    }
    
    else if(this._health === 0){
        this.healthBar.dispose();
    }
}



theLivingLab.entity.Entity.prototype.dispose = function() {
   
    this.healthBar.dispose();
    //this.parent.removeChild(this);
    rune.physics.Body.prototype.dispose.call(this);
}

