import { Factory } from "../factory";
import { Circle } from "../shapes/circle";

export class CircleFactory implements Factory{
    create(params: any): Circle {
        return new Circle(params.radius, params.point)
    }
}