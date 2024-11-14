import Coordinate from "./Coordinate";
import Geometry from "./Geometry";

export default class Point implements Geometry {
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    if (null ==coordinate){
      this.coordinate = [NaN,NaN];
    }
    else this.coordinate = coordinate ;
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
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
