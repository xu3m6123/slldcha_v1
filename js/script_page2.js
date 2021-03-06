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
  $('#f3_svg_a1').hover(function () { f3_svg1Anim.goToAndPlay(1, 10) });
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
  $('#f3_svg_a2').hover(function () { f3_svg2Anim.goToAndPlay(1, 10) });
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
  $('#f3_svg_a3').hover(function () { f3_svg3Anim.goToAndPlay(1, 10) });
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
  $('#f3_svg_a4').hover(function () { otherAnim.goToAndPlay(1, true) });
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
  $('#f3_svg_a5').hover(function () { f3_svg5Anim.goToAndPlay(1, 10) });
  //以上svg3

  $('#bm').click(function () {
    $('#bm').toggleClass('btn_move');
    if ($('#bm').hasClass('btn_move') == true) {
      openingAnim.setDirection(1);
      openingAnim.play();
    } else {
      openingAnim.setDirection(-1);
      openingAnim.play();
    }

    $('#navlist').toggleClass('listmove');
  });

  //以上320選單
  $('#font_v1').click(function () {
    if ($('#nav_ul_flex2').hasClass('nav_ul_flex2_show')) {
      $('#nav_ul_flex2').fadeOut('fast');
      $('#nav_ul_flex2').slideUp('fast');
      $('#nav_ul_flex2').removeClass('nav_ul_flex2_show');
    } else {
      $('#nav_ul_flex2').slideDown('fast');
      $('#nav_ul_flex2').addClass('nav_ul_flex2_show');
    }
    //以上大於768適用
    if ($('#bm').hasClass('btn_move')) {
      $('#nav_btn2').toggleClass('nav_btn_move');
      $('#nav_btn3').toggleClass('nav_btn_move');
    }
    //以上320選單
  });
  $('#nav_ul_flex2').mouseleave(function () {
    if ($('#nav_ul_flex2').hasClass('nav_ul_flex2_show')) {
      $('#nav_ul_flex2').fadeOut('fast');
      $('#nav_ul_flex2').slideUp('fast');
      $('#nav_ul_flex2').removeClass('nav_ul_flex2_show');
      //以上大於768適用
      if ($('#bm').hasClass('btn_move')) {
        $('#nav_btn2').toggleClass('nav_btn_move');
        $('#nav_btn3').toggleClass('nav_btn_move');
      }
    }
  });
  $('a:not(#font_v1)').click(function () {
    if ($('#nav_ul_flex2').hasClass('nav_ul_flex2_show')) {
      $('#nav_ul_flex2').fadeOut('fast');
      $('#nav_ul_flex2').slideUp('fast');
      $('#nav_ul_flex2').removeClass('nav_ul_flex2_show');
      //以上大於768適用
      if ($('#bm').hasClass('btn_move')) {
        $('#nav_btn2').toggleClass('nav_btn_move');
        $('#nav_btn3').toggleClass('nav_btn_move');
      }
    }
  });
  //以上font_v1
  $('#art_f2_btn').click(function () {
    document.location.href = './page2_1.html';
  });
  //以上art_f2
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1,
      },
      768: {
        items: 1
      },
      1280: {
        items: 1
      }
    }
  });
  //以上art_f1
  $('#gotop_btnsvg').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 300);
  });
  /*$(window).scroll(function() {//如果要跟隨螢幕移動
    if ( $(this).scrollTop() > 300 ){
      $('#gotop_btnsvg').fadeIn(222);
    } else {
      $('#gotop_btnsvg').stop().fadeOut(222);
    }
  }).scroll();*/
  
  //以上回頂端
  let controller = new ScrollMagic.Controller();

  // set Timeline
  let time_art2 = new TimelineMax()
    .from('#mainbox1', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", y: 50 })
  let time_art2_goods = new TimelineMax()
    .from('#list1_1', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", x: -30, delay: 0.8 })
    .from('#list1_2', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", x: -30 })
    .from('#list1_3', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", x: -30 })
    .from('#list1_4', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", x: -30 })
    .from('#art_f2_btn', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", x: -30 }, '-=0.3')
    .to('#art_f2_btn', 0.1, { duration: 0.1, autoAlpha: 1, ease: "sine.in", x: 10 })
    .to('#art_f2_btn', 0.1, { duration: 0.1, autoAlpha: 1, ease: "sine.in", x: 0 })

  let time_art3 = new TimelineMax()
    .from('#mainbox2', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", x: -50 })
  let time_art3_goods = new TimelineMax()
    .from('#list2_1', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", y: 50, delay: 0.8 })
    .from('#list2_2', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", y: 50 })
    .from('#list2_3', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", y: 50 })
    .from('#list2_4', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", y: 50 })
    .from('#art_f2_btn2', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", y: 50 }, '-=0.3')
    .to('#art_f2_btn2', 0.1, { duration: 0.1, autoAlpha: 1, ease: "sine.in", y: -10 })
    .to('#art_f2_btn2', 0.1, { duration: 0.1, autoAlpha: 1, ease: "sine.in", y: 0 })

  let time_art4 = new TimelineMax()
    .from('#mainbox3', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", y: 50 })
  let time_art4_goods = new TimelineMax()
    .from('#list3_1', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", x: -30, delay: 0.8 })
    .from('#list3_2', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", x: -30 })
    .from('#list3_3', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", x: -30 })
    .from('#list3_4', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", x: -30 })
    .from('#art_f2_btn3', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", x: -30 }, '-=0.3')
    .to('#art_f2_btn3', 0.1, { duration: 0.1, autoAlpha: 1, ease: "sine.in", x: 10 })
    .to('#art_f2_btn3', 0.1, { duration: 0.1, autoAlpha: 1, ease: "sine.in", x: 0 })

  let time_art5 = new TimelineMax()
    .from('#mainbox4', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", x: -50 })
  let time_art5_goods = new TimelineMax()
    .from('#list4_1', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", y: 50, delay: 0.8 })
    .from('#list4_2', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", y: 50 })
    .from('#list4_3', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", y: 50 })
    .from('#list4_4', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", y: 50 })
    .from('#art_f2_btn4', 0.5, { duration: 0.5, autoAlpha: 0, ease: "sine.in", y: 50 }, '-=0.3')
    .to('#art_f2_btn4', 0.1, { duration: 0.1, autoAlpha: 1, ease: "sine.in", y: 10 })
    .to('#art_f2_btn4', 0.1, { duration: 0.1, autoAlpha: 1, ease: "sine.in", y: 0 })

  // build ScrollMagic scene
  new ScrollMagic.Scene({
    triggerHook: 'onLeave',
    triggerElement: '#art_f1',
  })
    .setTween(time_art2)
    .addTo(controller)
  new ScrollMagic.Scene({
    triggerHook: 'onCenter',
    triggerElement: '#art_f2',
  })
    .setTween(time_art2_goods)
    .addTo(controller)
//以上art_f2滾動
  new ScrollMagic.Scene({
    triggerHook: 'onCenter',
    triggerElement: '#art_f3',
  })
    .setTween(time_art3)
    .addTo(controller)
  new ScrollMagic.Scene({
    triggerHook: 'onCenter',
    triggerElement: '#art_f3',
  })
    .setTween(time_art3_goods)
    .addTo(controller)
//以上art_f3滾動
new ScrollMagic.Scene({
  triggerHook: 'onCenter',
  triggerElement: '#art_f4',
})
  .setTween(time_art4)
  .addTo(controller)
new ScrollMagic.Scene({
  triggerHook: 'onCenter',
  triggerElement: '#art_f4',
})
  .setTween(time_art4_goods)
  .addTo(controller)
//以上art_f4滾動
new ScrollMagic.Scene({
  triggerHook: 'onCenter',
  triggerElement: '#art_f5',
})
  .setTween(time_art5)
  .addTo(controller)
  //.addIndicators();
new ScrollMagic.Scene({
  triggerHook: 'onCenter',
  triggerElement: '#art_f5',
})
  .setTween(time_art5_goods)
  .addTo(controller)
//以上art_f5滾動
  
  //以上滾動式

});
