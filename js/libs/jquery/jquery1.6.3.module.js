/**
 * @author Jason McAffee
 * wrap jquery to expose it as a module so that it can be loaded like any other AMD module
 */

define([
	// Load the original jQuery source file
	  'order!libs/jquery/jquery1.6.3.min'
	], 
	function(){
	  // Tell Require.js that this module returns a reference to jQuery
	  return $;
	});