import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([ NaN, NaN ]);
        expect(p.isEmpty()).to.equal(true);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        expect(Number.isNaN(p.translate(1,2)))
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.getType()).to.equal("Point");
        expect(p.isEmpty()).to.equal(false);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(p.translate(1,1).getCoordinate()).to.deep.equal([4.0,5.0]);

    });
    
});

