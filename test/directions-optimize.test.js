const dirReduc = require('../lib/directions-optimize');
const chai = require("chai");
const expect = chai.expect;

describe('Optimizing directions and eliminating unnecessary movements', ()=> {

    it("should return ['WEST']", function() {
      const a = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']
      expect(dirReduc(a)).to.eql(['WEST'])
    });

    it("should return []", function() {
      const b=["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"]
      expect(dirReduc(b)).to.eql([])
    });

    it("should return ['NORTH']", function() {
      const c = ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","NORTH"]
      expect(dirReduc(c)).to.eql(["NORTH"])
    });

    it("should return ['EAST', 'NORTH']", function() {
      const d = ["EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"]
      expect(dirReduc(d)).to.eql(["EAST", "NORTH"])
    });

    it("should return ['NORTH', 'EAST']", function() {
      const e = ["NORTH", "EAST", "NORTH", "EAST", "WEST", "WEST", "EAST", "EAST", "WEST", "SOUTH"]
      expect(dirReduc(e)).to.eql(["NORTH", "EAST"])
    });

    it('should return ["NORTH", "WEST", "SOUTH", "EAST"]', function() {
      const f=["NORTH", "WEST", "SOUTH", "EAST"]
      expect(dirReduc(f)).to.eql(["NORTH", "WEST", "SOUTH", "EAST"])
    });

});
