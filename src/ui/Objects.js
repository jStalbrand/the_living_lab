


theLivingLab.ui.Objects = function() {



    this._machine = null;



    this._machineButton = null;



    rune.display.DisplayGroup.call(this, this.application.scenes.selected.stage);


}


theLivingLab.ui.Objects.prototype = Object.create(rune.display.DisplayGroup.prototype);
theLivingLab.ui.Objects.prototype.constructor = theLivingLab.ui.Objects;



theLivingLab.ui.Objects.prototype.init = function() {

    rune.display.DisplayGroup.prototype.init.call(this);
    this._machine = new theLivingLab.entity.Machine();
    this._machineButton = new theLivingLab.ui.MachineButton();
    this.addChild(this._machine);
    this.addChild(this._machineButton);
}



theLivingLab.ui.Objects.prototype.update = function(step) {

    rune.display.DisplayGroup.prototype.update.call(this, step);
}



theLivingLab.ui.Objects.prototype.dispose = function() {
   
    rune.display.DisplayGroup.prototype.dispose.call(this);
};
