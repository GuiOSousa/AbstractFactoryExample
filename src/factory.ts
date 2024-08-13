import { Shape } from "./shape";

export interface Factory {
    create(params: any): Shape
}