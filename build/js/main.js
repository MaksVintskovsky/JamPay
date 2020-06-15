
$(document).ready(function(){

  
  // $('#datetimepicker1').datetimepicker();
  // $('#datetimepicker4').datetimepicker();

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
});

 // :::::::::::: my_button preventDefaul:::::::::::::
$('.my_button').on('click', function(e){
  e.preventDefault()
})

function show_this_tab(elem) { 
  $(".card-tab").removeClass("active");
  $(elem).addClass("active");
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
  $('#my_fucking_modal').hide(200);
};
function open_modal(event){
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

/*::::::::::::: Textarea:::::::::::::*/
var textarea = document.querySelector('textarea');
textarea.addEventListener('keyup', function(){
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});

/*::::::::::::: Добавление названия файла:::::::::::::*/
function addFileName(){
  var value = $("input[type='file']").val();
  $('.js-value').text(value);
};



// $('#datetimepicker1').datetimepicker();
// $('#datetimepicker4').datetimepicker();


$(function () {
  $('#datetimepicker1').datetimepicker();
  $('#datetimepicker5').datetimepicker();
});