

 theLivingLab.scene.GameOver = function(score, name) {

    

    this.retryButton = null;


    this.menuButton = null;


    this._playerName = name || null;


    this._marker = null;



    this.score = score || 0;



    this._scoreView = null;



    this._music = null;
    


    this._background = null;



    this.selectedButtonIndex = 1;



    this._highscores = new rune.data.Highscores('theLivingLab', 1, 5);



    rune.scene.Scene.call(this);



};


theLivingLab.scene.GameOver.prototype = Object.create(rune.scene.Scene.prototype);
theLivingLab.scene.GameOver.prototype.constructor = theLivingLab.scene.GameOver;



theLivingLab.scene.GameOver.prototype.init = function() {
    
    rune.scene.Scene.prototype.init.call(this);
    this._initBackground();
    this._initButtons();
    this._initScoreView();
    this._initSounds();
};



theLivingLab.scene.GameOver.prototype._initScoreView = function() {

    this._scoreView = new rune.text.BitmapField(this.score.toString() + " points", "texttexture");
    this._scoreView.autoSize = true;
    this._scoreView.center = this.application.screen.center;
    this.stage.addChild(this._scoreView);
}



theLivingLab.scene.GameOver.prototype._checkScore = function() {

    if(this.score > this._highscores.get(4).score && this._playerName === null){
        console.log('trueee')
        this.application.scenes.load([new theLivingLab.scene.HighscoreInput(this.score, this._music)])
    }
}




theLivingLab.scene.GameOver.prototype._initButtons = function() {
    
    this._marker = new theLivingLab.ui.MenuButton('pil', 200, 435, 210, 90)
    this._marker.flippedX = true;
    this.stage.addChild(this._marker);
    var self = this;
    this.retryButton = new theLivingLab.ui.MenuButton('playagain', 450, 410, 394, 76, this.application.startSinglePlayer)
    this.highscoreButton = new theLivingLab.ui.MenuButton('high-score', 450, 510, 394, 76, function() { this.application.scenes.load([new theLivingLab.scene.HighscoreList(self._music)]) })
    this.menuButton = new theLivingLab.ui.MenuButton('backtomenu', 450, 610, 394, 76, this.application.gotoMenu)
    
    this.stage.addChild(this.retryButton);
    this.stage.addChild(this.highscoreButton);
    this.stage.addChild(this.menuButton);
};



theLivingLab.scene.GameOver.prototype._initBackground = function() {
   
    this._background = new theLivingLab.ui.Background('gameover');
    this.stage.addChild(this._background);
};



theLivingLab.scene.GameOver.prototype._initSounds = function() {
    
    this._music = this.application.sounds.music.get('menu')
    this._music.volume = 0.3;
    this._music.play(true);
    this._music.resume();
};


theLivingLab.scene.GameOver.prototype.update = function(step) {
    
    rune.scene.Scene.prototype.update.call(this, step);
    this._checkScore();
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
    if(this.selectedButtonIndex === 3) {
        this._marker.y = 615;
    }
};

theLivingLab.scene.GameOver.prototype.dispose = function() {

    this._music.stop();
    rune.scene.Scene.prototype.dispose.call(this);
};




