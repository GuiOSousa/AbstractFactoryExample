import { Shape } from "../shape";
import { Point } from "./point";

export class Circle implements Shape{
    constructor(
        public radius: number,
        public center: Point
    ){}

    calculateArea(): number {
        return Math.PI * this.radius * this.radius
    }
}