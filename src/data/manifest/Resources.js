//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/** 
 * Creates a new object.
 * 
 * @constructor
 * @extends rune.resource.Manifest
 * 
 * @class
 * @classdesc
 *
 * @param {rune.util.Executable} [onLoadComplete] ...
 * @param {rune.util.Executable} [onLoadProgress] ...
 * @param {rune.util.Executable} [onLoadError] ...
 * @param {rune.util.Executable} [onLoadAbort] ...
 * 
 * ...
 */
 theLivingLab.data.Resources = function(onLoadComplete, onLoadProgress, onLoadError, onLoadAbort) {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * ...
     */
    rune.resource.Manifest.call(this, onLoadComplete, onLoadProgress, onLoadError, onLoadAbort);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

theLivingLab.data.Resources.prototype = Object.create(rune.resource.Manifest.prototype);
theLivingLab.data.Resources.prototype.constructor = theLivingLab.data.Resources;

//------------------------------------------------------------------------------
// Override protected prototype methods
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
theLivingLab.data.Resources.prototype.m_construct = function() {

   

    //Images
    this.create("z1sprite", "/Users/jake/Desktop/theLivingLab/asset/z1sprite.png")
    this.create("skott", "/Users/jake/Desktop/theLivingLab/asset/skott.png")
    this.create("sprite1", "/Users/jake/Desktop/theLivingLab/asset/sprite1.png")
    this.create("sprite2", "/Users/jake/Desktop/theLivingLab/asset/sprite2.png")
    this.create("bakgrundstor", "/Users/jake/Desktop/theLivingLab/asset/bakgrundstor.png")
    this.create("gameover", "/Users/jake/Desktop/theLivingLab/asset/gameover.png")
    this.create("single-player", "/Users/jake/Desktop/theLivingLab/asset/single-player.png")
    this.create("multi-player", "/Users/jake/Desktop/theLivingLab/asset/multi-player.png")
    this.create("high-score", "/Users/jake/Desktop/theLivingLab/asset/high-score.png")
    this.create("howtoplaymenu", "/Users/jake/Desktop/theLivingLab/asset/howtoplaymenu.png")
    this.create("bakgrundmenu", "/Users/jake/Desktop/theLivingLab/asset/bakgrundmenu.png")
    this.create("howtoplay", "/Users/jake/Desktop/theLivingLab/asset/howtoplay.png")
    this.create("pil", "/Users/jake/Desktop/theLivingLab/asset/pil.png")
    this.create("playagain", "/Users/jake/Desktop/theLivingLab/asset/playagain.png")
    this.create("backtomenu", "/Users/jake/Desktop/theLivingLab/asset/backtomenu.png")
    this.create("nyttbord", "/Users/jake/Desktop/theLivingLab/asset/nyttbord.png")
    this.create("nyttbord22", "/Users/jake/Desktop/theLivingLab/asset/nyttbord22.png")
    this.create("nyttbord3", "/Users/jake/Desktop/theLivingLab/asset/nyttbord3.png")
    this.create("z2sprite", "/Users/jake/Desktop/theLivingLab/asset/z2sprite.png")
    this.create("health", "/Users/jake/Desktop/theLivingLab/asset/health.png")
    this.create("buttonsprite", "/Users/jake/Desktop/theLivingLab/asset/buttonsprite.png")
    this.create("exmachine", "/Users/jake/Desktop/theLivingLab/asset/exmachine.png")
    this.create("texttexture", "/Users/jake/Desktop/theLivingLab/asset/texttexture.png")
    this.create("avatar", "/Users/jake/Desktop/theLivingLab/asset/avatar.png")
    this.create("pressq", "/Users/jake/Desktop/theLivingLab/asset/pressq.png")
    this.create("soda", "/Users/jake/Desktop/theLivingLab/asset/soda.png")
    this.create("50points", "/Users/jake/Desktop/theLivingLab/asset/50points.png")
    this.create("skottupp", "/Users/jake/Desktop/theLivingLab/asset/skottupp.png")
    
    
    //Sounds
    this.create("shoot-sound", "/Users/jake/Desktop/theLivingLab/asset/sounds/shoot.mp3")
    this.create("game-sound", "/Users/jake/Desktop/theLivingLab/asset/sounds/game.wav")
    this.create("zombie", "/Users/jake/Desktop/theLivingLab/asset/sounds/zombie.wav")
    this.create("menu", "/Users/jake/Desktop/theLivingLab/asset/sounds/menu.mp3")
    this.create("machinesound", "/Users/jake/Desktop/theLivingLab/asset/sounds/machinesound.mp3")
    this.create("gameoversound", "/Users/jake/Desktop/theLivingLab/asset/sounds/gameover.wav")
    this.create("playerdamage", "/Users/jake/Desktop/theLivingLab/asset/sounds/playerdamage.mp3")
    this.create("points", "/Users/jake/Desktop/theLivingLab/asset/sounds/points.wav")
    
}