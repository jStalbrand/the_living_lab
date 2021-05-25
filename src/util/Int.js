theLivingLab.util.Int = function() {


}

 theLivingLab.util.Int.prototype.getRandomFromInterval = function(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min)
 }
 
 theLivingLab.util.Int.prototype.getNegativeOrPositive = function() {

     return Math.random() < 0.5 ? -1 : 1;
 }   

 