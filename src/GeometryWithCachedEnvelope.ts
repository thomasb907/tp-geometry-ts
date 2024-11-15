import Envelope from "./Envelope";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default  class GeometryWithCachedEnvelope implements Geometry{
    original:Geometry;
    cache:Envelope;
    constructor(original:Geometry){
        this.cache = null;
        this.original =original;
    }
    getType(): string {
        return this.original.getType();
    }
    isEmpty(): boolean {
        return this.original.isEmpty();
    }
    translate(dx: number, dy: number):this {
        this.cache=null;
        this.original.translate(dx,dy);
        return this;
    }
    clone(): Geometry {
        return this.original.clone();
    }
    getEnvelope(): Envelope {
        if(this.cache == null){
            this.cache = this.original.getEnvelope();
        }
        return this.cache;
    }
    accept(visitor: GeometryVisitor) {
        return this.original.accept(visitor);
    }
    
}