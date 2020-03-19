(function($){
	/**
	 * right sidebar sticky scrolling
	 */
	 

	$.fn.stickyBottomSidebar = function(opts){
	 	if( !opts || !opts.mainContainer ) {
	 		console.error('mainContainer is required');
	 		return;
	 	}

	 	if( !opts || !opts.contentReference ) {
			console.error('contentReference is required');
	 		return;
	 	}

		
		var $el = this,
			$mainContainer = $(opts.mainContainer),
			$contentRef = $(opts.contentReference);
		 
		
			
		var previousScroll = 0;

		$(window).on('scroll', function(){
			var currentScroll = $(window).scrollTop();
			
			/**
			 * sticky sidebar only available if the sidebar in not on full width within the main parent container
			 */
			
			if( $contentRef.outerHeight() > $el.outerHeight() && $el.parent().outerWidth() != $mainContainer.outerWidth() ){
				
				if( $el.hasClass('sticky-sidebar') ) {
					var bottom = ( $(document).scrollTop() + $(window).outerHeight() ) - ( $mainContainer.offset().top + $mainContainer.outerHeight() ) ;
					
					
					bottom = bottom > 0 ? bottom : 0;
							
					$el.css({bottom: bottom});
				}

				
				if(previousScroll < currentScroll) {
					if( !$el.hasClass('sticky-sidebar') ) {
						
						var sidebarHeight = $el.outerHeight();
					
						if( $(document).scrollTop() + $(window).outerHeight() >= sidebarHeight + $el.offset().top ) {
							

							$el.addClass('sticky-sidebar').css({position: 'fixed', bottom: 0, width: $el.parent().width()});
						}
					}
				} else {
					if( $el.hasClass('sticky-sidebar') && $el.height() + $el.offset().top < $el.height() + $mainContainer.offset().top) {
						

						$el.removeClass('sticky-sidebar').css({position: 'relative'});
						
						
					}
				}
			}
			


			previousScroll = currentScroll;
		})
		
		

	}
	
})(jQuery);
