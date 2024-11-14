import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LinseString", () => {
    it("test default constructor", () => {
        const l = new LineString();
        expect(l.getType()).to.equal("LineString");
        expect((l.getNumPoints())).to.equal(0);
        expect((l.getPointN(3))).to.equal(null);
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        const p2 = new Point([4.0,5.0]);
        const l = new LineString([p,p2]);
        expect(l.getType()).to.equal("LineString");
        expect((l.getNumPoints())).to.equal(2);
        expect((l.getPointN(1)).getCoordinate()).to.deep.equal([4.0,5.0]);

    });
    
});

