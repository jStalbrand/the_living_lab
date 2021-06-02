
theLivingLab.entity.HealthBar = function(entity) {


   
     this.entity = entity || null;



     this._health = 100; 



     rune.display.Sprite.call(this, 0, 0, 35, 6, '', 'health');

     
}
 

 theLivingLab.entity.HealthBar.prototype = Object.create(rune.display.Sprite.prototype);
 theLivingLab.entity.HealthBar.prototype.constructor = theLivingLab.entity.HealthBar;



 Object.defineProperty(theLivingLab.entity.HealthBar.prototype, "health", {

      get : function() {

         return this._health;
      },

      set : function(health) {
         
         if(this._health !== health){

            this._health = health;
            this._updateAnimations();
         }
         
      }

});



theLivingLab.entity.HealthBar.prototype.init = function() {
    
   rune.display.Sprite.prototype.init.call(this);
   this._initAnimations();
}



theLivingLab.entity.HealthBar.prototype._initAnimations = function() {

   this.animations.add('health', [0,1,2,3,4]);
}


theLivingLab.entity.HealthBar.prototype.update = function(step) {
    
   rune.display.Sprite.prototype.update.call(this, step);
   this._updatePosition();
 }



 theLivingLab.entity.HealthBar.prototype._updatePosition = function(step) {

   this.centerX = this.entity.centerX;
   this.y = this.entity.y - 10;
}



theLivingLab.entity.HealthBar.prototype._updateAnimations = function() {

   if(this._health === 0){
      this.animations.goto('health', 4);
   }
   if(this._health < 80 && this.health > 60){
      this.animations.goto('health', 1);
   }
   if(this._health < 60 && this.health > 40){
      this.animations.goto('health', 2);
   }
   if(this._health < 40 && this.health > 0){
      this.animations.goto('health', 3);
   }
}



theLivingLab.entity.HealthBar.prototype.dispose = function() {

   this.parent.removeChild(this);
   rune.display.Sprite.prototype.dispose.call(this);
}
 
 