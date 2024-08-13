import { Shape } from "../shape";
import { Point } from "./point";

export class Rectangle implements Shape{
    constructor(
        public pointA: Point,
        public pointB: Point
    ){}

    calculateArea(): number {
        const area: number = (this.pointA.x - this.pointB.x) * (this.pointA.y - this.pointB.y)
        return area * Math.sign(area)
    }
}