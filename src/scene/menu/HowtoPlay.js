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
 cop.scene.HowtoPlay = function() {


    this.background = null;
    this.backButton = null;

    rune.scene.Scene.call(this);
};

cop.scene.HowtoPlay.prototype = Object.create(rune.scene.Scene.prototype);
cop.scene.HowtoPlay.prototype.constructor = cop.scene.HowtoPlay;

/**
 * @inheritDoc
 */
cop.scene.HowtoPlay.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    this.mouse.enable = true;
    this._initBackground();
    this._initButtons();

};

cop.scene.HowtoPlay.prototype._initBackground = function() {
    
    this.background = new Background('howtoplay');
    this.stage.addChild(this.background);
};

cop.scene.HowtoPlay.prototype._initButtons = function() {
    
    this.backButton = new Button('pil', 50, 25, 210, 90, this.application.gotoMenu)
    this.stage.addChild(this.backButton);
};

cop.scene.HowtoPlay.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
};

cop.scene.HowtoPlay.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};
