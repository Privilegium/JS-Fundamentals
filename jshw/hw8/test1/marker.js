'use strict';

class Marker {
    
    constructor (color, remain, parentElement) {
        this.color = color;
        this.remain = remain;
        this.parent = document.querySelector(parentElement);
    }

    print(text) {
        this.text = text;
        const element = document.createElement('div');
        element.style.cssText = `color: ${this.color}; font-size: 5em;`;
        
        let remainCheck = this.text.split('');
        for (let letter of remainCheck) {
            if (this.remain > 0 && letter !== ' ') {
                element.innerHTML += letter;
                this.remain -= 0.5;
            } else if (letter === ' '){
                element.innerHTML += letter;
            } else {
                break;
            }
        }
        
        this.parent.append(element);
        this.remain = `${this.remain}%`;
    }
}


const redMarker = new Marker('red', 19, '.writing__field');
redMarker.print('Hello world');

class ChargingMarker extends Marker {
    
    constructor(color, remain, parentElement) {
        super(color, remain, parentElement);
    }

    refillMarker() {
        this.remain = '100%';
    }
    
}

const first = new ChargingMarker('blue', 3, '.writing__field');
first.print('Hello world');
first.refillMarker();