
$(document).ready(function(){


  // $('.main-slider').bxSlider({
  //     speed: 300
  // });

  $('.card-slider-top').bxSlider({
    speed: 300,
    controls: false,
    pagerCustom: '#bx-pager'
  });
 
  $('.first_slider').owlCarousel({
    dots: false,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1500,
    center: true,
    items: 1
  });
  $('.second_slider_right').owlCarousel({
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplaySpeed: 1500,
    margin: 20,
    responsive : {
      0 : {
        items: 3 
      },
      768 : {
        items: 4
      },
      992 : {
        items: 5
      }
    }
  });
  $('.second_slider_left').owlCarousel({
    rtl:true,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1500,
    margin: 20,
    responsive : {
      0 : {
        items: 3
      },
      768 : {
        items: 4
      },
      992 : {
        items: 5
      }
    }
  });
  // $("#secondSliderNext").click(function(){
  //   $(".second_slider").trigger('next.owl.carousel', [500]);
  // })
  // $("#secondSliderPrev").click(function(){
  //     $(".second_slider").trigger('prev.owl.carousel', [500]);
  // })

  $('.third_slider').owlCarousel({
    dots: false,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3800,
    autoplaySpeed: 1500,
    margin: 30,
    responsive : {
      0 : {
        items: 3 
      },
      768 : {
        items: 4
      },
      992 : {
        items: 6
      }
    }
  });
  $('.fourth_slider').owlCarousel({
    rtl:true,
    dots: false,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1300,
    margin: 30,
    responsive : {
      0 : {
        items: 3 
      },
      768 : {
        items: 4
      },
      992 : {
        items: 6
      }
    }
  });
  $('.fifth_slider').owlCarousel({
    dots: false,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplaySpeed: 1300,
    margin: 30,
    responsive : {
      0 : {
        items: 3 
      },
      768 : {
        items: 4
      },
      992 : {
        items: 6
      }
    }
  });

 
      // :::::::::::: Search :::::::::::::
  $('.search').on('click', function(){
    $('.search-input').show().focus();
    $('.search button').show();
    $('.search-img').hide();
    // $('.search-input).focus();
  })
  $(document).on('click', function(e){
    if(e.target != $('.search')[0] && $('.search').has(e.target).length === 0 ){
      $('.search-input').hide();
      $('.search button').hide();
      $('.search-img').show();
    }
  });
    // :::::::::::: Menu :::::::::::::
  $('.close-menu').on('click', function(){
    $('.navigation-mob').hide();
  });



  // :::::::::::: Popup :::::::::::::

  // $('.btn_group .btn_gray').on('click', function(e){
  //   e.preventDefault();
  //   $('.modal-change').hide(200);
  // });

  

    // :::::::::::: Filter :::::::::::::
    // :::::::::::: Catalog :::::::::::::
    
});

function show_this_tab(elem) { 
  $(".card-tab").removeClass("active");
  $(elem).addClass("active");
  // return false;
};
function hide_search(){
  $('.search-input').show().focus();
  $('.search button').show();
  $('.search-img').hide();
};
function close_cab(){
  $('.cab-dropdown').hide();
};
function close_modal_change(e){
  // e.preventDefault();
  $('#my_fucking_modal').hide(200);
};
function open_modal(event){
  // event.preventDefault();
  $('.modal-change').show(200);
};

/*::::::::::::: Main Nav Active links:::::::::::::*/                      
$('.myAccNav a').each(function () {             // получаем все нужные нам ссылки
  var location = window.location.href; // получаем адрес страницы
  var link = this.href;                // получаем адрес ссылки
  if(location == link) {               // при совпадении адреса ссылки и адреса окна
      $('.myAccNav a').removeClass('active')
      $(this).addClass('active');  //добавляем класс
  }
});

/*::::::::::::: Accordeon Active item:::::::::::::*/
$(".purchase .accordeon_content").not(":first").hide();
$(".myChat .accordeon_content").not(":first").hide();
$('.accordeon_head').on('click', function(){
  $(this).toggleClass('active');
  $(this).next('.accordeon_content').slideToggle(400); 
});

/*::::::::::::: chatroom Active item:::::::::::::*/
// $(".purchase_content").not(":first").hide();
// $('.purchase_head').on('click', function(){
//   $(this).toggleClass('active');
//   $(this).next('.purchase_content').slideToggle(400); 
// });


// function open_content(event){
//   $('.purchase_head').toggleClass('active');
//   $('.purchase_head').next('.purchase_content').slideToggle(400);
//   console.log(this)
// };
// $('.my_data_radio label').on('click', function(){
//   // console.log(1)
//   if($('.my_data_radio #company:checked')){
//     $("#my_data_name").text("ИМЯ ФАМИЛИЯ");
//     console.log(1)
//   }else {
//     $("#my_data_name").text("НАЗВАНИЕ");
//   }
// })
$('.my_button').on('click', function(e){
  console.log(1)
  e.preventDefault()
})
