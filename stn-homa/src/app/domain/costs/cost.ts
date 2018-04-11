export class Cost {
    constructor(
        public id: number,
        public name: string,
        public workshop: string,
        public street: string,
        public number: number,
        public zipCode: number,
        public city: string,
        public date: Date,
        public mileage: number,
        public price: number,
        public comment: string
    ) { }
}
