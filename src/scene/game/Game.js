



theLivingLab.scene.Game = function(opt) {


    this.nrOfPlayers = opt.nrOfPlayers;



    this._players = null;



    this._zombies = null;



    this._obstacles = null;



    this._avatar = null;


    this._scoreView = null;
    

    this._background = null;



    this._music = null;

    
    this._gameoverSound = null;
   


    rune.scene.Scene.call(this);


};


theLivingLab.scene.Game.prototype = Object.create(rune.scene.Scene.prototype);
theLivingLab.scene.Game.prototype.constructor = theLivingLab.scene.Game;



/**
 * @inheritDoc
 */
theLivingLab.scene.Game.prototype.init = function() {
    
    rune.scene.Scene.prototype.init.call(this);
    this.cameras.getCamera(0).debug = true;
    this._initCamera();
    this._initBackground();
    this._initHUD();
    this._initSounds();
    this._initEntities();
    this._initObstacles();
    this._updateScoreView();
    this._initObjects();
};



theLivingLab.scene.Game.prototype._initHUD = function() {

    this._avatar = new rune.display.Sprite(20,20,200,200,'', 'avatar');
    this._scoreView = new rune.text.BitmapField('0', 'texttexture');
    this._scoreView.y = this.application.screen.top + 30;
    this._scoreView.x = this.application.screen.left + 80;
    this._scoreView.autoSize = true;

    this.stage.addChild(this._avatar);
    this.stage.addChild(this._scoreView);
}



theLivingLab.scene.Game.prototype._initEntities = function() {
    
    this._players = new theLivingLab.entity.Players();
    this._zombies = new theLivingLab.entity.Zombies();
   
    this.groups.add(this._players);   
    this.groups.add(this._zombies);   
};



theLivingLab.scene.Game.prototype._initBackground = function() {
   
    this._background = new theLivingLab.ui.Background();
    this.stage.addChild(this._background);
};



theLivingLab.scene.Game.prototype._initObjects = function() {

    this._objects = new theLivingLab.ui.Objects();
    this.groups.add(this._objects);
};



theLivingLab.scene.Game.prototype._initSounds = function() {

    this._music = this.application.sounds.music.get("game-sound");
    this._gameoverSound = this.application.sounds.sound.get("gameoversound");
    this.application.sounds.music.volume = 0.3;
    this._music.play(true);
};



theLivingLab.scene.Game.prototype._initCamera = function() {
   
    this.cameras.getCamera(0).fade.opacity = 1.0;
    this.cameras.getCamera(0).fade.in(100);
};



theLivingLab.scene.Game.prototype._initObstacles = function() {

    this._obstacles = new theLivingLab.entity.Obstacles();
    this.groups.add(this._obstacles);
};


theLivingLab.scene.Game.prototype.update = function(step) {
    
    rune.scene.Scene.prototype.update.call(this, step);
    this._updateScoreView();
};



theLivingLab.scene.Game.prototype._updateScoreView = function() {

    if(this._players !== null){

        this._scoreView.text = this._players.score.toString();
    }
};


//förflyttas
theLivingLab.scene.Game.prototype.isInBounderies = function(point) {
    
    var camera = this.cameras.getCamera(0);
    if (point.x < camera.width && point.x > 0 && point.y < camera.height - 50 && point.y > 45){
        return true;
    }
    return false;
};



theLivingLab.scene.Game.prototype.onGameOver = function() {
    
    this.application.scenes.load([new theLivingLab.scene.GameOver(this._players.score)])
    this.application.scenes.selected.timers.remove();
    this._gameoverSound.play();
    this._scoreView.dispose();
    this._players.dispose();
    this._zombies.dispose();
    this._obstacles.dispose();
};



theLivingLab.scene.Game.prototype.dispose = function() {
   
    this._music.stop();
    rune.scene.Scene.prototype.dispose.call(this);
};
