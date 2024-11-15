import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";
import WktVisitor from "./WktVisitor";

export default abstract class AbstractGeometry implements Geometry{
    abstract getType():string;
    abstract isEmpty():boolean;
    abstract translate(dx:number,dy:number):this;
    abstract clone():Geometry;
    abstract accept(visitor:GeometryVisitor);
    asText(): String{
        const visitor2 = new WktVisitor(); 
        this.accept(visitor2)
        return visitor2.getResult();
    }
    getEnvelope():Envelope{
        const builder = new EnvelopeBuilder();
        this.accept(builder);
        return builder.build();
    }
}