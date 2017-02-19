/**
 * Created by Administrator on 2017/2/19.
 */
define(function(){
   return {
       open: function (options) {
            var setting={
                width:400,
                height:300,
                title:"标题"
            };
           $.extend(setting,options);
           var that = this;
           this.$container=$('<div class="container"></div>');
           var $mask=$('<div class="mask"></div>').on('click',function(){
               that.close();
           });
           var $content=$('<div class="content"></div>').css({
               width:setting.width,
               height:setting.height,
               marginLeft:-setting.width/2,
               marginTop:-setting.height/2
           });
           var $title=$('<div class="title"></div>');
           var $left=$('<span class="left">'+setting.title+'</span>');
           var $right=$('<span class="right">[X]</span>').on('click',function(){
               that.close();
           });
           var $main=$('<div class="demo-content"></div>').load(setting.url);
           $title.append($left).append($right);
           $content.append($title).append($main);
           this.$container.append($mask).append($content);
           $(document.body).append(this.$container);
       },
       close:function(){
           this.$container.remove();
       }


   }
});