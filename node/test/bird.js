/**
 * Created by Administrator on 2017/2/15.
 */

var util=require('util');
var Animal=require('./animal.js');
function Bird(){
    Animal.call(this);
    this.say= function () {
        console.log('ji...ji');
    }

}

util.inherits(Bird,Animal);
exports.say=duck.say;
