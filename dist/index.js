'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else if (window) {
        // window - browser canon
        window[name] = factory();
    }
})('fillZero', function () {
    /**
     * @description 补零函数
     * @param {Number} value - 数字
     * @param {Number} place - 这个数字是个几位数的数字,如果是个3位数的数字,不足三位,则补0
     * */
    function fillZero() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

        var valueLen = value.toString().length;
        var zeroLen = place - valueLen;
        var arr = [];
        for (var i = 0; i < zeroLen; i++) {
            arr.push('0');
        }
        var zero = arr.join('');
        if (value < Math.pow(10, place)) {
            return '' + zero + value;
        }
        return '' + value;
    }

    return fillZero;
});