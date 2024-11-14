import "mocha";
import { expect } from "chai";
import EnvelopeBuilder from "../src/EnvelopeBuilder"
import Envelope from "../src/Envelope";

describe("test Envelope", () => {
    it("test default constructor", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0,1.0]);
        builder.insert([2.0,0.0]);
        builder.insert([1.0,3.0]);
        const testnull =new Envelope();
        expect(testnull.isEmpty()).to.equal(true);
        // récupération du résultat
        const result = builder.build();
        console.log(result.toString());


        expect(result.getXmin()).to.equal(0.0);
        expect(result.getXmax()).to.equal(2.0);
        expect(result.getYmax()).to.equal(3.0);
        expect(result.getYmin()).to.equal(0.0);
        
    });
});
