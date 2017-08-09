
//to make printing much faster we use white fills for the keys. If you want the original design,
//comment in the keyplateau but printing the piano with that fill takes 19 minutes
normalKeyAttrs = {"fill":function(){
return "white";
//return "url(#keyPlateau)"
}
,
                 "stroke":function(){return "black"},
                 "width":function(){return keyWidth},
                 "height":function(){return keyHeight}}
//to make printing much faster we use white fills for the keys. If you want the original design,
//comment in the keyplateau but printing the piano with that fill takes 19 minutes
blackKeyAttrs = {"fill":function(){
//return "url(#keyPlateau)"
return "white";
},
                 "stroke":function(){return "black"},
                 "width":function(){return keyWidth/2},
                 "height":function(){return keyHeight}}

playToneAttrs = {"fill":function(){return "url(#playTonePlateau)"},
                 "width":function(){return 100},
                 "height":function(){return 200},
             	 "stroke":function(){return "black"}}
