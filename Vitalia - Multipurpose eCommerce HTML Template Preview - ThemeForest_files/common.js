$(document).ready(function() {	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
	    	$('.scrollup').fadeIn();
	    } else {
			$('.scrollup').fadeOut();
		}
	}); 
	
	$('.scrollup').on("click", function() {
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
	
	/* Quatity buttons */
	
	$('#q_up').on("click", function() {
		var q_val_up=parseInt($("input#quantity_wanted").val(), 10);
		if(isNaN(q_val_up)) {
			q_val_up=0;
		}
		$("input#quantity_wanted").val(q_val_up+1).keyup(); 
		return false; 
	});
	
	$('#q_down').on("click", function() {
		var q_val_up=parseInt($("input#quantity_wanted").val(), 10);
		if(isNaN(q_val_up)) {
			q_val_up=0;
		}
		
		if(q_val_up>1) {
			$("input#quantity_wanted").val(q_val_up-1).keyup();
		} 
		return false; 
	});
	
	/* Twitter */
	
	twitterFetcher.fetch('345903845311922176', 'twitterFeed', 2, true, false);
	
	/* Carousel Brands */
	
	$('#carousel').owlCarousel({
	     items: 6,
	     autoPlay: 3000,
	     navigation: true,
	     navigationText: false,
	     pagination: true
	});
	
	/* Latest products Carousel */
	
	var owl = $(".box #myCarousel1");
		
	$("#myCarousel1_next").on("click", function() {
	    owl.trigger('owl.next');
	    return false;
	  });
	  
	$("#myCarousel1_prev").on("click", function() {
	    owl.trigger('owl.prev');
	    return false;
	});
	  
	owl.owlCarousel({
	     slideSpeed : 400,
	     itemsCustom : [
	       [0, 1],
	       [480, 2],
	       [700, 3],
	       [1255, 4],
	     ]
	});
	
	/* Featured products Carousel in sport version */
	
	var owl4 = $(".box #myCarousel3");
		
	$("#myCarousel3_next").on("click", function() {
	    owl4.trigger('owl.next');
	    return false;
	  });
	  
	$("#myCarousel3_prev").on("click", function() {
	    owl4.trigger('owl.prev');
	    return false;
	});
	  
	owl4.owlCarousel({
	     slideSpeed : 400,
	     itemsCustom : [
	       [0, 1],
	       [480, 2],
	       [700, 3],
	       [1255, 4],
	     ]
	});
	
	/* Featured products on the left column Carousel */
	
	var owl2 = $(".box #myCarousel2");
		
	$("#myCarousel2_next").on("click", function() {
	    owl2.trigger('owl.next');
	    return false;
	  });
	  
	$("#myCarousel2_prev").on("click", function() {
	    owl2.trigger('owl.prev');
	    return false;
	});
	  
	owl2.owlCarousel({
	     slideSpeed : 400,
	     singleItem: true
	});
	
	/* Featured products Carousel */
	
	var owl3 = $(".box #myCarousel");
		
	$("#myCarousel_next").on("click", function() {
	    owl3.trigger('owl.next');
	    return false;
	  });
	  
	$("#myCarousel_prev").on("click", function() {
	    owl3.trigger('owl.prev');
	    return false;
	});
	  
	owl3.owlCarousel({
	     slideSpeed : 400,
	     items : 6
	});
});

/* Camera slider */

var camera_slider = $("#camera_wrap");
     
camera_slider.owlCarousel({
     slideSpeed : 300,
     lazyLoad : true,
     singleItem: true,
     autoPlay: 7000,
     stopOnHover: true,
     navigation: true
});
     
$(window).load(function() {
     $("#camera .spinner").fadeOut(200);
     $("#camera_wrap").css("height", "auto");
});	