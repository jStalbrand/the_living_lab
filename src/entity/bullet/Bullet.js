

theLivingLab.entity.Bullet = function(xPos, yPos, direction) {

    this.direction = direction || 'RIGHT';
    
    //change
    if(this.direction === 'TOP' || this.direction === 'DOWN'){
   
        rune.display.DisplayObject.call(this, xPos, yPos, 1, 10, '800080');
    }
    else{

        rune.display.DisplayObject.call(this, xPos, yPos, 10, 1, '800080');
    }

}
 
 theLivingLab.entity.Bullet.prototype = Object.create(rune.display.DisplayObject.prototype);
 theLivingLab.entity.Bullet.prototype.constructor = theLivingLab.entity.Bullet;
 
 theLivingLab.entity.Bullet.prototype.init = function() {
    
    
 }
 
 //FIX
 theLivingLab.entity.Bullet.prototype.update = function(step) {
    
    rune.display.DisplayObject.prototype.update.call(this, step);
    switch (this.direction) {
        case 'RIGHT':
            this.x += 15;
            break;
        case 'LEFT':
            this.x -= 15;
            break;
        case 'TOP':
            this.y -= 15;
            break;
        case 'DOWN':
            this.y += 15;
            break;
        default:
            break;
    }

}

theLivingLab.entity.Bullet.prototype.dispose = function() {
    
    this.parent.removeChild(this);
    rune.display.DisplayObject.prototype.dispose.call(this);
}
