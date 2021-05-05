
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
 cop.scene.GameOver = function() {

    
    //current GameOver score
    this._score = null;

    this.retryButton = null;

    this.menuButton = null;

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
    this.mouse.enable = true;
    this.application.sounds.music.volume = 0;
    this.application.sounds.master.volume = 1;
    this.initBackground();
    this.initButtons();
};

cop.scene.GameOver.prototype.initButtons = function() {
    
    this.retryButton = new Button('playagain', 450, 450, 394, 76, this.application.startSinglePlayer)
    this.menuButton = new Button('backtomenu', 450, 550, 394, 76, this.application.gotoMenu)
    
    this.stage.addChild(this.retryButton);
    this.stage.addChild(this.menuButton);
    
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



