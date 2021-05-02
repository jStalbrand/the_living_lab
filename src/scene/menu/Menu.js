/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 * 
 * Menu state.
 */
cop.scene.Menu = function() {

    this.multiplayerButton = null;

    this.singleplayerButton = null;

    this.howtoplayButton = null;

    this.highscoreButton = null;

    this.background = null;

    rune.scene.Scene.call(this);
};

cop.scene.Menu.prototype = Object.create(rune.scene.Scene.prototype);
cop.scene.Menu.prototype.constructor = cop.scene.Menu;

/**
 * @inheritDoc
 */
cop.scene.Menu.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    this.mouse.enable = true;
    this.initBackground();
    this.initButtons();
};

cop.scene.Menu.prototype.initBackground = function() {
    
    this.background = new Background('bakgrundmenu');
    this.stage.addChild(this.background);
    
};

cop.scene.Menu.prototype.initButtons = function(step) {

    this.singleplayerButton = new Button('single-player', 700, 250, 394, 76, this.application.startSinglePlayer)
    this.multiplayerButton = new Button('multi-player', 700, 350, 394, 76, this.application.startMultiPlayer)
    this.howtoplayButton = new Button('howtoplaymenu', 700, 450, 394, 76, this.application.gotoHowtoPlay)
    this.highscoreButton = new Button('high-score', 700, 550, 394, 76)
    
    this.stage.addChild(this.singleplayerButton);
    this.stage.addChild(this.howtoplayButton);
    this.stage.addChild(this.multiplayerButton);
    this.stage.addChild(this.highscoreButton);
    
}

/**
 * @inheritDoc
 */
cop.scene.Menu.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
   
};

/**
 * @inheritDoc
 */
cop.scene.Menu.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};
