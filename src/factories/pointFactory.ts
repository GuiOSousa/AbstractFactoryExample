import { Factory } from "../factory";
import { Point } from "../shapes/point";

export class PointFactory implements Factory{
    create(params: any): Point {
        return new Point(params.x, params.y)
    }
    
}