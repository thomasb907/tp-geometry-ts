import Coordinate from "./Coordinate";

export default class Envelope{
    private bottomLeft: Coordinate;
    private topRight: Coordinate;

    constructor(bottomLeft?:Coordinate , topRight?:Coordinate ){
        if(null ==topRight || null ==bottomLeft){
            this.bottomLeft = [NaN,NaN];
            this.topRight = [NaN,NaN];
        }
        else{
            this.bottomLeft = bottomLeft;
            this.topRight = topRight;
        }
    }
    isEmpty():boolean{
        return  isNaN(this.bottomLeft[0]) || isNaN(this.bottomLeft[1]) ||isNaN(this.topRight[0]) || isNaN(this.topRight[1]);   
    }
    getXmin():number{
        
        return this.bottomLeft[0]<this.topRight[0] ? this.bottomLeft[0] : this.topRight[0];
    }
    getYmin():number{
        return this.bottomLeft[1]<this.topRight[1] ? this.bottomLeft[1] : this.topRight[1];
    }
    getXmax():number{
        return this.bottomLeft[0]>this.topRight[0] ? this.bottomLeft[0] : this.topRight[0];
    }
    getYmax():number{
        return this.bottomLeft[1]>this.topRight[1] ? this.bottomLeft[1] : this.topRight[1];
    }
    toString():String{
        return "xmin : "+this.getXmin()+" xmax : "+this.getXmax()+
        " ymin : "+this.getYmin()+" ymax : "+this.getYmax()+" \n";
    }
    
}