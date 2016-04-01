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
});


