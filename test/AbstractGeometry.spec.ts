import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";


describe("test  AbstractGeom", () => {
    it("test  AbstractGeom", () => {
        const g = new Point([3.0,4.0]);
        
        const  g2 = new Point([5.0,6.0]);
        const l = new LineString([g,g2]);

        expect(g.asText()).to.equal("POINT(3 4)");
        expect(l.asText()).to.equal("LINESTRING(3 4,5 6)");
        
    });
});