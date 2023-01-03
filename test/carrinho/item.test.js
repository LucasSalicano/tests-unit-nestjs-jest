import Item from "../../src/cart/item.js";

describe('Tests of items', () => {

    it('should have 3 fields: name, price and quantity', function () {
        const item = new Item('Milk', 2.5, 10)

        expect(item.name).toBe('Milk')
        expect(item.price).toBe(2.5)
        expect(item.quantity).toBe(10)
    });

    it('should get total price item by quantity', function () {
        const item = new Item('Chocolate', 4.131, 3)

        // toBeCloseTo is for approximate value
        expect(item.getSubTotalByItems()).toBeCloseTo(12.39)
    });

})