/**
 * Created by Administrator on 2017/2/15.
 */
var util=require('util');
var Animal=require('./animal.js');

function Duck(){
    Animal.call(this);
    this.say= function () {
        console.log('ga...ga');
    }
}

util.inherits(Duck,Animal);

var duck=new Duck();
exports.say=duck.say;
