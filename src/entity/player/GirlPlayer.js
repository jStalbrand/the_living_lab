

theLivingLab.entity.GirlPlayer = function(xPos, yPos) {

    
    theLivingLab.entity.Player.call(this, xPos, yPos, 'sprite2');

    
}


theLivingLab.entity.GirlPlayer.prototype = Object.create(theLivingLab.entity.Player.prototype);
theLivingLab.entity.GirlPlayer.prototype.constructor = theLivingLab.entity.GirlPlayer;



theLivingLab.entity.GirlPlayer.prototype._initInputs = function() {

    theLivingLab.entity.Player.prototype._initInputs.call(this);
    this._inputs.bind({
        up:    'up',
        right: 'right',
        down:  'down',
        left:  'left',
        shoot: 'm'
    });
}







