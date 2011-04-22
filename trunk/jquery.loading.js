(function( $ ){
	/**
	 * Animates a div containing a png. 
	 * Every frame change the css property "top" of the internal div
	 * @param {Object} options a json object with optional configurations
	 */
	$.fn.loading = function( options ) {
		var settings = {
			/**
			 * the height of the single frame
			 */
			offset			:		40,
			/**
			 * interval between every frame
			 */
			interval		:		66,
			/**
			 * the selector of the inner 'mobile' container
			 */
			innerSel		:		'div',
			/**
			 * json with attributes of the inner 'mobile' element
			 */
			inner				:		{},
			/**
			 * the direction of the animation horizontal|vertical
			 * default is horizontal, this means that every frame
			 * is under the previuos one; if horizontal the next frame
			 * is right side of the previous
			 */
			animation		:		'vertical'
		};
		
  	return this.each(function(){
			if ( options ) {
				$.extend( settings, options );
			}
			
			var inner = $(this).find(settings.innerSel);
			if (inner.length == 0) {
				inner = $('<div>', settings.inner);
				$(this).prepend(inner);
		  }
			
			if ($(this).is(':visible')){//don't waste resurces while this is not visible
				setInterval(function(){
					if(inner){
						switch (settings.animation) {
							case 'horizontal':
								if(inner.width()+inner.position().left-settings.offset!=0)
									inner.css('left',(inner.position().left-settings.offset)+'px');
								else
									inner.css('left','0px');
							break;
							default:
								if(inner.height()+inner.position().top-settings.offset!=0)
									inner.css('top',(inner.position().top-settings.offset)+'px');
								else
									inner.css('top','0px');
							break;
						}
					}
				}, settings.interval);
			}
		});
	};
	
})(jQuery);