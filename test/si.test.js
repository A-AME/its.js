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
		})
	});


	describe('si.pas.boolean', function(){
		it('it should return true if a given value is not boolean', function(){
			expect(si.pas.boolean(true)).to.be.false;
			expect(si.pas.boolean(new Boolean())).to.be.false;
			expect(si.pas.boolean(null)).to.be.true;
			expect(si.pas.boolean('')).to.be.true;
			expect(si.pas.boolean('dummy')).to.be.true;
		})
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
			
			
		})
	})

});


