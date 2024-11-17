import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryCollection from "../src/GeometryCollection";
import WktVisitor from "../src/WktVisitor";


describe("test  GeometryCollection", () => {
    it("test  GeometryCollection", () => {
        const g = new Point([3.0,4.0]);
        
        const  g2 = new Point([5.0,6.0]);
        const l = new LineString([g,g2]);

        expect(g.asText()).to.equal("POINT(3 4)");
        expect(l.asText()).to.equal("LINESTRING(3 4,5 6)");

        const visitor = new WktVisitor();
        const geometry =  new GeometryCollection([g,l]);

        geometry.accept(visitor);
        expect(visitor.getResult()).to.equal("GEOMETRYCOLLECTION(POINT(3 4),LINESTRING(3 4,5 6))");

        const visitor2 = new WktVisitor();
        const geometry2 =  new GeometryCollection();
        geometry2.accept(visitor2);
        expect(visitor2.getResult()).to.equal("GEOMETRYCOLLECTION EMPTY");
        
    });
});