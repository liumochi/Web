/**
 * Created by Administrator on 2017/2/20.
 */
require(['jquery','carousel'],function($,Carousel){
    var imageData=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
    new Carousel({
        imageData:imageData,
        target:'#con',
        buttonStyle:'circle',
        arrowPos:'center'
    });
    new Carousel({
        imageData:imageData,
        target:'#con2',
        buttonStyle:'square',
        arrowPos:'center'

    });
});