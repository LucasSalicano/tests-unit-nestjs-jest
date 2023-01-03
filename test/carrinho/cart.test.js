import Cart from "../../src/cart/cart.js";
import Item from "../../src/cart/item.js";

describe('Cart class tests', () => {
    it('should be empty cart at the start', function () {
        const cart = new Cart();
        expect(cart.subtotal).toBeNull();
    });

    it('should have items in cart', function () {
        const item = new Item('Milk', 2.5, 10)
        const itemTwo = new Item('Apple', 1.0, 10)

        const cart = new Cart();
        cart.add(item)
        cart.add(itemTwo)

        expect(typeof cart).toBe('object')
        expect(cart.items[0]).toBe(item)
        expect(cart.items[1]).toBe(itemTwo)
        expect(cart.items.length).toBe(2)
    });

    it('should throw exception, if cart is empty at checkout', function () {
        const cart = new Cart();

        expect(() => {
            cart.checkout()
        }).toThrowError('Cart is empty!')
    });

    it('should return the tax amount', function () {
        const cart = new Cart();
        cart.addTax(5);

        expect(cart.tax).toBe(5)
    });

    it('should return the full amount of the cart', function () {
        const item = new Item('Milk', 2.5, 10)
        const itemTwo = new Item('Apple', 1.0, 10)

        const cart = new Cart();
        cart.add(item)
        cart.add(itemTwo)
        cart.addTax(5)

        const expectCheckout = {
            subtotal: 35.00,
            tax: 5,
            total: 40
        }

        expect(cart.checkout()).toStrictEqual(expectCheckout)
    });
})