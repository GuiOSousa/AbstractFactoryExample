import { Shape } from "../shape";
import { Point } from "./point";

export class Triangle implements Shape{
    constructor(
        public pointA: Point,
        public pointB: Point,
        public pointC: Point
    ){}

    calculateArea(): number {
        const sideA: number = Math.sqrt(Math.pow((this.pointB.x - this.pointC.x), 2) + Math.pow((this.pointB.y - this.pointC.y), 2))
        const sideB: number = Math.sqrt(Math.pow((this.pointA.x - this.pointC.x), 2) + Math.pow((this.pointA.y - this.pointC.y), 2))
        const sideC: number = Math.sqrt(Math.pow((this.pointB.x - this.pointA.x), 2) + Math.pow((this.pointB.y - this.pointA.y), 2))
        const semiPer = (sideA + sideB + sideC)
        
        return Math.sqrt(semiPer * (semiPer - sideA) * (semiPer - sideB) * (semiPer - sideC))
    }
}