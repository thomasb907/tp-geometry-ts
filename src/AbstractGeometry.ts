import Envelope from "./Envelope";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default abstract class AbstractGeometry implements Geometry{
    abstract getType():string;
    abstract isEmpty():boolean;
    abstract translate(dx:number,dy:number):this;
    abstract clone():Geometry;
    abstract getEnvelope():Envelope;
    abstract accept(visitor:GeometryVisitor);
    asText(): String{
        return "";
    }
}