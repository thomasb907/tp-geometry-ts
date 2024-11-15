import "mocha";
import { expect } from "chai";
import EnvelopeBuilder from "../src/EnvelopeBuilder"
import Envelope from "../src/Envelope";
import Point from "../src/Point";
import WktWriter from "../src/WktWriter";
import LineString from "../src/LineString";


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
        
    });
});
