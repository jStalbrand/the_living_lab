

const Obstacle = function(x, y, width, height, texture) {

    rune.display.Sprite.call(this, x, y, width, height, '', texture);
}

Obstacle.prototype = Object.create(rune.display.Sprite.prototype);
Obstacle.prototype.constructor = Obstacle;

Obstacle.prototype.init = function() {

    console.log('obstacle: ', this);
}


