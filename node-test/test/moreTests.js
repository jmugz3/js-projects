'use strict';

//jshint expr:true

var chai = require('chai'),
    expect = chai.expect;
    
chai.should();


describe('some other test', function () {
    it('should be true', function () {
        expect(true).to.be.true;
    });
});