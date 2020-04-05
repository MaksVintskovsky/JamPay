
$(document).ready(function(){

  let menu = $('nav'),
    bg = $('.bg-popup'),
    popup = $('.popup'),
    filter = $('.filter');

  $('.main-slider').bxSlider({
    // nextText: '<img src="img/slider/slide-right_arrow.png">',
    // prevText: '<img src="img/slider/slide-left_arrow.png">',
    speed: 300
  });

  $('.card-slider-top').bxSlider({
    // nextText: '<img src="img/slider/arr-violet_right.png">',
    // prevText: '<img src="img/slider/arr-violet_left.png">',
    // pager: false,
    speed: 300,
    pagerCustom: '#bx-pager'
  });
 
  $('.product-slider').owlCarousel({
    dots: false,
    nav: true,
    loop:true,
    navText: ["<img src='img/slider/arr-violet_left.png' class='product-slider-prev' alt='1'>","<img src='img/slider/arr-violet_right.png' class='product-slider-next' alt='2'>"],
    responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      940:{
          items:3
      },
      1200:{
          items:4
      }
    }
  });

  $('.views-slider').owlCarousel({
    dots: false,
    nav: true,
    loop:true,
    navText: ["<img src='img/slider/arr-violet_left.png' class='product-slider-prev' alt='1'>",
              "<img src='img/slider/arr-violet_right.png' class='product-slider-next' alt='2'>"],
    responsive:{
      0:{
          items:1
      },
      810:{
          items:2
      },
      1200:{
          items:3
      }
    }
  });
      // :::::::::::: Search :::::::::::::
  $('.search').on('click', function(){
    $('.search-input').show();
    $('.search button').show();
    $('.search-img').hide();
  })
  $(document).on('click', function(e){
    if(e.target != $('.search')[0] && $('.search').has(e.target).length === 0 ){
      $('.search-input').hide();
      $('.search button').hide();
      $('.search-img').show();
    }
  });
  $('.close-menu').on('click', function(){

    $('.navigation-mob').hide();
  })
  
  $(".tab-content").not(":first").hide();
  $(".card-tab").click(function() {
    $(".card-tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab-content").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");
 
      // :::::::::::: Menu :::::::::::::
  

    // :::::::::::: Popup :::::::::::::
  
    // :::::::::::: Filter :::::::::::::
  

    // :::::::::::: Catalog :::::::::::::
    
});