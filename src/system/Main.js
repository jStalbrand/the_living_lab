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


    rune.system.Main.call(this, {

        id:             "com.vectorpanic.template",
        name:           "cop",
        scene:          cop.scene.Menu,
        resources:      cop.data.Resources,
        useKeyboard:    true,
        useMouse:       true,
        debug:          true,
        screenResolutionX: 1280,
        screenResolutionY: 720,
        frameRate: 30
        
       
    });
};

cop.system.Main.prototype = Object.create(rune.system.Main.prototype);
cop.system.Main.prototype.constructor = cop.system.Main;

cop.system.Main.prototype.gotoMenu = function() {

    this.application.scenes.load([new cop.scene.Menu()])
}
cop.system.Main.prototype.gotoHowtoPlay = function() {

    this.application.scenes.load([new cop.scene.HowtoPlay()])
}
cop.system.Main.prototype.startSinglePlayer = function() {

    this.application.scenes.load([new cop.scene.Game({nrOfPlayers: 1})])
}
cop.system.Main.prototype.startMultiPlayer = function() {

    this.application.scenes.load([new cop.scene.Game({nrOfPlayers: 2})])
}

