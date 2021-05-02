
/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 * 
 * GameOver state.
 */
 cop.scene.GameOver = function(opt={nrOfPlayers: 1}) {

    //used to check if the GameOver should be initiated as 1 player or co op
    this.nrOfPlayers = opt.nrOfPlayers;

    this._players = null;

    this._zombies = null;

    this.obstacle = null;

    //current GameOver score
    this._score = null;

    //graphic representation of the score
    this._scoreView = null;
    
    // reference to the background
    this._background = null;

    rune.scene.Scene.call(this);


};


cop.scene.GameOver.prototype = Object.create(rune.scene.Scene.prototype);
cop.scene.GameOver.prototype.constructor = cop.scene.GameOver;

/**
 * @inheritDoc
 */
cop.scene.GameOver.prototype.init = function() {
    
    rune.scene.Scene.prototype.init.call(this);
    this.initBackground();
};

cop.scene.GameOver.prototype.initBackground = function() {
   
    this._background = new Background('gameover');

    this.stage.addChild(this._background);
};

/**
 * @inheritDoc
 */
cop.scene.GameOver.prototype.update = function(step) {
    
    rune.scene.Scene.prototype.update.call(this, step);
};



