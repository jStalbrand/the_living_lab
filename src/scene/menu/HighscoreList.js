


 theLivingLab.scene.HighscoreList = function(music) {



    this.background = null;



    this._music = music || null;


    this._highscores = new rune.data.Highscores('theLivingLab', 1, 5);

    
    this.button = null;

    
    this.backButton = null;



    rune.scene.Scene.call(this);


};


theLivingLab.scene.HighscoreList.prototype = Object.create(rune.scene.Scene.prototype);
theLivingLab.scene.HighscoreList.prototype.constructor = theLivingLab.scene.HighscoreList;



theLivingLab.scene.HighscoreList.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    this._initBackground();
    this._initButtons();
    this._initRanking();
    this._initSounds();

};


theLivingLab.scene.HighscoreList.prototype._initRanking = function() {

    var self = this;    
    for (var i = 0; i < 5; i++) {
        var index = i+1;
        var rank = new rune.text.BitmapField(index.toString() + '.  ' + self._highscores.get(i).name +  '  ' + self._highscores.get(i).score);
        rank.scaleX = 3;
        rank.scaleY = 3;
        rank.x = 50;
        rank.y = this.application.screen.x +  + 100 + (index * 100);
        this.stage.addChild(rank);
    }
};


theLivingLab.scene.HighscoreList.prototype._initBackground = function() {
    
    this.background = new theLivingLab.ui.Background('scoreBackground');
    
    this.button = new theLivingLab.ui.MenuButton('high-score', 450, 10, 394, 76)

    this.stage.addChild(this.background);
    this.stage.addChild(this.button);
    
};



theLivingLab.scene.HighscoreList.prototype._initSounds = function() {

    if(this._music !== null){

        this._music.resume();
    }
};



theLivingLab.scene.HighscoreList.prototype._initButtons = function() {
    
    this.backButton = new theLivingLab.ui.MenuButton('pil', 50, 25, 210, 90, this.application.gotoMenu)
    this.stage.addChild(this.backButton);
};



theLivingLab.scene.HighscoreList.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    this._updateInputs();
};



theLivingLab.scene.HighscoreList.prototype._updateInputs = function(step) {
    
    if(this.keyboard.justPressed('A'))
        this.application.scenes.load([new theLivingLab.scene.Menu()])
};



theLivingLab.scene.HighscoreList.prototype.dispose = function() {
    
    this._music.stop();
    rune.scene.Scene.prototype.dispose.call(this);
};