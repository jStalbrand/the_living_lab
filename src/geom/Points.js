
/**
 * 
 * Class for handling the connection between points in a two-dimensional space.
 * 
 */
theLivingLab.geom.Points = function() {



}



theLivingLab.geom.Points.prototype.getAngle = function(point1, point2) {
    
    var dX = point2.x - point1.x;
    var dY = point2.y - point1.y;
    return Math.atan2(dY, dX);
}



theLivingLab.geom.Points.prototype.getDistance = function(point1, point2) {
    
    var dX = point2.x - point1.x
    var dY = point2.y - point1.y;
    return Math.sqrt((dX * dX) + (dY * dY))
}



theLivingLab.geom.Points.prototype.getClosestNeighbour = function(point, arr) {
    
    var tmpArr = [];
    arr.forEach(function(p){
        tmpArr.push(theLivingLab.geom.Points.prototype.getDistance(point, new rune.geom.Point(p.x, p.y)));
    })    
    var lowest = Math.min.apply(Math, tmpArr)
    var index = tmpArr.indexOf(lowest);
    return arr[index];
}



theLivingLab.geom.Points.prototype.createRelativeTo = function(point, min, max) {

    
    
}