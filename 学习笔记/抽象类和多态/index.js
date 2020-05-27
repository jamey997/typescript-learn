// 抽象类：只能被继承而不能被实例化的类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log('eat');
    };
    return Animal;
}());
// let animal = new Animal() //error: 无法创建抽象类的实例。
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.name = name;
        return _this;
    }
    Dog.prototype.sleep = function () {
        console.log('dog sleep');
    };
    return Dog;
}(Animal));
var dog = new Dog('wangwang');
// dog.eat();
// 多态，在父类中我们定义一个抽象方法，在多个子类中我们有不同的实现，在程序运行时候会根据不同的对象执行不同的操作
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sleep = function () {
        console.log('cat sleep');
    };
    return Cat;
}(Animal));
var cat = new Cat();
var animal = [dog, cat];
animal.forEach(function (i) {
    i.sleep();
});
