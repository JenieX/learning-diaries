interface IPolygon {
  getPerimeter: () => number,
  sayName: () => void,
  name: string,
  id: number,
}

interface ISquare extends IPolygon {
  getArea: () => number,
  logInfo: () => void,
}

interface IRectangle extends IPolygon {
  getArea: () => number,
  logInfo: () => void,
}

// ------------------------------------------------

class Polygon implements IPolygon {
  static getCount(): number {
    return Polygon.count;
  }

  static get counter(): number {
    return Polygon.count;
  }

  static set counter(value: number) {
    Polygon.count = value;
  }

  getPerimeter(): number {
    return this.sideLengths.reduce((sum, side) => sum + side, 0);
  }

  sayName(): void {
    console.log('I am a', `${this.name}`);
    this.sayID();
  }

  private sayID(): void {
    console.log(`My id is ${this.id}`);
  }

  constructor(sideLengths: number[]) {
    this.sideLengths = sideLengths;

    this.name = 'Polygon';
    Polygon.count += 1;
    this.id = Polygon.count;
  }

  private static count = 0;

  protected sideLengths: number[];
  public name: string;
  public id: number;
}

// ------------------------------------------------

class Square extends Polygon implements ISquare {
  public getArea(): number {
    return this.sideLengths[0]! ** 2;
  }

  public logInfo(): void {
    console.log(`My perimeter is ${this.getPerimeter()}`);
    console.log(`My area is ${this.getArea()}`);
  }

  constructor(sideLength: number) {
    super([sideLength, sideLength, sideLength, sideLength]);
    this.name = 'Square';
  }
}

// ------------------------------------------------

class Rectangle extends Polygon implements IRectangle {
  public getArea(): number {
    return this.sideLengths[0]! * this.sideLengths[1]!;
  }

  public logInfo(): void {
    console.log(`My perimeter is ${this.getPerimeter()}`);
    console.log(`My area is ${this.getArea()}`);
  }

  constructor(width: number, height: number) {
    super([width, height, width, height]);
    this.name = 'Rectangle';
  }
}

// ------------------------------------------------

const square = new Square(5);
square.sayName();
square.logInfo();

console.log('------------------------');

const rectangle = new Rectangle(5, 10);
rectangle.sayName();
rectangle.logInfo();

console.log('------------------------');

console.log(`Total created polygons: ${Polygon.getCount()}`);

console.warn('Resetting counter..');
Polygon.counter = 0;
console.log(`Total created polygons: ${Polygon.counter}`);
// console.log(`Total created polygons: ${Polygon.getCount()}`);
