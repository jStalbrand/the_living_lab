
/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 * 
 * Scene state.
 */
 cop.scene.Scenes = function(opt={nrOfPlayers: 1}) {


    rune.scene.Scenes.call(this);


};


cop.scene.Scenes.prototype = Object.create(rune.scene.Scenes.prototype);
cop.scene.Scenes.prototype.constructor = cop.scene.Scenes;

/**
 * @inheritDoc
 */
cop.scene.Scenes.prototype.init = function() {
    
    rune.scene.Scenes.prototype.init.call(this);

 
}
cop.scene.Scenes.prototype.gotoMenu = function() {
    
    this.load([new cop.scene.Menu()])
 
}