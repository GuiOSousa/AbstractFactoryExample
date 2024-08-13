import { Factory } from "../factory";
import { Rectangle } from "../shapes/rectangle";

export class RectangleFactory implements Factory{
    create(params: any): Rectangle {
        return new Rectangle(params.pointA, params.pointB)
    }
}