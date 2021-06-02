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
theLivingLab.system.Main = function() {


    rune.system.Main.call(this, {

        id:             "com.vectorpanic.template",
        name:           "theLivingLab",
        scene:          theLivingLab.scene.Menu,
        resources:      theLivingLab.data.Resources,
        useKeyboard:    true,
        debug:          true,
        screenResolutionX: 1280,
        screenResolutionY: 720,
        frameRate: 30
        
       
    });
};


theLivingLab.system.Main.prototype = Object.create(rune.system.Main.prototype);
theLivingLab.system.Main.prototype.constructor = theLivingLab.system.Main;



theLivingLab.system.Main.prototype.gotoMenu = function() {

    this.application.scenes.load([new theLivingLab.scene.Menu()])
}


theLivingLab.system.Main.prototype.gotoHowtoPlay = function() {

    this.application.scenes.load([new theLivingLab.scene.HowtoPlay()])
}


theLivingLab.system.Main.prototype.startSinglePlayer = function() {

    this.application.scenes.load([new theLivingLab.scene.Game({nrOfPlayers: 1})])
}


theLivingLab.system.Main.prototype.startMultiPlayer = function() {

    this.application.scenes.load([new theLivingLab.scene.Game({nrOfPlayers: 2})])
}

theLivingLab.system.Main.prototype.gotoHighscoreList = function() {

    this.application.scenes.load([new theLivingLab.scene.HighscoreList()])
}
