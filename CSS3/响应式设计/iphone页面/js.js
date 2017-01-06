/**
 * Created by Administrator on 2017/1/6.
 */
window.onload = function(){
    var oContainer = document.getElementById('container');
    var aLi = oContainer.getElementsByTagName('li');
    var aImg = oContainer.getElementsByTagName('img');
    var oNext = document.getElementById('next');
    var oPrev = document.getElementById('prev');
    var oContent = document.getElementById('content');
    var iNow = 0;  //记录当前显示的索引
    var timer;
    var newImg = aImg[0].cloneNode();
    oContent.appendChild(newImg);
    oContent.style.width = aImg[0].offsetWidth * aImg.length +"px" ;



    for(var i=0; i<aLi.length; i++){
        aLi[i].index = i;
        aLi[i].onmouseover = function(){
            changeImg(this.index);
            iNow = this.index;
        }
    }
    function changeImg(index){

        for(var i=0; i<aLi.length; i++){
            aLi[i].className = ''
        }

        aLi[index == aImg.length -1 ? 0:index].className = 'selected';
        animate(oContent,{left:-aImg[0].offsetWidth * index})
        //oContent.style.left = -aImg[0].offsetWidth * index +'px';


    }

    oNext.onclick = function(){
        iNow++;
        if(iNow == aImg.length){
            oContent.style.left = 0;
            iNow = 1;
        }
        changeImg(iNow);
    }
    oPrev.onclick = function(){
        iNow--;
        if(iNow == -1){
            oContent.style.left = -(aImg.length-1) * aImg[0].offsetWidth +"px";
            iNow = aLi.length -2;
        }
        changeImg(iNow);
    }

    timer = setInterval(function(){
        oNext.onclick();
    },2000);
    oContainer.onmouseover = function(){
        clearInterval(timer);
    }
    oContainer.onmouseout = function(){
        timer = setInterval(function(){
            oNext.onclick();
        },2000);
    }
}