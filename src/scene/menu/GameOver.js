
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
 theLivingLab.scene.GameOver = function(score) {

    

    this.retryButton = null;

    this.menuButton = null;

    this._marker = null;

    this.score = score || 0;
    //graphic representation of the score
    this._scoreView = null;
    
    // reference to the background
    this._background = null;

    this.selectedButtonIndex = 1;


    rune.scene.Scene.call(this);



};


theLivingLab.scene.GameOver.prototype = Object.create(rune.scene.Scene.prototype);
theLivingLab.scene.GameOver.prototype.constructor = theLivingLab.scene.GameOver;

/**
 * @inheritDoc
 */
theLivingLab.scene.GameOver.prototype.init = function() {
    
    rune.scene.Scene.prototype.init.call(this);

    this.initBackground();
    this.initButtons();
    this._initScoreView();
    //this._initSound();
};
theLivingLab.scene.GameOver.prototype._initScoreView = function() {

    this._scoreView = new rune.text.BitmapField(this.score.toString() + " points", "texttexture");
    this._scoreView.autoSize = true;
    this._scoreView.center = this.application.screen.center;
    this.stage.addChild(this._scoreView);
}

theLivingLab.scene.GameOver.prototype.initButtons = function() {
    
    //temporary
    this._marker = new theLivingLab.ui.MenuButton('pil', 200, 435, 210, 90)
    this._marker.flippedX = true;
    this.stage.addChild(this._marker);

    this.retryButton = new theLivingLab.ui.MenuButton('playagain', 450, 410, 394, 76, this.application.startSinglePlayer)
    this.menuButton = new theLivingLab.ui.MenuButton('backtomenu', 450, 510, 394, 76, this.application.gotoMenu)
    

    this.stage.addChild(this.retryButton);
    this.stage.addChild(this.menuButton);
};


theLivingLab.scene.GameOver.prototype.initBackground = function() {
   
    this._background = new theLivingLab.ui.Background('gameover');
    this.stage.addChild(this._background);
};

theLivingLab.scene.GameOver.prototype._initSound = function() {
   
    //console.log(this.application.sounds.music.get('game-sound'))
};

/**
 * @inheritDoc
 */
theLivingLab.scene.GameOver.prototype.update = function(step) {
    
    rune.scene.Scene.prototype.update.call(this, step);
    this._updateInputs();
    this._updateMarker();
};

theLivingLab.scene.GameOver.prototype._updateInputs = function() {
   
    this.keyboard.justPressed('S') && this.selectedButtonIndex < this.stage.numChildren - 1 && this.selectedButtonIndex++;
    
    this.keyboard.justPressed('W') && this.selectedButtonIndex > 1 && this.selectedButtonIndex--;

    this.keyboard.justPressed('ENTER') && this.stage.getChildAt(this.selectedButtonIndex) instanceof theLivingLab.ui.MenuButton && this.stage.getChildAt(this.selectedButtonIndex+1).onClick();
};
theLivingLab.scene.GameOver.prototype._updateMarker = function() {

    if(this.selectedButtonIndex === 1) {
        this._marker.y = 415;
    }
    if(this.selectedButtonIndex === 2) {
        this._marker.y = 515;
    }
    
};



