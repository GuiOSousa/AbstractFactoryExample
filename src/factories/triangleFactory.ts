import { Factory } from "../factory";
import { Triangle } from "../shapes/triangle";

export class TriangleFactory implements Factory{
    create(params: any): Triangle {
        return new Triangle(params.pointA, params.pointB, params.pointC)
    }
}