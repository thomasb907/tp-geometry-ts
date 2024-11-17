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
            this.buffer+="POINT("+point.x()+" "+point.y()+")";
        }
    }
    visitLineString(lineString:LineString){
        if(lineString.isEmpty())
            this.buffer+="LINESTRING EMPTY";
        else{
            this.buffer+="LINESTRING("+lineString.getPointN(0).x()+" "+lineString.getPointN(0).y();;
            
            for(let i=1;i< lineString.getNumPoints();i++){
                this.buffer+=","+lineString.getPointN(i).x()+" ";
                this.buffer+=lineString.getPointN(i).y();
            }
            this.buffer+=")";
        }
    }
    visitGeometryCollection(geometrycollection:GeometryCollection){
        if(geometrycollection.isEmpty())
            this.buffer="GEOMETRYCOLLECTION EMPTY";
        else{
            
            this.buffer+="GEOMETRYCOLLECTION(";
            geometrycollection.getGeometryN(0).accept(this);
            for (let i=1;i<geometrycollection.getNumGeometries();i++){
                this.buffer+=","
                geometrycollection.getGeometryN(i).accept(this);
            }
            this.buffer+=")";
        }
    }


    getResult():string{
        return this.buffer;
    }

}