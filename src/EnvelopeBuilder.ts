import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class EnvelopeBuilder implements GeometryVisitor{
    private list:Array<Coordinate>;;
    private xmin:number;
    private xmax:number;
    private ymax:number;
    private ymin:number;

    constructor(){
        this.list= [];
        this.xmin = Number.POSITIVE_INFINITY;
        this.ymin = Number.POSITIVE_INFINITY;
        this.xmax = Number.NEGATIVE_INFINITY;
        this.ymax = Number.NEGATIVE_INFINITY;
    }

    insert(coordinate:Coordinate):void{
        this.list.push((coordinate));
        this.xmin =this.xmin >coordinate[0] ? coordinate[0] : this.xmin;
        this.ymin =this.ymin >coordinate[1] ? coordinate[1] : this.ymin;
        this.xmax =this.xmax <coordinate[0] ? coordinate[0] : this.xmax;
        this.ymax =this.ymax <coordinate[1] ? coordinate[1] : this.ymax;
    }

    build():Envelope{
        return new Envelope([this.xmin,this.ymin],[this.xmax,this.ymax])
    }
    visitPoint(point:Point){
        this.insert(point.getCoordinate());
         
    }
    visitLineString(lineString:LineString){
        for (let i = 0;i<lineString.getNumPoints();i++){
            this.insert(lineString.getPointN(i).getCoordinate());
        }
    }

}
    