
theLivingLab.ui.MenuButtons = function(buttons) {


    this._marker = null;


    this._buttons = buttons || null;


    this._selectedIndex = 1;


    this._prevIndex = 1;


    rune.display.DisplayGroup.call(this, this.application.scenes.selected.stage);


}


theLivingLab.ui.MenuButtons.prototype = Object.create(rune.display.DisplayGroup.prototype);
theLivingLab.ui.MenuButtons.prototype.constructor = theLivingLab.ui.MenuButtons;



theLivingLab.ui.MenuButtons.prototype.init = function(){

    rune.display.DisplayGroup.prototype.init.call(this);
    this._initChildren();
    this._initMarker();
}



theLivingLab.ui.MenuButtons.prototype._initChildren = function(){

    for (var i = 0; i < this._buttons.length; i++) {
        this.addChild(this._buttons[i])
    }
}



theLivingLab.ui.MenuButtons.prototype._initMarker = function(){
    
    this._marker = new theLivingLab.ui.MenuButton('pil', 450, 250, 210, 90)
    this._marker.flippedX = true;
    this.addChild(this._marker);
}



theLivingLab.ui.MenuButtons.prototype.update = function(step){

    rune.display.DisplayGroup.prototype.update.call(this, step);
    this._updateInputs();
    this._updateMarker();
}



theLivingLab.ui.MenuButtons.prototype._updateInputs = function() {
   
    this.keyboard.justPressed('D') && console.log(this._selectedIndex)
    if(this.keyboard.justPressed('S') && this._selectedIndex < this.numChildren - 1) {
        
        this._prevIndex = this._selectedIndex
        this._selectedIndex++;
    }

    if(this.keyboard.justPressed('W') && this._selectedIndex > 1) {
        
        this._prevIndex = this._selectedIndex
        this._selectedIndex--;
    } 
    this.keyboard.justPressed('ENTER') && this.getChildAt(this._selectedIndex - 1).onClick();
};



theLivingLab.ui.MenuButtons.prototype._updateMarker = function() {

    if(this._selectedIndex === 1) {
        this._marker.y = 250;
    }
    if(this._selectedIndex === 2) {
        this._marker.y = 350;
    }
    if(this._selectedIndex === 3) {
        this._marker.y = 450;
    }
};
