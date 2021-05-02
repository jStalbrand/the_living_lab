

const Obstacle = function() {

    rune.display.Sprite.call(this, 50, 150, 25, 15, '00FF00', 'bord');
}

Obstacle.prototype = Object.create(rune.display.Sprite.prototype);
Obstacle.prototype.constructor = Obstacle;

Obstacle.prototype.init = function() {

    console.log('obstacle: ', this);

}


