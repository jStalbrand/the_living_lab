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
 * Menu state.
 */
cop.scene.Menu = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * ...
     */
    rune.scene.Scene.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

cop.scene.Menu.prototype = Object.create(rune.scene.Scene.prototype);
cop.scene.Menu.prototype.constructor = cop.scene.Menu;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
cop.scene.Menu.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    
    var text = new rune.text.BitmapField("Hello Menu!");
    text.autoSize = true;
    text.center = this.application.screen.center;
    
    this.stage.addChild(text);
};

/**
 * @inheritDoc
 */
cop.scene.Menu.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    if(this.keyboard.justPressed("space")){
        this.application.scenes.load([new cop.scene.Game()])
    }
};

/**
 * @inheritDoc
 */
cop.scene.Menu.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};