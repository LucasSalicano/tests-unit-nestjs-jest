import {sumDiscounts, sumOverTime} from '../src/salary.js';

describe('Tests salary', () => {

    it('Should be overtime plus salary', () => {
        const valueExpected = 1150;
        const response = sumOverTime(1000);

        expect(response).toBe(valueExpected);
    });

    it('Should be salary minus discounts', () => {
        const valueExpected = 980;
        const response = sumDiscounts(1000);

        expect(response).toBe(valueExpected);
    })

})
