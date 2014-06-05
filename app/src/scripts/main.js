'use strict';

$(document).ready(function () {

    $('.container').load('src/views/main.html', null, function(){

    	animation.bounceInLeft($(this));

        $('.box').find('.close').click(function(){
            var $this = $(this);
            var $element = $this.parent('.' + $this.attr('data-dismiss'));
            animation.fadeOut($element);
        });
    	
    });
    
});