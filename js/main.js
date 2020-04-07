
$(document).ready(function(){


  // $('.main-slider').bxSlider({
  //     speed: 300
  // });

  $('.card-slider-top').bxSlider({
    speed: 300,
    controls: false,
    pagerCustom: '#bx-pager'
  });
 
  // $('.product-slider').owlCarousel({
  //   dots: false,
  //   nav: true,
  //   loop:true,
  //   navText: ["<img src='img/slider/arr-violet_left.png' class='product-slider-prev' alt='1'>","<img src='img/slider/arr-violet_right.png' class='product-slider-next' alt='2'>"],
  //   responsive:{
  //     0:{
  //         items:1
  //     },
  //     768:{
  //         items:2
  //     },
  //     940:{
  //         items:3
  //     },
  //     1200:{
  //         items:4
  //     }
  //   }
  // });

 
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
  $('.close-menu').on('click', function(){

    $('.navigation-mob').hide();
  })
  
  // $(".tab-content").not(":first").hide();
  $(".card-tab").click(function() {
    $(".card-tab").removeClass("active").eq($(this).index()).addClass("active");
    // $(".tab-content").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");

  // Select
	$('.select').each(function(){
		// Variables
		var $this = $(this),
			selectOption = $this.find('option'),
			selectOptionLength = selectOption.length,
			selectedOption = selectOption.filter(':selected'),
			dur = 300;

		$this.hide();
		// Wrap all in select box
		$this.wrap('<div class="select"></div>');
		// Style box
		$('<div>',{
			class: 'select__gap',
			text: 'Select'
		}).insertAfter($this);
		
		var selectGap = $this.next('.select__gap'),
			caret = selectGap.find('.caret');
		// Add ul list
		$('<ul>',{
			class: 'select__list'
		}).insertAfter(selectGap);		

		var selectList = selectGap.next('.select__list');
		// Add li - option items
		for(var i = 0; i < selectOptionLength; i++){
			$('<li>',{
				class: 'select__item',
				html: $('<span>',{
					text: selectOption.eq(i).text()
				})				
			})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
		}
		// Find all items
		var selectItem = selectList.find('li');

		selectList.slideUp(0);
		selectGap.on('click', function(){
			if(!$(this).hasClass('on')){
				$(this).addClass('on');
				selectList.slideDown(dur);

				selectItem.on('click', function(){
					var chooseItem = $(this).data('value');

					$('select').val(chooseItem).attr('selected', 'selected');
					selectGap.text($(this).find('span').text());

					selectList.slideUp(dur);
					selectGap.removeClass('on');
				});
				
			} else {
				$(this).removeClass('on');
				selectList.slideUp(dur);
			}
		});		
  });
  
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
      // :::::::::::: Menu :::::::::::::
  

    // :::::::::::: Popup :::::::::::::
  
    // :::::::::::: Filter :::::::::::::
  

    // :::::::::::: Catalog :::::::::::::
    
});