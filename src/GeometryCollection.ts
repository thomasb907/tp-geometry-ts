import AbstractGeometry from "./AbstractGeometry";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";



export default class GeometryCollection extends AbstractGeometry {

    private geometries?:Array<Geometry>;

    constructor(geometries?:Array<Geometry>){
        super();
        if(null == geometries){
            this.geometries=[]
        }
        else {
            this.geometries= geometries;
        }
    }

    getType(): string {
        return "GEOMETRYCOLLECTION";
    }
    isEmpty(): boolean {
        return 0 == this.geometries.length;
    }
    translate(dx: number, dy: number): this {
        for (const geom of this.geometries){
            geom.translate(dx,dy);
        }
        return this;
    }
    clone(): Geometry {
        let lpf : Array<Geometry> = [];
        for (const geom of this.geometries){
            lpf.push(geom.clone());
            }
        return new GeometryCollection(lpf);
    }


    accept(visitor:GeometryVisitor){
        
    }

    public getGeometries():Array<Geometry>{
        return this.geometries;
    }
    
}