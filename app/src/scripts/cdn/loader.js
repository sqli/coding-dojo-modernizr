yepnope.errorTimeout = 1000; // set to 1 second error timeout

yepnope([{
    load: '//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js',
    complete: function() {

        var onJQuery = function(){
            window.$ = window.jQuery;         
            for(n in docready) $(document).ready(docready[n]);
        };

        if(window.jQuery){
          onJQuery();
        }else{
          yepnope({
            load: 'bower_components/jquery/jquery.js',
            complete: function(){
              onJQuery();
            }
          });
        }

    }
},{
    load: '//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js',
    complete: function() {
        window.jQuery.fn.modal || yepnope('bower_components/bootstrap/dist/js/bootstrap.js');
    }
}]);