'use strict';

$(document).ready(function () {

  let load_svg = document.querySelector('#load_svg');
    let load_svgAnimData = {
      container: load_svg,
      animType: 'svg',
      loop: true,
      prerender: true,
      autoplay: true,
      // path: 'json/download-icon.json'
      path: 'https://assets6.lottiefiles.com/packages/lf20_V2IUq7.json'
    };
    // set bodymovin
    let load_svgAnim = bodymovin.loadAnimation(load_svgAnimData);
    load_svgAnim.setSpeed(0.7);
    //以上loading

    // Load JSON file
    let bmc = document.querySelector('#bm');
    let openingAnimData = {
      container: bmc,
      animType: 'svg',
      loop: false,
      prerender: true,
      autoplay: false,
      // path: 'json/download-icon.json'
      path: 'https://assets4.lottiefiles.com/packages/lf20_6O5wOF.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);
    openingAnim.setSpeed(0.5);
    //以上navbtn

    let f3_svg_v1 = document.querySelector('#f3_svg_v1');
    let f3_svg1AnimData = {
      container: f3_svg_v1,
      animType: 'svg',
      loop: false,
      prerender: true,
      autoplay: false,
      // path: 'json/download-icon.json'
      path: 'https://assets10.lottiefiles.com/packages/lf20_Fg2Tl2.json'
    };
    // set bodymovin
    let f3_svg1Anim = bodymovin.loadAnimation(f3_svg1AnimData);
    f3_svg1Anim.setSpeed(0.7);
    $('#f3_svg_a1').hover(function(){f3_svg1Anim.goToAndPlay(1, 10)});
    //以上svg1

    let f3_svg_v2 = document.querySelector('#f3_svg_v2');
    let f3_svg2AnimData = {
      container: f3_svg_v2,
      animType: 'svg',
      loop: false,
      prerender: true,
      autoplay: false,
      // path: 'json/download-icon.json'
      path: 'https://assets5.lottiefiles.com/packages/lf20_bNdoOS.json'
    };
    // set bodymovin
    let f3_svg2Anim = bodymovin.loadAnimation(f3_svg2AnimData);
    f3_svg2Anim.setSpeed(0.7);
    $('#f3_svg_a2').hover(function(){f3_svg2Anim.goToAndPlay(1, 10)});
    //以上svg2

    let f3_svg_v3 = document.querySelector('#f3_svg_v3');
    let f3_svg3AnimData = {
      container: f3_svg_v3,
      animType: 'svg',
      loop: false,
      prerender: true,
      autoplay: false,
      // path: 'json/download-icon.json'
      path: 'https://assets1.lottiefiles.com/packages/lf20_8E0YK5.json'
    };
    // set bodymovin
    let f3_svg3Anim = bodymovin.loadAnimation(f3_svg3AnimData);
    f3_svg3Anim.setSpeed(0.7);
    $('#f3_svg_a3').hover(function(){f3_svg3Anim.goToAndPlay(1, 10)});
    //以上svg3

    let f3_svg = document.querySelector('#f3_svg_v4');
    let otherAnimData = {
      container: f3_svg,
      animType: 'svg',
      loop: false,
      prerender: true,
      autoplay: false,
      // path: 'json/download-icon.json'
      path: 'https://assets1.lottiefiles.com/packages/lf20_bkARoO.json'
    };
    // set bodymovin
    let otherAnim = bodymovin.loadAnimation(otherAnimData);
    otherAnim.setSpeed(0.7);
    //$('#f3_svg_a4').hover(function(){otherAnim.goToAndPlay(1, 140)});
    $('#f3_svg_a4').hover(function(){otherAnim.goToAndPlay(1, true)});
    //$('#f3_svg_a4').hover(function(){$('#f3_svg_v4').loop(function(){otherAnim.play();})});
    //以上svg4

    let f3_svg_v5 = document.querySelector('#f3_svg_v5');
    let f3_svg5AnimData = {
      container: f3_svg_v5,
      animType: 'svg',
      loop: false,
      prerender: true,
      autoplay: false,
      // path: 'json/download-icon.json'
      path: 'https://assets1.lottiefiles.com/packages/lf20_B6RlPi.json'
    };
    // set bodymovin
    let f3_svg5Anim = bodymovin.loadAnimation(f3_svg5AnimData);
    f3_svg5Anim.setSpeed(0.7);
    $('#f3_svg_a5').hover(function(){f3_svg5Anim.goToAndPlay(1, 10)});
    //以上svg3

    $('#bm').click(function(){
      $('#bm').toggleClass('btn_move');
      if($('#bm').hasClass('btn_move')==true){
        openingAnim.setDirection(1);
        openingAnim.play();
      }else{
        openingAnim.setDirection(-1);
        openingAnim.play();
      }
     
      $('#navlist').toggleClass('listmove');
    });

    //以上320選單
    $('#font_v1').click(function(){
      if($('#nav_ul_flex2').hasClass('nav_ul_flex2_show')){
        $('#nav_ul_flex2').fadeOut('fast');
        $('#nav_ul_flex2').slideUp('fast');
        $('#nav_ul_flex2').removeClass('nav_ul_flex2_show');
        $('#font_v1').removeClass('font_v1_cango');
      }else{
        $('#nav_ul_flex2').slideDown('fast');
        $('#nav_ul_flex2').addClass('nav_ul_flex2_show');
        $('#font_v1').addClass('font_v1_cango');
      }
      //以上大於768適用
      if($('#bm').hasClass('btn_move')){
        $('#nav_btn2').toggleClass('nav_btn_move');
        $('#nav_btn3').toggleClass('nav_btn_move');
      }
      //以上320選單
  });
  $('#nav_ul_flex2').mouseleave(function(){
    if($('#nav_ul_flex2').hasClass('nav_ul_flex2_show')){
      $('#nav_ul_flex2').fadeOut('fast');
      $('#nav_ul_flex2').slideUp('fast');
      $('#nav_ul_flex2').removeClass('nav_ul_flex2_show');
      $('#font_v1').removeClass('font_v1_cango');
    //以上大於768適用
      if($('#bm').hasClass('btn_move')){
        $('#nav_btn2').toggleClass('nav_btn_move');
        $('#nav_btn3').toggleClass('nav_btn_move');
      }
    }
});
  $('a:not(#font_v1)').click(function(){
    if($('#nav_ul_flex2').hasClass('nav_ul_flex2_show')){
        $('#nav_ul_flex2').fadeOut('fast');
      $('#nav_ul_flex2').slideUp('fast');
      $('#nav_ul_flex2').removeClass('nav_ul_flex2_show');
      $('#font_v1').removeClass('font_v1_cango');
//以上大於768適用
      if($('#bm').hasClass('btn_move')){
        $('#nav_btn2').toggleClass('nav_btn_move');
        $('#nav_btn3').toggleClass('nav_btn_move');
      }
    }
});
$('#font_v1').mousedown(function(){
  if($('#font_v1').hasClass('font_v1_cango')){
    if($('#nav_ul_flex2').hasClass('nav_ul_flex2_show')){
    document.location.href='./page2.html';}
  }
});
$('#font_v1').on('taphold',function(){
    if($('#nav_ul_flex2').hasClass('nav_ul_flex2_show')){
      document.location.href='./page2.html';}
});
//以上font_v1

$('#art_f1').mousemove(function(e){
    var mousex=e.pageX;
    //$('#test').offset({left:$('#art_f1').width()/10*mousex});
    $('#test').css('background-position', mousex*-1/100 + 'px ');
    $('#test1').css('background-position', mousex*-1/4 + 'px ');
    $('#test2').css('background-position', mousex*-1/10 + 'px ');
  });
//以上test，讓物件跟隨滑鼠移動

$('#gotop_btnsvg').click(function(){ 
  $('html,body').animate({scrollTop:0}, 300);
});
//以上回頂端

  let controller = new ScrollMagic.Controller();
  // set Timeline
  let time_art1 = new TimelineMax()
                .to('#f1_img',1,{duration: 0.5,autoAlpha:1,ease: "sine.in",y:300});
  // build ScrollMagic scene
  new ScrollMagic.Scene({ 

    triggerHook: 'onLeave',
    triggerElement: '#art_f1',
    duration: '100%'
  })
  .setTween(time_art1)
  .setPin('#page1', { pushFollowers: false })
  //.addIndicators()
  .addTo(controller)
        //以上滾動式
        $(function() {
          var $li = $("ul.tab-title li");
          $(
            $li
              .eq(0)
              .addClass("active")
              .find("a")
              .attr("href")
          )
            .siblings(".tab-inner")
            .hide();
        
          $li.click(function() {
            $(
              $(this)
                .find("a")
                .attr("href")
            )
              .show()
              .siblings(".tab-inner")
              .hide();
            $(this)
              .addClass("active")
              .siblings(".active")
              .removeClass("active");
          });
        });
        //
});