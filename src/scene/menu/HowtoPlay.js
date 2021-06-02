


 theLivingLab.scene.HowtoPlay = function(music) {



    this.background = null;



    this.backButton = null;


    this._music = music || null;



    rune.scene.Scene.call(this);


};


theLivingLab.scene.HowtoPlay.prototype = Object.create(rune.scene.Scene.prototype);
theLivingLab.scene.HowtoPlay.prototype.constructor = theLivingLab.scene.HowtoPlay;



theLivingLab.scene.HowtoPlay.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    this._initBackground();
    this._initButtons();
    this._initSounds();

};



theLivingLab.scene.HowtoPlay.prototype._initBackground = function() {
    
    this.background = new theLivingLab.ui.Background('howtoplay');
    this.stage.addChild(this.background);
};


theLivingLab.scene.HowtoPlay.prototype._initSounds = function() {

    if(this._music !== null){
        this._music.resume();
    }

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
    
    if(this.keyboard.justPressed('A'))
        this.application.scenes.load([new theLivingLab.scene.Menu()])
};



theLivingLab.scene.HowtoPlay.prototype.dispose = function() {
    this._music.stop();
    rune.scene.Scene.prototype.dispose.call(this);
};
