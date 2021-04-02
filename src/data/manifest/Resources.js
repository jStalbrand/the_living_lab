//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/** 
 * Creates a new object.
 * 
 * @constructor
 * @extends rune.resource.Manifest
 * 
 * @class
 * @classdesc
 *
 * @param {rune.util.Executable} [onLoadComplete] ...
 * @param {rune.util.Executable} [onLoadProgress] ...
 * @param {rune.util.Executable} [onLoadError] ...
 * @param {rune.util.Executable} [onLoadAbort] ...
 * 
 * ...
 */
cop.data.Resources = function(onLoadComplete, onLoadProgress, onLoadError, onLoadAbort) {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * ...
     */
    rune.resource.Manifest.call(this, onLoadComplete, onLoadProgress, onLoadError, onLoadAbort);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

cop.data.Resources.prototype = Object.create(rune.resource.Manifest.prototype);
cop.data.Resources.prototype.constructor = cop.data.Resources;

//------------------------------------------------------------------------------
// Override protected prototype methods
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
cop.data.Resources.prototype.m_construct = function() {
    this.create("copsnrobbers_texture_joe", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAAAmCAYAAAD9cMi1AAAAAXNSR0IArs4c6QAABDdJREFUeJztmj+LE0EYxt8NynZiYYo7DQcWEQxcrtHGwiKFIFyXJjlR/AKS7uQqCwuvMt2VgsjdBwjYaAoLrzrkcmDAFEIIpgmICArHiWvj7M3OzjszOzs7mdzNAyHZnfnt+yezm2TzAHh5aSrg7Vxe343o7WmvzZ2Xl9GRrdx8D+RM6gAsoBJMh9GRrdx8D9SYBEwDF7+8SEDj0ZH0KqXKYAmqFpMlN3Yu0cmNp2i8lepqxM6V5ajDkBzpbdlis5Gbat8SIBuEFe9N0mFIgrz9qg0oKjffA3WmRO8MxzMIxzM42NmIn0fNGoTjGdoAHYa9itAPTLq5HexsAADAqFmDUbMGABAfA2tMOJ7BqFlLxCLxTTGi2rFFZSs31b4lFs/Htx3pa1Y6jGixYKs+T26kEfRr0zVlZXh1qpxENnJT7VvijJ31t9HLVbmxyT27dZk797uJRC71D+FnY81oHBGnw4g4XYbUTUT6YjqOKYaeX8IGVKXDAKRXPd1Ak3FMqoj+sHWLriB54phiaJXYHfVuJVOQ5fXdiMfw9p2OXfujnGGOONi4DmO6B9j3GlEskz2QLRyVOOhPdQCAH1/fwOXrDwAA/0nH7qMZHkczg84kmdzLyl8IoCRiVOPo1KPDGO/B/zdoEXpQwgCibw9fCcdFjEz1bgXq3QqsPPkAw89DgCB9JdSNo1PPvHtw5ft71cMrxSm6B9I36+rrx+jYoDNJnTk0wxvDmNa7e5kZURxMonp0GJM9MM1gMtWDePFgydHjiySdenwPsjEX2MG7k+fx6/DWbTg+JNuPUgciX7paazcjHlNuDFOfqbYYnXp0mPPcA+Vb06L/qTxzPhn0O894dBTI/tj0jGcSYlec7E8yz3jGy8vLy57makP1jD3rahGamw3VM/asq0UpcZ9HZPXE5Bl7jGuaiw3VM/rWVWdVDZeiargUzfrb8fPxViuqhktoofRc8jjeakUiA5JOHFuMy/W4ptw2VN64zNhly+561upxTak7zLYcflnj2GJcr8cl5bahAmR3qtmyTJ61elyTERsq4Yipqd6tSI1TpqyRphnX63FJhdhQfz07ic1DNEe+dLJNY+2Ug84k1URbllLiVyE50vWYiqPLuCZtG+qsvx1hpiHadSb6lcKLw9O8LaWqzjvaSCWrh2e6UrWuuqJcNlSAbGdJubEZYJdlOg49x/QiFdUz7bUD8nGVV6btri4qvsPMXq5ZDToTKPdOt+k3GHOd7R0OA5ohmvbaQdZb8yIGyxdAvR46DubW25PEVF100147qIN6La4qlw2VaP83dZj9T7zDpoQuOGZenkUqYnTqWamuRrw7vzoLLs8idUWF2VBlt9ddslNi8+k5ZD/LqZikTDAuCr1EkORVC8XOyizS4VWZrPXQ26LaSO08VrRwszILoXnYD3ViqDLztlMWWZuX18LqH1UeBbO2l0khAAAAAElFTkSuQmCC")
    this.create("zombian", "/Users/jake/Desktop/cop/asset/zomban.png")

    this.create("copsnrobbers_texture_background", "/Users/jake/Desktop/cop/asset/copsnrobbers_texture_background.png")
}