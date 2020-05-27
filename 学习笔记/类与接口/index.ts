/*  类与接口 */

// 一个接口可以约束一个类有哪些属性和方法以及它们的类型

interface Human {
    name: string;
    eat(): void;
}

// 注意，类实现接口使用 implements 关键字
class Asian implements Human {
    // 类实现接口的时候必须实现接口中声明的所有属性和方法
    constructor(name: string) {
        this.name = name;
    }
    // 接口只能约束类的公有成员：public
    // private name: string; //error: 属性“name”在类型“Asian”中是私有属性，但在类型“Human”中不是
    name: string;
    eat() {};
    // 定义接口外的属性或者方法是可以的
    sleep() {}; 
}

/*  接口的继承 */

// 接口可以像类一样相互继承，并且一个接口可以继承多个接口

interface Man extends Human {
    run(): void
}

interface Child {
    cry(): void
}

interface Boy extends Man, Child {}


let boy: Boy = {
    name: '',
    eat() {},
    run() {},
    cry() {}
}

/* 接口继承类 */

class Auto {
    state = 1;
}

interface AutoInterface extends Auto {
    
}


class C implements AutoInterface {
    state: number
}