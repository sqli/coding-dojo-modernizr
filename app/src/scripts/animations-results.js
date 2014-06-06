var animation = {

	bounceInLeft : function($element){

		if(Modernizr.csstransitions) {
    		$element.addClass('animated bounceInLeft');
	    }else{
            setTimeout(function(){
                var initialMarginLeft = $element.css('margin-left');
                if(initialMarginLeft === 'auto'){
                    initialMarginLeft = $element.position().left;
                }
                $element.css('margin-left', '-1000px');
                $element.animate({'margin-left': initialMarginLeft}, 500);
            },700); // Respond.js processing delay
	    }

	},

    fadeOut: function($element){

        if(Modernizr.cssanimations) {
            $element.addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $element.remove();
            });
        }else{
            $element.css({
                'z-index': '999999',
                position: 'absolute',
                top: $element.position().top,
                left: $element.position().left - 50
            }).animate({
                top: '110%',
                left: $element.position().left - 100,
                width: $element.width() / 2,
                height: $element.height() / 1.2
            }, 1000, function(){
                $element.remove();
            });
        }

    }

};