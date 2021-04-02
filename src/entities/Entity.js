
const Entity = function(xPos, yPos, width, height, texture) {

    this.acceleration = 0.3;

    this.health = 100;

    this.damage = null;
    
    rune.physics.Body.call(this, xPos, yPos, width, height, '', texture);
    this.init();

}

Entity.prototype = Object.create(rune.physics.Body.prototype);
Entity.prototype.constructor = Entity;

Entity.prototype.init = function() {

    this.initHitbox();
    rune.physics.Body.prototype.init.call(this);
}
Entity.prototype.update = function(step) {

    rune.physics.Body.prototype.update.call(this, step);
    this.updateBounds()

}

Entity.prototype.initHitbox = function() {
    
    this.hitbox.set(
        0,  // X
        45, // Y
        25,  // W
        5   // H
    );

}


Entity.prototype.moveLeft = function() {

    this.velocity.x -= this.acceleration;
    this.flippedX = true;
}

Entity.prototype.moveRight = function() {

    this.velocity.x += this.acceleration;
    this.flippedX = false;
}

Entity.prototype.moveUp = function() {

    this.velocity.y -= this.acceleration;
}

Entity.prototype.moveDown = function() {

    this.velocity.y += this.acceleration;
}
Entity.prototype.updateBounds = function() {

    var camera = this.application.scenes.selected.cameras.getCamera(0);
    
    // WIDTH
        if (this.right > camera.width) this.left = camera.width - this.width;
        
        else if(this.left < 0) this.left = 0;
        
    // HEIGHT
        if (this.bottom > camera.height) this.bottom = camera.height;
        
        else if (this.top < 0) this.top = 0;

}