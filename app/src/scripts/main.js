'use strict';

$(document).ready(function () {

    $('.container').load('src/views/main.html', null, function(){

    	animation.bounceInLeft($(this));
    	
    });
    
});