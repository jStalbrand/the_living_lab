

theLivingLab.entity.BoyPlayer = function(xPos, yPos) {

    

    theLivingLab.entity.Player.call(this, xPos, yPos, 'sprite1');
    
 
}



theLivingLab.entity.BoyPlayer.prototype = Object.create(theLivingLab.entity.Player.prototype);
theLivingLab.entity.BoyPlayer.prototype.constructor = theLivingLab.entity.BoyPlayer;



theLivingLab.entity.BoyPlayer.prototype.init = function() {

    theLivingLab.entity.Player.prototype.init.call(this);
}



theLivingLab.entity.BoyPlayer.prototype._initInputs = function() {

    theLivingLab.entity.Player.prototype._initInputs.call(this);
    this._inputs.bind({
        up:    'w',
        right: 'd',
        down:  's',
        left:  'a',
        shoot: 'e'
    });
}

