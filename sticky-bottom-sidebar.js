(function($){
		/**
		 * right sidebar sticky scrolling
		 */
		 

		 $.fn.stickyBottomSidebar = function(opts){
		 	if( !opts || !opts.mainContainer ) {
		 		console.error('mainContainer is required');
		 		return;
		 	}
			
			var $el = this;

			var previousScroll = 0;

			 $(window).on('scroll', function(){
				var currentScroll = $(window).scrollTop();
				
				/**
				 * sticky sidebar only available if the sidebar in not on full width within the main parent container
				 */
				
				if( $el.parent().outerWidth() != $(opts.mainContainer).outerWidth() ){
					if( $el.hasClass('sticky-sidebar') ) {
						var bottom = ( $(document).scrollTop() + $(window).outerHeight() ) - ( $(opts.mainContainer).offset().top + $(opts.mainContainer).outerHeight() ) ;
						
						
						bottom = bottom > 0 ? bottom : 0;
								
						$el.css({bottom: bottom});
					}

					
					if(previousScroll < currentScroll) {
						if( !$el.hasClass('sticky-sidebar') ) {
							
							var sidebarHeight = $el.outerHeight();
						
							if( $(document).scrollTop() + $(window).outerHeight() >= sidebarHeight + $el.offset().top ) {
								

								$el.addClass('sticky-sidebar').css({ bottom: 0, width: $el.parent().width()});
							}
						}
					} else {
						if( $el.hasClass('sticky-sidebar') && $el.height() + $el.offset().top < $el.height() + $(opts.mainContainer).offset().top) {
							

							$el.removeClass('sticky-sidebar');
							
							
						}
					}
				}
				


				previousScroll = currentScroll;
			})

		}
		
	})(jQuery);
