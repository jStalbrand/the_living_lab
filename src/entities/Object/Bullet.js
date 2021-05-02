

const Bullet = function(xPos, yPos, direction) {

    this.direction = direction || 'RIGHT';
    
    if(this.direction === 'TOP' || this.direction === 'DOWN'){
   
        rune.display.DisplayObject.call(this, xPos, yPos, 1, 10, '800080');
    }
    else{

        rune.display.DisplayObject.call(this, xPos, yPos, 10, 1, '800080');
    }

}
 
 Bullet.prototype = Object.create(rune.display.DisplayObject.prototype);
 Bullet.prototype.constructor = Bullet;
 
 Bullet.prototype.init = function() {
    
    

 
 }
 Bullet.prototype.update = function(step) {
    
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