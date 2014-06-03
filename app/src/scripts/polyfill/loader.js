yepnope([{
	test: Object.getOwnPropertyNames,
    nope: ['bower_components/es5-shim/es5-shim.min.js', 'src/polyfill/bind.js']
},{
	test : window.JSON,
  	nope : ['bower_components/json3/lib/json3.min.js'],
},{
  	test : Modernizr.mq(''),
  	nope : ['bower_components/respond/dest/respond.min.js']
},{
	test: Modernizr.websockets,
    nope: ['bower_components/sockjs-client/lib/reventtarget.js', 'bower_components/sockjs-client/lib/sockjs.js'],
    callback: function(){
    	window.WebSocket = window.SockJS;
    }
}]);