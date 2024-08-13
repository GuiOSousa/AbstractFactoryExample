import { CircleFactory } from "./factories/circleFactory";
import { PointFactory } from "./factories/pointFactory";
import { RectangleFactory } from "./factories/rectangleFactory";
import { TriangleFactory } from "./factories/triangleFactory";
import { Circle } from "./shapes/circle";
import { Point } from "./shapes/point";
import { Rectangle } from "./shapes/rectangle";
import { Triangle } from "./shapes/triangle";

export class AbstractFactory {
    constructor(){}

    static createPoint(x: number, y: number): Point {
        const factory = new PointFactory
        return factory.create({x: x, y: y})
    }

    static createCircle(radius: number, point: Point): Circle {
        const factory = new CircleFactory
        return factory.create({radius: radius, point: point})
    }

    static createRectangle(pointA: Point, pointB: Point): Rectangle {
        const factory = new RectangleFactory
        return factory.create({pointA: pointA, pointB: pointB})
    }

    static createTriangle(pointA: Point, pointB: Point, pointC: Point): Triangle {
        const factory = new TriangleFactory
        return factory.create({pointA: pointA, pointB: pointB, pointC: pointC})
    }
}