import { Shape } from "../shape";

export class Point implements Shape{
    constructor(
        public x: number,
        public y: number
    ){}

    calculateArea(): number {
        return 0
    }
}