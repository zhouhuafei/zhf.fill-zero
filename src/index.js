(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else if (window) { // window - browser canon
        window[name] = factory();
    }
})('fillZero', function () {
    /**
     * @description 补零函数
     * @param {Number} value - 数字
     * @param {Number} place - 这个数字是个几位数的数字,如果是个3位数的数字,不足三位,则补0
     * */
    function fillZero(value = 0, place = 2) {
        const valueLen = value.toString().length;
        const zeroLen = place - valueLen;
        const arr = [];
        for (let i = 0; i < zeroLen; i++) {
            arr.push('0');
        }
        const zero = arr.join('');
        if (value < Math.pow(10, place)) {
            return `${zero}${value}`;
        }
        return `${value}`;
    }

    return fillZero;
});
