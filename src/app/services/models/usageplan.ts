
    export class Quota {
        constructor(
        public period: string,
        public offset: number,
        public limit: number,
        ) {}
    }

    export class Throttle {
        constructor(
            public rateLimit: number,
            public burstLimit: number,
        ) {}
    }

    export class UsagePlan {
        constructor(
        public id: string,
        public name: string,
        public description: string,
        public quota: Quota,
        public throttle: Throttle,
        public panelOpenState?: boolean
        ) {}
    }

    export class QuotaPeriod {
        constructor(public periods: String[] = ['DAY', 'WEEK', 'MONTH']) {}
    }

