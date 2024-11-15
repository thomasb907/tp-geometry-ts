import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import WktWriter from "../src/WktWriter";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import WktVisitor from "../src/WktVisitor.ts";


describe("test  WktWriter", () => {
    it("test  WktWriter", () => {
        const g = new Point([3.0,4.0]);
        const writer = new WktWriter();
        // "POINT(3.0 4.0)"
        const wkt = writer.write(g);
        expect(wkt).to.equal("Point (3,4)");
        const  g2 = new Point([5.0,6.0]);
        const l = new LineString([g,g2]);
        expect(writer.write(l)).to.equal("LineString (3 4,5 6)")

        //c'est pas bien
        const visitor = new LogGeometryVisitor();
        const geometry = new Point([3.0,4.0]);
        geometry.accept(visitor);
        l.accept(visitor);

        const visitor2 = new WktVisitor();
        geometry.accept(visitor2);
        // "POINT(3.0 4.0)"
        const wkt2 = visitor2.getResult();
        l.accept(visitor2);
        const wkt3 = visitor2.getResult();
        expect(wkt2).to.equal("Je suis un point avec x=3 et y=4");
        //expect(wkt3).to.equal("Je suis une polyligne définie par 2 point(s).");
        
    });
});
