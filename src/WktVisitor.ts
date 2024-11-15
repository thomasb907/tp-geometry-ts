import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class WktVisitor implements GeometryVisitor{
    private buffer:string;
    constructor(){
        this.buffer="";
    }
    visitPoint(point:Point){
        if(point.isEmpty())
            this.buffer="Je suis un point vide.";
        else{
            this.buffer="Je suis un point avec x="+point.x()+" et y="+point.y();
        }
    }
    visitLineString(lineString:LineString){
        if(lineString.isEmpty())
            this.buffer="Je suis une polyligne vide.";
        else{
            this.buffer="Je suis une polyligne définie par "+lineString.getNumPoints()+" point(s).";
        }
    }
    getResult():string{
        return this.buffer;
    }

}