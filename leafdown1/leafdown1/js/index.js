require(["./leaf"],function(Leaf){
	var oContainer=document.getElementById('container');
	var winWidth=document.documentElement.clientWidth;
	//var ss=require('./leaf');
	//实例化出来四个叶子
	for(var i=0;i<4;i++){
		//基础宽度+随机宽度
		var iWidth=50+parseInt(Math.random()*51);
		var leaf=new Leaf({
			width:iWidth,
			left:parseInt(Math.random()*(winWidth-iWidth)),
			container:oContainer
		});

		leaf.fall();
	}
});