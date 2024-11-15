import AbstractGeometry from "./AbstractGeometry";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";



export default class GeometryCollection extends AbstractGeometry {

    private geometries:ArrayBuffer

    getType(): string {
        throw new Error("Method not implemented.");
    }
    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }
    translate(dx: number, dy: number): this {
        throw new Error("Method not implemented.");
    }
    clone(): Geometry {
        throw new Error("Method not implemented.");
    }
    accept(visitor: GeometryVisitor) {
        throw new Error("Method not implemented.");
    }
    
}