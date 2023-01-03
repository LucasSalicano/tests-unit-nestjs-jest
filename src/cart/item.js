class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getSubTotalByItems() {
        return this.quantity * this.price;
    }
}

export default Item;
