window.onload=function(){var a=new Swiper(".swiper-container",{direction:"vertical",onInit:function(c){swiperAnimateCache(c);swiperAnimate(c)},onSlideChangeEnd:function(c){swiperAnimate(c)}});var b=$("#bgmc").get(0);$(".bgmcBtn").click(function(){if(b.paused){b.play();$(".bgmcBtn img").first().show();$(".bgmcBtn img").last().hide()}else{b.pause();$(".bgmcBtn img").last().show();$(".bgmcBtn img").first().hide()}})};