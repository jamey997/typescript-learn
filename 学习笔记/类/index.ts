// 1.无论在es还是在ts中类成员的属性都是实例属性，而不是原型属性，而类成员的方法，都是实例方法

class Dog {
    constructor(name: string) {
        this.name = name;
    }

    name: string;

    run() { }
}

// 继承

class Husky extends Dog {
    constructor(name: string, color: string) {
        super(name);
        this.color = color;

    }

    color: string
}

// 类的成员修饰符

class Person {
    // 如果给类的构造函数加private修饰符，该类既不能被实例化，也不能被继承
    constructor(name: string, age: number, public gender) { // 构造函数中使用修饰符的参数会自动将参数变为实例的属性
        this.name = name;
        this.age = age;
    }
    
    // 公共修饰符，可在所有地方调用
    public name: string;
    // 私有修饰符， 只能在类中调用，不能在实例和子类中调用
    private age: number;
    // 受保护成员修饰符， 只能在类或者子类中调用, 不能在类的实例中访问 
    protected pro() {};
    // 只读属性
    readonly length: number = 180

    // 静态修饰符，类的静态修饰符只能通过类来调用，而不能通过实例来调用

    static run () {} // 正确调用 Person.run(); 错误调用 new Person().run();   类的静态成员可继承



}

