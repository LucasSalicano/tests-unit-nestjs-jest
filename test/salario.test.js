import {sumDiscounts, sumOverTime} from '../src/salario.js';

test('Should be overtime plus salary', () => {
    const valueExpected = 1150;
    const response = sumOverTime(1000);

    expect(response).toBe(valueExpected);
});

test('Should be salary minus discounts', () => {
    const valueExpected = 980;
    const response = sumDiscounts(1000);

    expect(response).toBe(valueExpected);
})