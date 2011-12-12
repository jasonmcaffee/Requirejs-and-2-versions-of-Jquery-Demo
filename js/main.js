/**
 * @author Jason McAffee
 * bootstrap requirejs
 */

// Require.js allows us to configure shortcut alias
require.config({
  paths: {
    jquery171module: 'libs/jquery/jquery1.7.1.module',
    jquery163module: 'libs/jquery/jquery1.6.3.module'
  }

});

require([

  // Load our app module and pass it to our definition function
  'app'
], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});