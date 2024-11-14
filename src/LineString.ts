import Point from "./Point";
import Geometry from "./Geometry";

export default class LineString implements Geometry {
  private points?: Array<Point>;;

  constructor(points ?:Array<Point>) {
    this.points = points ;
  }
  getType(): string{
    return "LineString";
  }

  getNumPoints(): number {
    if(null ==this.points){
      return 0;
    }
    return this.points.length;
  }

  getPointN(n:number): Point{
    if(null ==this.points ){
      return null;
    }
    if(this.getNumPoints()<=n ){
      return null;
    }
    return this.points[n];
  }

 

}
