"use strict";
class Polygon {
    static getCount() {
        return Polygon.count;
    }
    static get counter() {
        return Polygon.count;
    }
    static set counter(value) {
        Polygon.count = value;
    }
    getPerimeter() {
        return this.sideLengths.reduce((sum, side) => sum + side, 0);
    }
    sayName() {
        console.log('I am a', `${this.name}`);
        this.sayID();
    }
    sayID() {
        console.log(`My id is ${this.id}`);
    }
    constructor(sideLengths) {
        this.sideLengths = sideLengths;
        this.name = 'Polygon';
        Polygon.count += 1;
        this.id = Polygon.count;
    }
    static count = 0;
    sideLengths;
    name;
    id;
}
class Square extends Polygon {
    getArea() {
        return this.sideLengths[0] ** 2;
    }
    constructor(sideLength) {
        super([sideLength, sideLength, sideLength, sideLength]);
        this.name = 'Square';
    }
}
class Rectangle extends Polygon {
    getArea() {
        return this.sideLengths[0] * this.sideLengths[1];
    }
    constructor(width, height) {
        super([width, height, width, height]);
        this.name = 'Rectangle';
    }
}
const square = new Square(5);
square.sayName();
console.log(`My perimeter is ${square.getPerimeter()}`);
console.log(`My area is ${square.getArea()}`);
console.log('------------------------');
const rectangle = new Rectangle(5, 10);
rectangle.sayName();
console.log(`My perimeter is ${rectangle.getPerimeter()}`);
console.log(`My area is ${rectangle.getArea()}`);
console.log('------------------------');
console.log(`Total created polygons: ${Polygon.getCount()}`);
console.warn('Resetting counter..');
Polygon.counter = 0;
console.log(`Total created polygons: ${Polygon.counter}`);
