'use strict';

$(document).ready(function () {

    var states = {
        MAIN: {
            selector: '.container',
            name: 'main'
        }
    };

    var loadState = function(state){
        $(state.selector).load('src/views/' + state.name + '.html');
    };

    loadState(states.MAIN);
});