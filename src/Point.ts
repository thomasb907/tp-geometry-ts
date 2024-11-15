import AbstractGeometry from "./AbstractGeometry";
import Coordinate from "./Coordinate";
import GeometryVisitor from "./GeometryVisitor";

export default class Point extends AbstractGeometry {
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    super();
    if (null ==coordinate){
      this.coordinate = [NaN,NaN];
    }
    else this.coordinate = coordinate ;
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  translate(dx:number,dy:number):this{
    this.coordinate = [this.x()+dx,this.y()+dy];
    return this;
 }

 
  clone(): Point {
  return new Point([this.x(),this.y()])
}

accept(visitor:GeometryVisitor){
  visitor.visitPoint(this);
}

  getType(): string{
    return "Point";
  }

  isEmpty():boolean{
    return  isNaN(this.coordinate[0]) || isNaN(this.coordinate[1]) ;
  }

  x(): number {
    return !this.isEmpty() ? this.coordinate[0] : Number.NaN ;
  }

  y(): number {
    return !this.isEmpty() ? this.coordinate[1] : Number.NaN ;
  }

}
