'use strict';


//������
function sendMsg(){
    $(".sendMsg").on("click",function(){
          var $boxModel = $(".showMsg").find(".hide").clone(true).removeClass("hide");
          var text = $(".wBar").children().val();
          if(text.trim().length > 0 ){
            var imgSrc = $(".headPic").children().attr("src");
            $boxModel.find(".headPic").children().attr("src",imgSrc);
            $boxModel.find(".talkBar").html(text);
            $(".showMsg>ul").prepend($boxModel);
            $(".wBar").children().val("");   
          }

    });
}
// ������
function move(){
  //������
  $("#ComList").niceScroll({
             cursorcolor: "#fff",//#CC0071 �����ɫ
             cursoropacitymax: 1, //�ı䲻͸���ȷǳ���괦�ڻ״̬��scrollabar���ɼ���״̬������Χ��1��0
             touchbehavior: false, //ʹ����϶���������̨ʽ���Դ����豸
             cursorwidth: "5px", //���ع��Ŀ��
             cursorborder: "0", //   �α�߿�css����
             cursorborderradius: "5px",//������Ϊ���߽�뾶
             autohidemode: true //�Ƿ����ع�����
  });
}
//������������Ķ���
function navTop(){     
       //���Ӹ߶�
      var  $box = $(".fontCont").height();
      //һ��DIV�ĸ߶�
      var $aBox = $(".fontCont div").eq(0).outerHeight(true);
      var $width = $(window).width();
      var $height = $(window).height();
      var laternum = 3;
      var beforenum = 2;
      var navTop = "190px";
      if( $height <="740" ){
        laternum = 2;
        beforenum = 1;
      }
      $(".narrowbg").on("click",function (){
        if(!$(".Comment").hasClass("hide")){
          return false;
        }
        var $this = $(this);
        $this.children().addClass("hide");
        $(".movebar")
        .animate({
            zIndex:0,
            marginTop:0
        },200,"jswing",
            function(){
                  var $that = $(this);
                  // alert($that.html());// $(".fontCont").height($aBox*2+"px");
                  $(".fontCont")
                  .animate({
                        height:$aBox*beforenum+"px"
                  },300,"easeInSine");
                  $this.parent()
                  .animate({
                      height:navTop,
                  },400,"jswing",
                  function(){
                        $that.find("img").toggleClass("hide");
                        
                  });
                  $(".transform_text").fadeIn();
                  $(".searchBox").fadeOut();
                  $(".otherBar").fadeIn();
                  
           });
     }); 
     $(".bar").bind("click",function(){
          if($(".unit").css("display") === "block"){
             $(".unit").fadeOut();
             $(".colorpane").fadeOut();
             $(".sortItemsmall").fadeOut();
          }
          var $this = $(this);
          $(".otherBar").fadeOut();
          $(".searchBox").fadeIn();
          $(".transform")
                .animate({
                  height:0
                },400,"easeInSine",
                      function(){
                        var $that = $(this);
                        $that.find(".narrowbg").children("img").toggleClass("hide");
                        $this.find("img").toggleClass("hide");
                     });
          $(".transform_text").fadeOut();
          $(".movebar")
                  .animate({
                    zIndex:-1
                  },400,"jswing",
                        function(){
                            // $(".fontCont")
                            // .animate({
                            //       height:$aBox*3+"px"
                            // },300,"easeInSine");  
                         });
          $(".fontCont")
          .animate({
                height:$aBox*laternum+"px"
          },300,"easeInSine");
     })
}
//������������
function showmore(){
   show($(".lefttalk"),".colorpane");
   show($(".righttalk"),".sortItemsmall");
   $(".closepane").click(function(){
         var $this = $(this);
         var  $pane = $this.offsetParent().children();
         var  $otherpane = $this.offsetParent().siblings().children();
         if($otherpane.css("display") === "none"){
             $pane.fadeOut();
             $(".unit").fadeOut();
         }else{
           $pane.fadeOut();
         }
   });
   // ���溯�����������ϵĺ���
   function show(obj,target){
        obj.click(function(){
          if($(target).css("display") === "none"){
             $(".unit").fadeIn().find(target).fadeIn();
          }else{
             var $anotherpanel = $(target).parent().siblings().children();
             if($anotherpanel.css("display") === "none"){
                  $(".unit").fadeOut();
             }
              $(target).fadeOut();
           }
        });
   }
}
//�ղغ�ϲ��
function mine(){
  ismine($(".jslove"),"jslove","love");
  ismine($(".jscollect"),"jscollect","collect");
  //��װ�ɺ���
  function ismine(obj,a,b){
    obj.click(function(){
        var classname = $(this).attr("class");
        $(this).children("img").attr("src","images/icon/"+classname+".png");
        if(classname === a){
           $(this).addClass(b);
        }else{
          $(this).addClass(a);
        }
        $(this).removeClass(classname);
    });
  }
}