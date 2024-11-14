import Point from "./Point";
import Geometry from "./Geometry";

export default class LineString implements Geometry {
  private points?: Array<Point>;;

  constructor(points ?:Array<Point> ) {
    if (null==points){
      this.points = []
    }
    else this.points = points ;
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

 

}
