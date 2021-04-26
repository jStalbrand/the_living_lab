
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

    rune.scene.Scene.call(this);


};


cop.scene.Game.prototype = Object.create(rune.scene.Scene.prototype);
cop.scene.Game.prototype.constructor = cop.scene.Game;

/**
 * @inheritDoc
 */
cop.scene.Game.prototype.init = function() {
    
    rune.scene.Scene.prototype.init.call(this);
    console.log('nr of players: ', this.nrOfPlayers);
    this.cameras.getCamera(0).debug = true;
    this.initCamera();
    this.initBackground();
    this.initEntities();

};

cop.scene.Game.prototype.initEntities = function() {
    
    this._bullets = new Bullets(this);
    this.groups.add(this._bullets);   
   
    this._players = new Players(this, this._bullets);
    this._zombies = new Zombies(this);
   
    this.groups.add(this._players);   
    this.groups.add(this._zombies);   
    
};

cop.scene.Game.prototype.initBackground = function() {
   
    this._background = new rune.display.Graphic(
        0, 
        0, 
        800, 
        400, 
        "00FF00", 
        "bakgrund2"
    );

        this.stage.addChild(this._background);
};

cop.scene.Game.prototype.initCamera = function() {
   
    this.cameras.getCamera(0).fade.opacity = 1.0;
    this.cameras.getCamera(0).fade.in(1500);
};

cop.scene.Game.prototype.initObstacles = function(step) {
    
    this.obstacle = new Obstacle();
    this.stage.addChild(this.obstacle);
};

/**
 * @inheritDoc
 */
cop.scene.Game.prototype.update = function(step) {
    
    rune.scene.Scene.prototype.update.call(this, step);
};

/**
 * @inheritDoc
 */
cop.scene.Game.prototype.dispose = function() {
   
    //this._player.parent.removeChild(this._player);
    // this._player.dispose();
    // this._player = null;
    //superanrop bör vara sist i denna metod
    rune.scene.Scene.prototype.dispose.call(this);
};

cop.scene.Game.prototype.onGameOver = function() {
   
    this.application.scenes.load([new cop.scene.Menu()])

};
