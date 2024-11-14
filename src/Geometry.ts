export default interface Geometry{
    getType():string;
    isEmpty():boolean;
    translate(dx:number,dy:number):this;
    clone():Geometry;
}