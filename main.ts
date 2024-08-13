import Facade from "./src/facade";

function main(){
    const facade = new Facade

    const pointA = facade.create("point", 5, 4)
    const pointB = facade.create("point", 15, 13)
    const pointC = facade.create("point", -8, -6)
    const triangle = facade.create("triangle", pointA, pointB, pointC)

    console.log(triangle.calculateArea())
}

main()