
/**
 * ...
 *
 * @constructor
 *
 * @class
 * @classdesc
 * 
 * Class for handling the connection between points in a two-dimensional space.
 */
theLivingLab.geom.Points = function(p1, p2) {



}


/**
 * 
 * @param {Number} x1 
 * @param {Number} y1 
 * @param {Number} x2 
 * @param {Number} y2 
 * @returns 
 */
theLivingLab.geom.Points.prototype.getAngle = function(point1, point2) {
    
    var dX = point2.x - point1.x;
    var dY = point2.y - point1.y;
    return Math.atan2(dY, dX);
}


/**
 * 
 * @param {Number} x1 
 * @param {Number} y1 
 * @param {Number} x2 
 * @param {Number} y2 
 * @returns Number
 */
theLivingLab.geom.Points.prototype.getDistance = function(point1, point2) {
    
    var dX = point2.x - point1.x
    var dY = point2.y - point1.y;
    return Math.sqrt((dX * dX) + (dY * dY))
}



/**
 * 
 * @param {Number} x position of point
 * @param {Number} y position of point
 * @param {Array} arr Array of Point objects
 * @returns Object 
 */
theLivingLab.geom.Points.prototype.getClosestNeighbour = function(point, arr) {
    var tmpArr = [];
    arr.forEach(function(p){
        tmpArr.push(theLivingLab.geom.Points.prototype.getDistance(point, new rune.geom.Point(p.x, p.y)));
    })    
   //lowest could be wrong now after compile 
   var lowest = Math.min.apply(Math, tmpArr)
   var index = tmpArr.indexOf(lowest);

    return arr[index];
}

/**
 * 
 * @param {rune.geom.Point} point 
 * @param {Number} min distance from point
 * @param {Number} max distance from point
 * @returns 
 */
theLivingLab.geom.Points.prototype.createRelativeTo = function(point, min, max) {

    
    
}