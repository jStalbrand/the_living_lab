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

    this.logo = null;
    

    rune.system.Main.call(this, {

        id:             "com.vectorpanic.template",
        name:           "cop",
        scene:          cop.scene.Menu,
        resources:      cop.data.Resources,
        useKeyboard:    true,
        debug:          true

    });
};

cop.system.Main.prototype = Object.create(rune.system.Main.prototype);
cop.system.Main.prototype.constructor = cop.system.Main;