/**
 * Created by Administrator on 2017/2/20.
 */
define(function () {
    function Carousel(config) {
        var index = 0;
        function chaneImg(imgContent,panel,index) {
            imgContent.find('img').eq(index).show().siblings().hide();
            panel.find('li').eq(index).addClass('selected').siblings().removeClass('selected');
        }
        var settings = {
            height:400,
            width:800,
            imgSrc:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
            container:$('body'),
            panelStyle:'square',   //有square和circle两种样式
            btnStyle:'center'      //有center和bottom两种样式
        };
        $.extend(settings,config);
        this.Ccontainer = $('<div class="carousel-container"></div>');
        this.imgContent = $('<div class="carousel-img-content"></div>');
        for(var i=0;i<settings.imgSrc.length;i++){
            if(i==0){
                $('<img src="'+settings.imgSrc[i]+'" class="selected">').appendTo(this.imgContent);
            }
            $('<img src="'+settings.imgSrc[i]+'">').appendTo(this.imgContent);
        }
        this.imgContent.appendTo(this.Ccontainer);
        this.last = $('<span class="carousel-last '+settings.btnStyle+'"></span>').appendTo(this.Ccontainer);
        this.next = $('<span class="carousel-next '+settings.btnStyle+'"></span>').appendTo(this.Ccontainer);
        this.panel = $('<ul class="carousel-panel '+settings.panelStyle+'"></ul>');
        for(i=0;i<settings.imgSrc.length;i++){
            if(settings.panelStyle=='square'){
                $('<li>'+i+'</li>').appendTo(this.panel);
            }else{
                $('<li></li>').appendTo(this.panel);
            }
        }
        this.panel.find('li').eq(0).addClass('selected');
        var that = this;
        this.panel.find('li').on('click',function () {
            index = $(this).index();
            chaneImg(that.imgContent,that.panel,index);

        });
        this.last.on('click',function () {
            index--;
            if(index<0){
                index = settings.imgSrc.length-1;
            }
            chaneImg(that.imgContent,that.panel,index)
        });
        this.next.on('click',function () {
            index++;
            if(index>settings.imgSrc.length-1){
                index = 0;
            }
            chaneImg(that.imgContent,that.panel,index)
        });
        var timer = setInterval(function () {
            that.next.trigger('click');
        },1000);
        this.Ccontainer.on({'mouseover':function () {
            clearInterval(timer)
        },
            'mouserout':function () {
                timer= setInterval(function () {
                    that.next.trigger('click');
                },1000);
            }
        });
        this.panel.appendTo(this.Ccontainer);
        this.Ccontainer.appendTo(settings.container);
    }
    return Carousel;
});