

theLivingLab.scene.HighscoreInput = function(score, music) {



    this.LETTERS = ['A', 'B' ,'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


    this._highscores = new rune.data.Highscores('theLivingLab', 1, 5);


    this.score = score || 0;


    this._music = music || null;


    this._playerName = '';


    this._letter1 = new rune.text.BitmapField('A');


    this._letter2 = new rune.text.BitmapField('A');
    

    this._letter3 = new rune.text.BitmapField('A');
    

    this._letter4 = new rune.text.BitmapField('A');


    this._marker1 = new rune.text.BitmapField('_');


    this._marker2 = new rune.text.BitmapField('_');


    this._marker3 = new rune.text.BitmapField('_');


    this._marker4 = new rune.text.BitmapField('_');


    this._arr = [];


    this._index = 0;


    rune.scene.Scene.call(this);



}



theLivingLab.scene.HighscoreInput.prototype = Object.create(rune.scene.Scene.prototype);
theLivingLab.scene.HighscoreInput.prototype.constructor = theLivingLab.scene.HighscoreInput;



theLivingLab.scene.HighscoreInput.prototype.init = function() {

    rune.scene.Scene.prototype.init.call(this);
    this._initBackground();
    this._initScoreView();
    this._initPositionInfo();
    this._initLetters();
    this._initMarkers();
    this._initInfo();
    this._initSounds();
}



theLivingLab.scene.HighscoreInput.prototype._initBackground = function() {
   
    this._background = new theLivingLab.ui.Background('gameover');
    this.stage.addChild(this._background);
};



theLivingLab.scene.HighscoreInput.prototype._initScoreView = function() {

    this._scoreView = new rune.text.BitmapField(this.score.toString() + " points", "texttexture");
    this._scoreView.autoSize = true;
    this._scoreView.center = this.application.screen.center;
    this.stage.addChild(this._scoreView);
}



theLivingLab.scene.HighscoreInput.prototype._initSounds = function() {

    if(this._music !== null){

        this._music.resume();
    }
};



theLivingLab.scene.HighscoreInput.prototype._initPositionInfo = function() {

    var txt = null;
    if(this.score > this._highscores.get(0).score){
        txt = new rune.text.BitmapField('NEW HIGHSCORE');
    }
    else{
        txt = new rune.text.BitmapField('YOU ARE TOP 5');
    }
       
    txt.scaleX = 5;
    txt.scaleY = 5;
    txt.x = this.application.screen.center.x - 200;
    txt.y = this.application.screen.center.y - 250;
    txt.flicker(Infinity, 400);
    this.stage.addChild(txt);
}




theLivingLab.scene.HighscoreInput.prototype._initLetters = function() {

    this._letter1.scaleX = 4;
    this._letter1.scaleY = 4;
    this._letter1.x = this.application.screen.center.x - 70;
    this._letter1.y = this.application.screen.center.y + 90;

    this._letter2.scaleX = 4;
    this._letter2.scaleY = 4;
    this._letter2.x = this.application.screen.center.x - 30;
    this._letter2.y = this.application.screen.center.y + 90;

    this._letter3.scaleX = 4;
    this._letter3.scaleY = 4;
    this._letter3.x = this.application.screen.center.x + 10;
    this._letter3.y = this.application.screen.center.y + 90;

    this._letter4.scaleX = 4;
    this._letter4.scaleY = 4;
    this._letter4.x = this.application.screen.center.x + 50;
    this._letter4.y = this.application.screen.center.y + 90;
    
    this._arr.push({letter: this._letter1, index: 0});
    this._arr.push({letter: this._letter2, index: 0});
    this._arr.push({letter: this._letter3, index: 0});
    this._arr.push({letter: this._letter4, index: 0});

    this.stage.addChild(this._letter1);
    this.stage.addChild(this._letter2);
    this.stage.addChild(this._letter3);
    this.stage.addChild(this._letter4);
}



theLivingLab.scene.HighscoreInput.prototype._initMarkers = function() {

    this._marker1.scaleX = 5;
    this._marker1.scaleY = 5;
    this._marker1.x = this.application.screen.center.x - 70;
    this._marker1.y = this.application.screen.center.y + 100;

    this._marker2.scaleX = 5;
    this._marker2.scaleY = 5;
    this._marker2.x = this.application.screen.center.x - 30;
    this._marker2.y = this.application.screen.center.y + 100

    this._marker3.scaleX = 5;
    this._marker3.scaleY = 5;
    this._marker3.x = this.application.screen.center.x  + 10;
    this._marker3.y = this.application.screen.center.y + 100
    
    this._marker4.scaleX = 5;
    this._marker4.scaleY = 5;
    this._marker4.x = this.application.screen.center.x + 50;
    this._marker4.y = this.application.screen.center.y + 100;

    this.stage.addChild(this._marker1);
    this.stage.addChild(this._marker2);
    this.stage.addChild(this._marker3);
    this.stage.addChild(this._marker4);
}




theLivingLab.scene.HighscoreInput.prototype._initInfo = function() {

    this.infoText = new rune.text.BitmapField('press enter to save');
    this.infoText.scaleX = 3;
    this.infoText.scaleY = 3;
    this.infoText.x = this.application.screen.center.x - 160;
    this.infoText.y = this.application.screen.center.y + 180
    
    this.stage.addChild(this.infoText);
}




theLivingLab.scene.HighscoreInput.prototype.update = function(step) {

    rune.scene.Scene.prototype.update.call(this, step);
    this._updateInput();
    this._updatePlayerName();
}




theLivingLab.scene.HighscoreInput.prototype._updateInput = function() {

    if(this.keyboard.justPressed('D')){
        if(this._index < this._arr.length-1){
            this._index++;
            this._arr[this._index-1].letter.flicker(0, 0);
            this._arr[this._index].letter.flicker(Infinity, 200);
        }
    } 
    if(this.keyboard.justPressed('A')){
        if(this._index > 0){
            this._index--;
            this._arr[this._index+1].letter.flicker(0, 0);
            this._arr[this._index].letter.flicker(Infinity, 200);
        }
    } 
    if(this.keyboard.justPressed('W')){
        if(this._arr[this._index].index < this.LETTERS.length-1){
            this._arr[this._index].index++;
            this._arr[this._index].letter.text = this.LETTERS[this._arr[this._index].index];
        }
    } 
    if(this.keyboard.justPressed('S')){
        if(this._arr[this._index].index !== 0){
            this._arr[this._index].index--;
            this._arr[this._index].letter.text = this.LETTERS[this._arr[this._index].index];
        }
    } 
    if(this.keyboard.justPressed('ENTER')){
        this._highscores.send(this.application.scenes.selected.score, this._playerName);
        console.log(this._highscores);
        this.application.scenes.load([new theLivingLab.scene.GameOver(this.score, this._playerName)])
    } 

}




theLivingLab.scene.HighscoreInput.prototype._updatePlayerName = function() {
    
    this._playerName = '';
    for (var i = 0; i < this._arr.length; i++) {
        this._playerName += this._arr[i].letter.text.toLowerCase();
    }
};




theLivingLab.scene.HighscoreInput.prototype.dispose = function() {

    this._music.stop();
    rune.scene.Scene.prototype.dispose.call(this);
}


