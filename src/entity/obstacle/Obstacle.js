


theLivingLab.entity.Obstacle = function(x, y, width, height, texture) {

    rune.display.Sprite.call(this, x, y, width, height, '', texture);
}


theLivingLab.entity.Obstacle.prototype = Object.create(rune.display.Sprite.prototype);
theLivingLab.entity.Obstacle.prototype.constructor = theLivingLab.entity.Obstacle;


theLivingLab.entity.Obstacle.prototype.init = function() {

}


