/**
 * This class enable function call upon typing a keyphrase
 */
function Phrases(){
    this.phrases = [];

    /**
     * Loop through and all phrases and callbacks
     * @param {Array} p is an array containing array of phrase, callback
     */
    this.addPhrases = function(p){
        //loop through array
        for(var x=0; x<p.length; x++){
            //add phrase and callback as object
            if(p[x][0] != null && p[x][1] != null){
                this.phrases.push({
                    phrase: p[x][0],
                    callback: p[x][1],
                });
            } else {
                console.log("You can't have null keyPhrases!");
            }
        }
        return this;
    }

    /**
     * Add single phrase and callback
     * @param {Array} p is an array of a phrase, callback
     */
    this.addPhrase = function(p){
        // add single phrase
        if(p[0] != null && p[1] != null){
            this.phrases.push({
                phrase: p[0],
                callback: p[1],
            });
        } else {
            console.log("You can't have null keyPhrases!");
        }
        return this;
    }

    /**
     * Check if the user has types your phrase, then execute the callback
     * @param  {String} options is the area you'd like this script to occur, 'document' is the default
     * @return {this}         chainable
     */
    this.checkAllPhrases = function(options){
        this.list = [];
        this.area = (typeof options === 'undefined') ? document : options;
        $(this.area).keypress((function(e){
                this.list.push(e.which);
                    if(e.target.nodeName !== 'INPUT' && e.target.nodeName !== 'TEXTAREA'){
                        // Loop through every phrase
                        for(var x=0; x<this.phrases.length; x++){
                            // Loop through the 
                            for(var i=0; i<this.phrases[x].phrase.length; i++){
                                if(this.phrases[x].phrase.charCodeAt(i) != this.list[this.list.length - (this.phrases[x].phrase.length - i)])
                                {
                                    // console.log("don't match");
                                    break;
                                }
                            
                                if(this.phrases[x].phrase.length === (i + 1)) {
                                    // console.log('callback acheived');
                                    this.phrases[x].callback();
                                }
                            }
                        }
                    }
                }).bind(this)
        );
    }

    return this;

}