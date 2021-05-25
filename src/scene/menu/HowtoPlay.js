/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 * 
 * HowtoPlay state.
 */
 theLivingLab.scene.HowtoPlay = function() {


    this.background = null;
    this.backButton = null;

    rune.scene.Scene.call(this);
};

theLivingLab.scene.HowtoPlay.prototype = Object.create(rune.scene.Scene.prototype);
theLivingLab.scene.HowtoPlay.prototype.constructor = theLivingLab.scene.HowtoPlay;

/**
 * @inheritDoc
 */
theLivingLab.scene.HowtoPlay.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    this._initBackground();
    this._initButtons();

};

theLivingLab.scene.HowtoPlay.prototype._initBackground = function() {
    
    this.background = new theLivingLab.ui.Background('howtoplay');
    this.stage.addChild(this.background);
};

theLivingLab.scene.HowtoPlay.prototype._initButtons = function() {
    
    this.backButton = new theLivingLab.ui.MenuButton('pil', 50, 25, 210, 90, this.application.gotoMenu)
    this.stage.addChild(this.backButton);
};

theLivingLab.scene.HowtoPlay.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    this._updateInputs();
};

theLivingLab.scene.HowtoPlay.prototype._updateInputs = function(step) {
    
    if(this.keyboard.justPressed('a')){

        this.application.scenes
        this.application.scenes.load([new theLivingLab.scene.Menu()])
    } 
};


theLivingLab.scene.HowtoPlay.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};
