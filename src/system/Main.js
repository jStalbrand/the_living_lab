//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * ...
 *
 * @constructor
 * 
 * @class
 * @classdesc
 * 
 * ...
 */
cop.system.Main = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * ...
     */
    rune.system.Main.call(this, {
        id: "com.vectorpanic.template",
        name: "cop",
        scene: cop.scene.Menu,
        resources: cop.data.Resources,
        useKeyboard: true,
        debug: true
    });
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

cop.system.Main.prototype = Object.create(rune.system.Main.prototype);
cop.system.Main.prototype.constructor = cop.system.Main;