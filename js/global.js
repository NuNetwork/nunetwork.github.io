(function($) {

			$(document).ready(function(){
				setupMobileNav();
			});

			$(window).resize(function(){
				setupMobileNav();
			});

    function setupMobileNav(){
  
    	$dropdownToggle = $('#navbar-primary-collapse .dropdown-toggle');
  
    	// desktop only
    	if($('.navbar-toggle').is(':visible')){
  	  	$dropdownToggle.on('click', function(){
  	  		$me = $(this);
  	  		if($me.parent().hasClass('open')) {
  	  			$('#navbar-primary-collapse .open').removeClass('open');
  	  		} else {
  	  			$('#navbar-primary-collapse .open').removeClass('open');
  	  			$me.parent().addClass('open');
  	  		}
  	  		return false;
  	  	});
  
  	  // cleanup
    	} else {
    		$('#navbar-primary-collapse .open').removeClass('open');
    	}
    	
    }


  $(document).ready(function(){
    if ($('body').hasClass('front')) {
    console.log('rinnong');
    
			// Video - Open
			$('#hero-content .btn-video').on('click', function(){

				$('.hero').addClass('video-showing');
				
				// Init video
				$('#hero-content .video').find('iframe').prop('src', $('#hero-content .video').find('iframe').attr('data-src'));
				
				$('#hero-content .video')
					.velocity('transition.slideDownBigIn', { 
				    display: 'block',
				    duration: 1200,
				    stagger: 0,
				    delay: 600
				});
				$('#hero-content .hero-logo, #hero-content .block')
					.velocity('transition.slideUpBigOut', { 
				    display: 'none',
				    duration: 590,
				    stagger: 0,
				    delay: 0
				});
				return false;
			});

			// Video - Close
			$(document).on('click', '.video-showing', function() {

				$('.hero').removeClass('video-showing');

				$('#hero-content .video')
					.velocity('transition.slideUpBigOut', { 
				    display: 'none',
				    duration: 600,
				    stagger: 0,
				    delay: 0,
				    complete: function(elements) { $('#hero-content .video').find('iframe').prop('src', ''); } // Disable video
				});
				$('#hero-content .hero-logo, #hero-content .block')
					.velocity('transition.slideDownBigIn', { 
				    display: 'block',
				    duration: 1200,
				    stagger: 0,
				    delay: 600
				});
				return false;
			});
			$('#hero-content .video').on('click', function(e) {
				e.stopPropagation();
			  return false;
			});

			// Hero - Logo
			$('#hero-content .hero-logo')
				.velocity('transition.slideDownBigIn', { 
			    display: null,
			    duration: 1200,
			    stagger: 40,
			    delay: 200
			  });

			// Hero - Headline
			$('#hero-content h1')
				.velocity('transition.fadeIn', { 
			    display: null,
			    duration: 2000,
			    stagger: 40,
			    delay: 400
			  });

			// Hero - Subtitle
			$('#hero-content .caption')
				.velocity('transition.fadeIn', { 
			    display: null,
			    duration: 2000,
			    stagger: 40,
			    delay: 800
			  });

			// Scroll animations
			controller = new ScrollMagic();

			// Scroll animations - Headline
			var tween = TweenMax.to("#block-block-4 h2", 0, {onComplete:function(){
				$("#block-block-4 h2")
				  .blast({ delimiter: 'character' })
				  .velocity('transition.fadeIn', { 
				    display: null,
				    duration: 500,
				    stagger: 25,
				    delay: 100
				  });
			}});
			var scene = new ScrollScene({triggerElement: "#trigger-features"})
							.setTween(tween)
							.addTo(controller);

			// Scroll animations - Headline
			var tween = TweenMax.to("#block-block-2 h2", 0, {onComplete:function(){
				$("#block-block-2 h2")
				  .blast({ delimiter: 'character' })
				  .velocity('transition.fadeIn', { 
				    display: null,
				    duration: 500,
				    stagger: 25,
				    delay: 100
				  });
			}});
			var scene = new ScrollScene({triggerElement: "#trigger-getting-started"})
							.setTween(tween)
							.addTo(controller);

			// Scroll animations - Getting Started
			var tween = TweenMax.to("#getting-started-one", 0, {css:{className:'+=current'}});
			var scene = new ScrollScene({triggerElement: "#getting-started-one"})
							.setTween(tween)
							.addTo(controller);

			// Scroll animations - Getting Started
			var tween = TweenMax.to("#getting-started-two", 0, {css:{className:'+=current'}});
			var scene = new ScrollScene({triggerElement: "#getting-started-two"})
							.setTween(tween)
							.addTo(controller);

			// Scroll animations - Getting Started
			var tween = TweenMax.to("#getting-started-three", 0, {css:{className:'+=current'}});
			var scene = new ScrollScene({triggerElement: "#getting-started-three"})
							.setTween(tween)
							.addTo(controller);

			// Scroll animations - Getting Started
			var tween = TweenMax.to("#getting-started-four", 0, {css:{className:'+=current'}});
			var scene = new ScrollScene({triggerElement: "#getting-started-four"})
							.setTween(tween)
							.addTo(controller);
		
    }
  });

})(jQuery);