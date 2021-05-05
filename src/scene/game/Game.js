
/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 * 
 * Game state.
 */
cop.scene.Game = function(opt={nrOfPlayers: 1}) {

    //used to check if the game should be initiated as 1 player or co op
    this.nrOfPlayers = opt.nrOfPlayers;

    this._players = null;

    this._zombies = null;

    this.obstacle = null;

    //current game score
    this._score = null;

    //graphic representation of the score
    this._scoreView = null;
    
    // reference to the background
    this._background = null;

    this.backgroundMusic = null;

    rune.scene.Scene.call(this);

    this.zombieInterval = null;

};

cop.scene.Game.prototype = Object.create(rune.scene.Scene.prototype);
cop.scene.Game.prototype.constructor = cop.scene.Game;

/**
 * @inheritDoc
 */
cop.scene.Game.prototype.init = function() {
    
    rune.scene.Scene.prototype.init.call(this);
    this.mouse.enable = false;
    this.cameras.getCamera(0).debug = false;
    this._initCamera();
    this._initBackground();
    this._initSounds();
    this._initEntities();
    this._initObstacles();
  //  this._initZombieInterval();

};

cop.scene.Game.prototype._initZombieInterval = function() {

    this.zombieInterval = setInterval(this._zombies.add,2000)
}

cop.scene.Game.prototype._initEntities = function() {
    
    this._bullets = new Bullets(this);
    this.groups.add(this._bullets);   
   
    this._players = new Players(this, this._bullets);
    this._zombies = new Zombies(this);
   
    this.groups.add(this._players);   
    this.groups.add(this._zombies);   
    
};

cop.scene.Game.prototype._initBackground = function() {
   
    this._background = new Background();

    this.stage.addChild(this._background);
};

cop.scene.Game.prototype._initSounds = function() {
   
    this.application.sounds.music.volume = 1;
    this.application.sounds.master.volume = 0;
    this.backgroundMusic = this.application.sounds.music.get("game-sound");
    this.backgroundMusic.play();

};
cop.scene.Game.prototype._initCamera = function() {
   
    this.cameras.getCamera(0).fade.opacity = 1.0;
    this.cameras.getCamera(0).fade.in(100);
};

cop.scene.Game.prototype._initObstacles = function(step) {
    
    this.table1 = new Obstacle(1050,350,98,80, 'nyttbord');
    this.table2 = new Obstacle(750,500,98,80, 'nyttbord');
    this.table3 = new Obstacle(500,300,156,156, 'nyttbord2');
    this.table4 = new Obstacle(50,550,213,62, 'nyttbord3');
   
    this.stage.addChild(this.table1);
    this.stage.addChild(this.table2);
    this.stage.addChild(this.table3);
    this.stage.addChild(this.table4);
};

cop.scene.Game.prototype.update = function(step) {
    
    rune.scene.Scene.prototype.update.call(this, step);
};

cop.scene.Game.prototype.dispose = function() {
   
    rune.scene.Scene.prototype.dispose.call(this);
};

cop.scene.Game.prototype.onGameOver = function() {
   
    this.application.scenes.load([new cop.scene.GameOver()])
};
