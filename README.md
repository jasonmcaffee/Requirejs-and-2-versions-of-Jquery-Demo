# Using Requirejs to Load 2 Isolated Versions of Jquery
Simple demonstration using requirejs to load 2 isolated versions of jquery.

## Project Structure
<img src="http://github.com/downloads/jasonmcaffee/Requirejs-and-2-versions-of-Jquery-Demo/demoProjectStructure.png" alt="project structure" />

## Usage Example
Loading 2 isolated versions of jquery is pretty simple. First you need to wrap jquery in as an AMD compliant module.
This shows one of the great advantages of the AMD API that requirejs provides us.
More info can be found here: [CommonJS Asynchronous Definition](http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition) and here [RequireJS](http://requirejs.org/)

### Wrap Non-Compliant AMD Modules (e.g. jquery) With an AMD Module
Note: using the order! requirejs plugin is needed to accomplish this, as it ensures that jquery is loaded before it's module wrapper is executed.

``` javascript
//file: libs/jquery/jquery1.6.3.module.js
define([
	// Load the original jQuery source file
	  'order!libs/jquery/jquery1.6.3.min'
	], 
	function(){
	  // Tell Require.js that this module returns a reference to jQuery
	  return $;//return the global scope object
	});
```

### Load 2 Versions of Jquery
Now we can load the 2 versions of jquery 

``` javascript
     //demonstrate loading 2 versions of jquery into a module
  	 require([
		  'libs/jquery/jquery1.7.1.module',
		  'libs/jquery/jquery1.6.3.module'
		 ], 
		 function($171, $163){
			alert('I have jquery version : ' + $171.fn.jquery + ' and jquery version : ' + $163.fn.jquery + ' successfully loaded.');
		 });
```

### Demo
Demo of this code running can be found here : [RequireJS & Multiple Versions of Jquery Demo](http://jasonmcaffee.com/requireMultipleVersionsOfJquery/index.html)

# [Jason McAffee](http://codeceratops.jasonmcaffee.com)
