import "mocha";
import { expect } from "chai";
import EnvelopeBuilder from "../src/EnvelopeBuilder"
import Envelope from "../src/Envelope";
import Point from "../src/Point";
import WktWriter from "../src/WktWriter";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import WktVisitor from "../src/WktVisitor.ts";


describe("test  AbstractGeom", () => {
    it("test  AbstractGeom", () => {
        const g = new Point([3.0,4.0]);
        
        const  g2 = new Point([5.0,6.0]);
        const l = new LineString([g,g2]);

        expect(g.asText()).to.equal("Je suis un point avec x=3 et y=4");
        expect(l.asText()).to.equal("Je suis une polyligne définie par 2 point(s).");
        
    });
});