class Cart {
    constructor() {
        this.items = [];
        this.subtotal = null;
        this.tax = null;
        this.total = null;
    }

    add(item) {
        this.items.push(item);
    }

    addTax(value) {
        this.tax = value;
    }

    calculateTotal() {
        this.subtotal = this.items.reduce((acum, item) => acum + item.getSubTotalByItems(), 0);
        return this.subtotal + this.tax;
    }

    checkout() {
        if (this.items.length === 0) {
            throw new Error('Cart de compras vazio');
        }

        this.total = this.calculateTotal();

        return {
            subtotal: this.subtotal,
            frete: this.tax,
            total: this.total,
        };
    }
}

export default Cart;
