import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import GeometryWithCachedEnvelope from "../src/GeometryWithCachedEnvelope";

describe("test  GeometryWithCache", () => {
    it("test  GeometryWithCache", () => {

        const g = new Point([3.0,3.0]);
        const g2 = new GeometryWithCachedEnvelope(g);
        
        
        const a = g2.getEnvelope() ; // calcul et stockage dans cachedEnvelope
        const b = g2.getEnvelope() ; // renvoi de cachedEnvelope
        // a et b sont la même instance

        expect(a).to.equal(b);
        
    });
});


