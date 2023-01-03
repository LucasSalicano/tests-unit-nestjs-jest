const sumOverTime = (wage) => {
    return wage + (wage * 0.15);
};

const sumDiscounts = (value) => {
    return value - (value * 0.02);
}

export {sumOverTime, sumDiscounts};