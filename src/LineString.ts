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

  translate(dx:number,dy:number):this{
    for (const point of this.points){
      point.translate(dx,dy);
    }
    return this;
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

 

}
