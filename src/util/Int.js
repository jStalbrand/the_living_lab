
//ändra till Number - prototyp
theLivingLab.util.Int = function() {


}



 theLivingLab.util.Int.prototype.getRandomFromInterval = function(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min)
 }
 


 theLivingLab.util.Int.prototype.getNegativeOrPositive = function() {

     return Math.random() < 0.5 ? -1 : 1;
 } 

 

 /**
  * 
  * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  */
 Array.prototype.shuffle=function(array){

    var currentIndex = array.length, temporaryValue, randomIndex;

     while (0 !== currentIndex) {

       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;

       temporaryValue = array[currentIndex];
       array[currentIndex] = array[randomIndex];
       array[randomIndex] = temporaryValue;
     }

     return array;
   }
  
 

 