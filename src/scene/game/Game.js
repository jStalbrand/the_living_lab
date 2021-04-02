//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

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
cop.scene.Game = function() {


    /**
     * reference to the player entity
     */
    this._player = null;

    this._players = null;

    this._zombie = null;

    this._zombies = null;

    /**
     * reference to the ground
     */
    this._ground = null;

    this.m_camera = null;

    /**
     * reference to the background
     */
    this._background = null;



    rune.scene.Scene.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

cop.scene.Game.prototype = Object.create(rune.scene.Scene.prototype);
cop.scene.Game.prototype.constructor = cop.scene.Game;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
cop.scene.Game.prototype.init = function() {
    
    rune.scene.Scene.prototype.init.call(this);
    this.cameras.getCamera(0).debug = true;
    this.initCamera();
    this.initBackground();
    console.log('screen: ', this.application.screen);
    
    
    //this._player = new Player();
    this._players = new Players(this);
    //this._zombie = new Zombie();
    this._zombies = new Zombies(this);
   // this.stage.addChild(this._players);
    this.groups.add(this._players);   
    this.groups.add(this._zombies);   
     
    //this.stage.addChild(this._zombie);
    console.log('stage: ', this.stage);
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

cop.scene.Game.prototype.initBackground = function() {
   
    this._background = new rune.display.Graphic(
        0, 
        0, 
        400, 
        300, 
        "00FF00", 
        "copsnrobbers_texture_background"
    );
        console.log('stage: ', this.stage);
};
cop.scene.Game.prototype.initCamera = function() {
   
    this.m_camera = this.cameras.add(this.cameras.create());
    this.cameras.getCamera(0).fade.opacity = 1.0;
    this.cameras.getCamera(0).fade.in(1500);
    this.m_camera.bounderies = new rune.geom.Rectangle(
        0,
        0,
        400,
        300
    );

};