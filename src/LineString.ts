import Point from "./Point";
import Geometry from "./Geometry";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";
import WktWriter from "./WktWriter";
import AbstractGeometry from "./AbstractGeometry";

export default class LineString implements AbstractGeometry {
  private points?: Array<Point>;;

  constructor(points ?:Array<Point> ) {
    if (null==points){
      this.points = []
    }
    else this.points = points ;
  }

  translate(dx:number,dy:number):this{
    for (const point of this.points){
      point.translate(dx,dy);
    }
    return this;
  }

  getEnvelope():Envelope{
    const builder = new EnvelopeBuilder();
    for(const point of this.points){
      builder.insert(point.getCoordinate())
    }
    return builder.build();
 }
 asText(): String {
  if (this.isEmpty()) return "Je suis une polyligne vide.";
  return "Je suis une polyligne définie par "+this.getNumPoints()+" point(s)."
}

  clone(): LineString {
    let lpf : Array<Point> = [];
    for (const point of this.points){
      lpf.push(point.clone());
    }
    return new LineString(lpf);
  }

  getType(): string{
    
    return "LineString";
  }


  isEmpty():boolean{
    return 0 == this.getNumPoints();
  }

  getNumPoints(): number {
    return this.points.length;
  }

  getPointN(n:number): Point{
    if(this.getNumPoints()<=n ){
      return null;
    }
    return this.points[n];
  }
  accept(visitor:GeometryVisitor){
    visitor.visitLineString(this);
  }
 

}
