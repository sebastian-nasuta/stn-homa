export class Car {
    constructor(
        public id: number,
        public brand: string,
        public model: string,
        public type: string,
        public vin: string,
        public maxPower: number,
        public maxTorque: number
    ) { }
}
