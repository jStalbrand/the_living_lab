
const Button = function(texture, xPos, yPos, width, height, onClick) {

    this.onClick = onClick || function(){};
    rune.display.Sprite.call(this, xPos, yPos, width, height, '', texture);

}

Button.prototype = Object.create(rune.display.Sprite.prototype);
Button.prototype.constructor = Button;

Button.prototype.init = function(){

    rune.display.Sprite.prototype.init.call(this);
    
}

Button.prototype.update = function(){
    
    rune.display.Sprite.prototype.update.call(this);
    if(this.mouse.x >= this.left && this.mouse.x <= this.right && this.mouse.y >= this.top && this.mouse.y <= this.bottom){
        if(this.mouse.justPressed()){
           this.onClick();
        }
    }
   
}

