export class Customer {
    constructor(
        public id: string,
        public name: string,
        public usagePlanId: string,
        public apiKey: string,
        public appUrl?: string
      ) {  }
}
