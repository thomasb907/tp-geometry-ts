import GeometryCollection from "./GeometryCollection";
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
            this.buffer+="POINT EMPTY";
        else{
            this.buffer+="Je suis un point avec x="+point.x()+" et y="+point.y();
        }
    }
    visitLineString(lineString:LineString){
        if(lineString.isEmpty())
            this.buffer+="LINESTRING EMPTY";
        else{
            this.buffer+="Je suis une polyligne définie par "+lineString.getNumPoints()+" point(s).";
        }
    }
    visitGeometryCollection(geometrycollection:GeometryCollection){
        if(geometrycollection.isEmpty())
            this.buffer="GEOMETRYCOLLECTION EMPTY";
        else{
            
            this.buffer+="GEOMETRYCOLLECTION(";
            for (const geometrie of geometrycollection.getGeometries()){
                geometrie.accept(this);
            }

        }
    }


    getResult():string{
        return this.buffer;
    }

}