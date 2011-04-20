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
			innerSel		:		'div'
		};
		
  	return this.each(function(){
			if ( options ) {
				$.extend( settings, options );
			}
			
			var inner = $(this).find(settings.innerSel);
			//TODO: if inner is empty add a new div
			if ($(this).is(':visible')){//don't waste resurces while this is not visible
				setInterval(function(){
//					var offset = 40;
					if(inner){
						if(inner.height()+inner.position().top-settings.offset!=0)
							inner.css('top',(inner.position().top-settings.offset)+'px');
						else
							inner.css('top','0px');
					}
				}, settings.interval);
			}
		});
	}
	
})(jQuery);