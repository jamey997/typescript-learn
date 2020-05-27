function add1() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var first = rest[0];
    if (typeof first === 'string') {
        return rest.join('');
    }
    if (typeof first === 'number') {
        return rest.reduce(function (pre, cur) { return pre + cur; });
    }
}
console.log(add1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(add1('hi,', 'my', ' name', '\'s', ' jamey!'));
