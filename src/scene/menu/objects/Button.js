
const Button = function() {


    rune.display.Sprite.call(this, 80, 80, 200, 50, '00FF00', '');


}

Button.prototype = Object.create(rune.display.Sprite.prototype);
Button.prototype.constructor = Button;

