/**
 * Created by Administrator on 2017/2/14.
 */
require(["./leaf"], function (Leaf) {

//实例化4个叶子
    for(var i=0;i<4;i++){
        var oContainer=document.getElementById('container');
        var winWidth=document.documentElement.clientWidth;
        var iWidth=50+parseInt(Math.random()*51);
        var leaf=new Leaf({
            width:iWidth,
            left:parseInt(Math.random()*winWidth-iWidth),
            container:oContainer

        });
        leaf.fall();
    }

});
