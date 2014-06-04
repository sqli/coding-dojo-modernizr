var animation = {
	bounceInLeft : function($element){
		if(Modernizr.csstransitions) { 
    		$element.addClass('animated bounceInLeft');
	    }else{
	    	var polyfillAnimation = function(initialMarginLeft){
				$element.css('margin-left', '-1000px');
				$element.animate({'margin-left': initialMarginLeft}, 500);
	    	};
	    	var initialMarginLeft = $element.css('margin-left');
	    	if(initialMarginLeft === 'auto'){//IE8 polyfill respond slowly
	    		setTimeout(function(){
		    		polyfillAnimation($element.position().left);
	    		},150);
	    	}else{//IE9
	    		polyfillAnimation(initialMarginLeft)
	    	}
	    }
	}
};