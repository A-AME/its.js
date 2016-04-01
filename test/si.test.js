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
		})
	});
	

});


