
theLivingLab.ui.MenuButton = function(texture, xPos, yPos, width, height, onClick) {



    this.onClick = onClick || function(){};

    

    rune.display.Sprite.call(this, xPos, yPos, width, height, '', texture);


}


theLivingLab.ui.MenuButton.prototype = Object.create(rune.display.Sprite.prototype);
theLivingLab.ui.MenuButton.prototype.constructor = theLivingLab.ui.MenuButton;



theLivingLab.ui.MenuButton.prototype.init = function(){

    rune.display.Sprite.prototype.init.call(this);
}



theLivingLab.ui.MenuButton.prototype.onClick = function(){
    
    this.onClick();
}

