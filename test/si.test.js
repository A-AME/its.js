/**
 *  Si.JS Library - Unit Tests
 *  Author  : Ali-Amechghal
 *  Created to make your life easy
 * 
 */
var expect = require('chai').expect;
var si =  require('../si.js');

describe('type checks', function(){
	describe('si.arguments' , function (){
		it('should return true if passed parameter is an argument', function(){
			var args =  function(){
				return arguments;
			}();
			expect(si.argument(args)).to.be.true;
		});
	})
	describe('si.pas.argument', function(){
		it('should return true if passed argument is not an argument', function(){
			var notargs = {};
			expect(si.pas.argument(notargs)).to.be.true;
		});
	});
	describe('si.array && si.pas.array' , function(){
		it('it should return true if its passed argument is an array', function(){
			var arr =  new Array();
			var arrStd = [];

			expect(si.array(arr)).to.be.true;
			expect(si.array(arrStd)).to.be.true;
			expect(si.pas.array(arr)).to.be.false;
			expect(si.pas.array(arrStd)).to.be.false;
			
		});

	});
	describe('si.boolean', function(){
		it('it should return true if a given value is boolean', function(){
			expect(si.boolean(true)).to.be.true;
			expect(si.boolean(new Boolean())).to.be.true;
			expect(si.boolean(null)).to.be.false;
			expect(si.boolean('')).to.be.false;
			expect(si.boolean('dummy')).to.be.false;
		});
	});


	describe('si.pas.boolean', function(){
		it('it should return true if a given value is not boolean', function(){
			expect(si.pas.boolean(true)).to.be.false;
			expect(si.pas.boolean(new Boolean())).to.be.false;
			expect(si.pas.boolean(null)).to.be.true;
			expect(si.pas.boolean('')).to.be.true;
			expect(si.pas.boolean('dummy')).to.be.true;
		});
	});


	describe('si.date && si.pas.date', function(){
		it('it should return true if a give  value is a date', function(){
			expect(si.date(new Date())).to.be.true;
			expect(si.date('')).to.be.false;	
			expect(si.date('')).to.be.false;
			expect(si.date(null)).to.be.false;

			expect(si.pas.date(new Date())).to.be.false;
			expect(si.pas.date('')).to.be.true;
			expect(si.pas.date('')).to.be.true;
			expect(si.pas.date(null)).to.be.true;
			
		});
	});
	describe('si.error & si.pas.error', function(){
		it('it should return true if a given value is an Error type', function(){
			expect(si.error(new Error())).to.be.true;
			expect(si.error(new SyntaxError())).to.be.true;
			expect(si.error(new SyntaxError('Error message'))).to.be.true;
			expect(si.error('')).to.be.false;

            expect(si.pas.error(new Error())).to.be.false;
			expect(si.pas.error(new SyntaxError())).to.be.false;
			expect(si.pas.error(new SyntaxError('Error message'))).to.be.false;
			expect(si.pas.error('')).to.be.true;

		});
	});

	describe('si.nan', function(){
		it('it should return true if a given parameter is NaN', function(){
			expect(si.nan(Number.NaN)).to.be.true;
			expect(si.nan(Number.MAX_VALUE)).to.be.false;
			expect(si.nan(Number.MIN_VALUE)).to.be.false;
			expect(si.nan('')).to.be.false;
			expect(si.nan('god bless numbers')).to.be.false;
			expect(si.nan(null)).to.be.false;
			expect(si.nan(0)).to.be.false;
			expect(si.nan(new Number())).to.be.false;

  			expect(si.pas.nan(Number.NaN)).to.be.false;
			expect(si.pas.nan(Number.MAX_VALUE)).to.be.true;
			expect(si.pas.nan(Number.MIN_VALUE)).to.be.true;
			expect(si.pas.nan('')).to.be.true;
			expect(si.pas.nan('god bless Numbers')).to.be.true;
			expect(si.pas.nan(null)).to.be.true;
			expect(si.pas.nan(0)).to.be.true;
			expect(si.pas.nan(new Number())).to.be.true;
		});
	});

	describe('si.number & si.pas.number', function(){
		it('it should return true if a given parameter is an number', function(){
			expect(si.number(1.2)).to.be.true;
			expect(si.number(122222)).to.be.true;
			expect(si.number(-12)).to.be.true;
			expect(si.number(new Number())).to.be.true;
			expect(si.number(Number.NaN)).to.be.false;
			expect(si.number('1.2')).to.be.false;
			expect(si.number(null)).to.be.false;

			expect(si.pas.number(1.2)).to.be.false;
			expect(si.pas.number(122222)).to.be.false;
			expect(si.pas.number(-12)).to.be.false;
			expect(si.pas.number(new Number())).to.be.false;
			expect(si.pas.number(Number.NaN)).to.be.true;
			expect(si.pas.number('1.2')).to.be.true;
			expect(si.pas.number(null)).to.be.true;
		});
	});
	describe('si.regexp && si.pas.regexp', function(){
		it('it should return true if a given parameter is a regexp', function(){
			expect(si.regexp(new RegExp())).to.be.true;
			expect(si.regexp(/^[A-Za-z0-9]+$/)).to.be.true;
			expect(si.regexp('/^[A-Za-z0-9]+$/')).to.be.false;

			expect(si.pas.regexp(new RegExp())).to.be.false;
			expect(si.pas.regexp(/^[A-Za-z0-9]+$/)).to.be.false;
			expect(si.pas.regexp('/^[A-Za-z0-9]+$/')).to.be.true;
			
		});
	});
	describe('si.sameType & si.pas.sameType', function(){
		it('it should return true if a given arguments have the same type', function(){
			expect(si.sameType('','')).to.be.true;
			expect(si.sameType('', null)).to.be.false;
			expect(si.sameType('',2)).to.be.false;
			expect(si.sameType('',undefined)).to.be.false;
			expect(si.sameType(null , null)).to.be.true;
			expect(si.sameType(Number.MAX_VALUE, Number.MIN_VALUE)).to.be.true;

			expect(si.pas.sameType('','')).to.be.false;
			expect(si.pas.sameType('', null)).to.be.true;
			expect(si.pas.sameType('',2)).to.be.true;
			expect(si.pas.sameType('',undefined)).to.be.true;
			expect(si.pas.sameType(null , null)).to.be.false;
			expect(si.pas.sameType(Number.MAX_VALUE, Number.MIN_VALUE)).to.be.false;

		});
	});
	describe('si.function & si.pas.function', function(){
		it('it should return true if a given value is a function',function(){
			expect(si.function(function(){})).to.be.true;
			expect(si.function(Object.toString)).to.be.true;
			expect(si.function(Object.toString())).to.be.false;


			expect(si.pas.function(function(){})).to.be.false;
			expect(si.pas.function(Object.toString)).to.be.false;
			expect(si.pas.function(Object.toString())).to.be.true;

		});
	});
});


