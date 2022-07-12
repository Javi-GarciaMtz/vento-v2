export class Motorcycle {
    constructor(
        public id: number,
        public model: string,
        public min_price: number,
        public max_price: number,
        public onsale: number,
        public stock_quantity: number,
        public stock_status: string,
        public rating_count: number,
        public average_rating: number,
        public total_sales: number,
        public tax_status: string,
        public tax_class: string,
        public image: string,
    ){}
}