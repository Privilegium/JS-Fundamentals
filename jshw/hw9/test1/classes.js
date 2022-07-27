'use strict';

class Battery {

    constructor(type, chargeRemain, voltage, size) {
        this.type = type;
        this.chargeRemain = chargeRemain;
        this.voltage = `${voltage}V`;
        this.size = size;
    }

    power(power) {
        const ONE_HOUR = 3600000;

        const showCharge = () => console.log(this.chargeRemain);
        showCharge();

        setInterval(() => {
            this.chargeRemain -= 0.5;
            power += 0.5;
            showCharge();
        }, ONE_HOUR);
    }
}

const firstBattery = new Battery('litium', 100, 3, 'AAA');
firstBattery.power();



class Table {

    constructor(width, height, length, material, shape, maximumPeopleCapacity, cost) {
        this.width = `${width}см`;
        this.height = `${height}см`;
        this.length = `${length}см`;
        this.material = material;
        this.shape = shape;
        this.maximumPeopleCapacity = maximumPeopleCapacity;
        this.cost = `${cost}грн`;
    }
}

const goodTable = new Table(91, 70, 183, 'wood', 'rectangle', 6, 8000);
console.log(goodTable);



class Doors {

    constructor(material, height, width, status) {
        this.material = material;
        this.height = `${height}см`;
        this.width = `${width}см`;
        this.status = status;
        this.healthBar = 100;
    }

    open() {
        if (this.status === 'closed') {
            return this.status = 'opened';
        }    
        return;
    }

    close() {
        if (this.status === 'opened') {
            return this.status = 'closed';
        }
        return;
    }
}

const firstDoor = new Doors('plastic', 200, 80, 'opened');
firstDoor.close();
