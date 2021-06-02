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
theLivingLab.scene.Menu = function() {


    this.multiplayerButton = null;

    this.singleplayerButton = null;

    this.howtoplayButton = null;

    this.highscoreButton = null;

    this.selectedButtonIndex = 1;

    this._marker = null;


    this._buttons = null;
    

    this.background = null;


    this._music = null;


    rune.scene.Scene.call(this);


};



theLivingLab.scene.Menu.prototype = Object.create(rune.scene.Scene.prototype);
theLivingLab.scene.Menu.prototype.constructor = theLivingLab.scene.Menu;




theLivingLab.scene.Menu.prototype.init = function() {

    rune.scene.Scene.prototype.init.call(this);
    this._initBackground();
    this._initButtons();
    this._initSounds();
};



theLivingLab.scene.Menu.prototype._initBackground = function() {
    
    this.background = new theLivingLab.ui.Background('bakgrundmenu');
    this.stage.addChild(this.background);
};



theLivingLab.scene.Menu.prototype._initButtons = function(step) {

      //temporary
      this._marker = new theLivingLab.ui.MenuButton('pil', 450, 255, 210, 90)
      this._marker.flippedX = true;
      this.stage.addChild(this._marker);
  
      var self = this;
      this.singleplayerButton = new theLivingLab.ui.MenuButton('single-player', 700, 250, 394, 76, self.startSinglePlayer)
      this.multiplayerButton = new theLivingLab.ui.MenuButton('multi-player', 700, 350, 394, 76, self.application.startMultiPlayer)
      this.howtoplayButton = new theLivingLab.ui.MenuButton('howtoplaymenu', 700, 450, 394, 76, function(){ this.application.scenes.load([new theLivingLab.scene.HowtoPlay(self._music)]) })
      this.highscoreButton = new theLivingLab.ui.MenuButton('high-score', 700, 550, 394, 76, function() { this.application.scenes.load([new theLivingLab.scene.HighscoreList(self._music)]) })
      this.stage.addChild(this.singleplayerButton);
      this.stage.addChild(this.multiplayerButton);
      this.stage.addChild(this.howtoplayButton);
      this.stage.addChild(this.highscoreButton);
}

theLivingLab.scene.Menu.prototype.startSinglePlayer = function() {

    this.application.scenes.load([new theLivingLab.scene.Game({nrOfPlayers: 1})])
}


theLivingLab.scene.Menu.prototype._updateInputs = function() {

    this.keyboard.justPressed('S') && this.selectedButtonIndex < this.stage.numChildren - 2 && this.selectedButtonIndex++;
    
    this.keyboard.justPressed('W') && this.selectedButtonIndex > 1 && this.selectedButtonIndex--;

    this.keyboard.justPressed('ENTER') && this.stage.getChildAt(this.selectedButtonIndex) instanceof theLivingLab.ui.MenuButton && this.stage.getChildAt(this.selectedButtonIndex+1).onClick();
};




theLivingLab.scene.Menu.prototype._updateMarker = function() {

    if(this.selectedButtonIndex === 1) {
        this._marker.y = 250;
    }
    if(this.selectedButtonIndex === 2) {
        this._marker.y = 350;
    }
    if(this.selectedButtonIndex === 3) {
        this._marker.y = 450;
    }
    if(this.selectedButtonIndex === 4) {
        this._marker.y = 550;
    }
    
};


theLivingLab.scene.Menu.prototype._initSounds = function() {
    
    this._music = this.application.sounds.music.get('menu')
    this._music.volume = 0.3;
    this._music.play(true);
    this._music.resume();
};



theLivingLab.scene.Menu.prototype.update = function(step) {
    
    rune.scene.Scene.prototype.update.call(this, step);
    this._updateInputs();
    this._updateMarker();
};



theLivingLab.scene.Menu.prototype.dispose = function() {

    this._music.stop();

    rune.scene.Scene.prototype.dispose.call(this);
};
