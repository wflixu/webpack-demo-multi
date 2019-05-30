console.log('main js');

 if (module.hot) {
   module.hot.accept('./source.js', function(data) {

   

     console.log('~~~~~~~');
     console.log(str);
     
   })
 }

