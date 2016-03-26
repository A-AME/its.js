/**
 *  Si.JS Library
 *  Author  : Ali-Amechghal
 *  Created to make your life easy
 * 
 */

(function(root, factory){  
   // AMD Module
   if(typeof define === 'function' && define.amd){
     define(function(){
         return root.si = factory();
      });
   }else if(typeof exports === 'object'){
	   //NodeJS
      module.exports = factory();
   }else{   
	   // Browsers
      root.wenn = factory();
   }
}(this, function(){
   var root  =  this ||  global;
   var previousSI = root.si;

   var si = {};
   si.pas= {};


   si.VERSION = '0.0.0';

   // cache native methods
   var toString =  Object.prototype.toString;
   var nativeSlice = Array.prototype.slice;
   var hasOwnProperty = Object.prototype.hasOwnProperty;


   function pas(func) {
      return function() {
   	   return !func.apply(null, nativeSlice.call(arguments));
      };
   }
    
   /* ███████████████████ Type check functions ███████████████████ */ 

   si.null= function(_value){
      return _value === null;

   }

   si.argument = function(_value){
    return   si.nicht.null(_value) && toString.call(_value) === '[object Arguments]'
	    ||  typeof _value === 'object'  && 'callee' in _value; 
   }

   si.array = function(_value){
      if(Array.isArray)
	      return Array.isArray.call(null, _value);
      else
	      return toString.call(_value) == '[object Array]';
   }
  
   si.boolean = function (_value){
	   return (typeof _value === 'boolean' 
		   || (typeof _value === 'object' && _value.valueOf === 'boolean') )
   }
   
   si.date = function(_value){
	   return (_value instanceof Date || toString.call(_value) === '[object Date]');
   }

   si.error = function (_value){
	   if(_value instanceof Error || toString.call(_value) === '[object Error]')
		   return true;
   }
   si.nan = Number.isNaN || function(_value){
	   return _value !== _value; 
   }
   si.number =  function(_value){
	   return (si.pas.nan(_value) && toString(_value) === '[object Number]');
   }
   si.regexp = function(_value){
	   return toString.call(_value) === '[object RegExp]'
   }
   si.type = function(_valueOne , _valueTwo){
	   if(si.nan(_valueOne) || si.nan(_valueTwo))
		   return si.null(_valueOne()) == si.null(_valueTwo());
	   else
		   return toString.call(_valueOne()) === toString.call(_valueTwo());
   }
   si.function =  function(_value){
	   return toString.call(_value) === '[object Function]';
   }
   
   /* ███████████████████ Date check functions ███████████████████ */ 

   /* ███████████████████ Pattern check functions ███████████████████ */ 
   
   /* ███████████████████ Plat-form check functions ███████████████████ */
   
   function enrichFunctions(){
	   for (var _key in si){
		   if(hasOwnProperty.call(si  , _key) && si.function(si[_key])){
			   si.pas[_key] = pas(si[_key]);
		   }
	   }
   }
   enrichFunctions();
   
  return si;

}));

