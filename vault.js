'use strict';
module.exports = function() {
    var fart={};
    function setValue(key, value){
        fart[key] = value;
    }
    function getValue(key){
        if (fart.hasOwnProperty(key)){
            return fart[key];
        }else{
            return null;
        }
    
    }
       return {getValue,setValue}
    
};