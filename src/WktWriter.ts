import Geometry from "./Geometry";
import LineString from "./LineString";
import Point from "./Point";

export default class WktWriter{
    constructor(){

    }

    write(geometry:Geometry):string{
        if ( geometry instanceof Point ){
            // traiter le cas Point
            if(geometry.isEmpty()){
                return  geometry.getType()+"EMPTY";
            }
            else{
                return geometry.getType()+" ("+geometry.x()+","+geometry.y()+")";
            }
        }else if ( geometry instanceof LineString ){
            // traiter le cas LineString
            if(geometry.isEmpty()){
                return  geometry.getType()+"EMPTY";
            }
            else{
                let str:string;
                str = geometry.getType()+" ("+geometry.getPointN(0).x()+" "+geometry.getPointN(0).y();
                for (let i = 1;i<geometry.getNumPoints();i++){
                    str =str+","+geometry.getPointN(i).x()+" ";
                    str =str+geometry.getPointN(i).y();
                }
                str = str +")";
                return str;
            }
        }else{
            throw new TypeError("geometry type not supported");
        }
        return "";
    }
}