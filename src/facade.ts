import { AbstractFactory } from "./abstractFactory";
import { Shape } from "./shape";
import { Point } from "./shapes/point";

export default class Facade {
    constructor(){}

    create(shapeType: string, arg1?: any, arg2?: any, arg3?: any): Shape{
        const factory = AbstractFactory
        if (shapeType == "point") {
            if (typeof arg1 == 'number' && typeof arg2 == 'number') {
                return factory.createPoint(arg1, arg2)
            }
        } else if (shapeType == "circle") {
            if (typeof arg1 == 'number' && arg2 instanceof Point) {
                return factory.createCircle(arg1, arg2)
            }
        }
        else if (shapeType == "rectangle") {
            if (arg1 instanceof Point && arg2 instanceof Point) {
                return factory.createRectangle(arg1, arg2)
            }
        }
        else if (shapeType == "triangle") {
            if (arg1 instanceof Point && arg2 instanceof Point && arg3 instanceof Point) {
                return factory.createTriangle(arg1, arg2, arg3)
            }
        }

        throw new Error("Invalid parameters.")
    }
}