


 theLivingLab.entity.PlayerInputs = function() {
    
  
    this._keys = {};

};


Object.defineProperty(theLivingLab.entity.PlayerInputs.prototype, "up", {
    /**
     * @this theLivingLab.entity.PlayerInputs
     * @ignore
     */
    get : function() {
        return this._keys['up'] || "w";
    }
});


Object.defineProperty(theLivingLab.entity.PlayerInputs.prototype, "right", {
    
    get : function() {
        return this._keys['right'] || "d";
    }
});


Object.defineProperty(theLivingLab.entity.PlayerInputs.prototype, "down", {
    

    get : function() {
        return this._keys['down'] || "s";
    }
});


Object.defineProperty(theLivingLab.entity.PlayerInputs.prototype, "left", {
    /**
     * @this theLivingLab.entity.PlayerInputs
     * @ignore
     */
    get : function() {
        return this._keys['left'] || "a";
    }
});


Object.defineProperty(theLivingLab.entity.PlayerInputs.prototype, "Q", {
    /**
     * @this theLivingLab.entity.PlayerInputs
     * @ignore
     */
    get : function() {
        return 'q';
    }
});


Object.defineProperty(theLivingLab.entity.PlayerInputs.prototype, "space", {
    /**
     * @this theLivingLab.entity.PlayerInputs
     * @ignore
     */
    get : function() {
        return this._keys['space'] || 'm';
    }
});


theLivingLab.entity.PlayerInputs.prototype.bind = function(options) {
    this._keys = options;
};