
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

  // Select
	// $('.select').each(function(){
	// 	// Variables
	// 	var $this = $(this),
	// 		selectOption = $this.find('option'),
	// 		selectOptionLength = selectOption.length,
	// 		selectedOption = selectOption.filter(':selected'),
	// 		dur = 300;

	// 	$this.hide();
	// 	// Wrap all in select box
	// 	$this.wrap('<div class="select"></div>');
	// 	// Style box
	// 	$('<div>',{
	// 		class: 'select__gap',
	// 		text: 'Select'
	// 	}).insertAfter($this);
		
	// 	var selectGap = $this.next('.select__gap'),
	// 		caret = selectGap.find('.caret');
	// 	// Add ul list
	// 	$('<ul>',{
	// 		class: 'select__list'
	// 	}).insertAfter(selectGap);		

	// 	var selectList = selectGap.next('.select__list');
	// 	// Add li - option items
	// 	for(var i = 0; i < selectOptionLength; i++){
	// 		$('<li>',{
	// 			class: 'select__item',
	// 			html: $('<span>',{
	// 				text: selectOption.eq(i).text()
	// 			})				
	// 		})
	// 		.attr('data-value', selectOption.eq(i).val())
	// 		.appendTo(selectList);
	// 	}
	// 	// Find all items
	// 	var selectItem = selectList.find('li');

	// 	selectList.slideUp(0);
	// 	selectGap.on('click', function(){
	// 		if(!$(this).hasClass('on')){
	// 			$(this).addClass('on');
	// 			selectList.slideDown(dur);

	// 			selectItem.on('click', function(){
	// 				var chooseItem = $(this).data('value');

	// 				$('select').val(chooseItem).attr('selected', 'selected');
	// 				selectGap.text($(this).find('span').text());

	// 				selectList.slideUp(dur);
	// 				selectGap.removeClass('on');
	// 			});
				
	// 		} else {
	// 			$(this).removeClass('on');
	// 			selectList.slideUp(dur);
	// 		}
	// 	});		
  // });
  
  $(".delivery-dropdown").niceScroll({
    cursorwidth:"2px",
    cursorborder: "2px solid #fff",
    autohidemode: false,
    cursorborderradius: "1px",
    railpadding: 
    {
      top: 20, 
      right: 4,
      left: 0,
      bottom: 20
    }
});
      
  

    // :::::::::::: Popup :::::::::::::
  
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
}
function close_cab(){
  $('.cab-dropdown').hide();
}
function close_modal(e){
  e.preventDefault();
  $('.modal-change').hide(200);
}
function open_modal(event){
  // event.preventDefault();
  $('.modal-change').show(200);
}
