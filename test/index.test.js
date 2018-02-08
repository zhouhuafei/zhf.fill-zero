const fillZero = require('../dist/index.min');

test(`fillZero(10, 3); // '010'`, () => {
    expect(fillZero(10, 3)).toEqual('010');
});

test(`fillZero(8, 2); // '08'`, () => {
    expect(fillZero(8, 2)).toEqual('08');
});
