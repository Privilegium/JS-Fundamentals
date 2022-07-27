'use strict';

class Circle {

    constructor(radius) {
        this.radius = radius;
        this.Pi = 3.14;
    }

    get circleRadius() {
        return this.radius;
    }

    set circleRadius(radius) {
        return this.radius = radius;
    }

    get circleDiameter() {
        return this.radius * 2;
    }

    calculateCircleArea() {
        return this.Pi * (this.radius ** 2);
    }

    calculateCircleLength() {
        return 2 * this.Pi * this.radius;
    }
}

const firstCircle = new Circle();
console.log(firstCircle.circleRadius);

firstCircle.circleRadius = 10;
console.log(firstCircle.radius);

console.log(firstCircle.circleDiameter);
console.log(firstCircle.calculateCircleArea());
console.log(firstCircle.calculateCircleLength());