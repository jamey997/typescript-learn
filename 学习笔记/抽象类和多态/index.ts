// 抽象类：只能被继承而不能被实例化的类


abstract class Animal {
    eat() {
        console.log('eat');
    }
    // 抽象方法，在父类中定义，子类中实现。好处是可以抽离出一些事物的共性，便于代码的复用和扩展。另外，抽象类也可以实现多态
    abstract sleep(): void 
}

// let animal = new Animal() //error: 无法创建抽象类的实例。

class Dog extends Animal {
    constructor(public name: string) {
        super();
        this.name = name;
    }

    sleep() {
        console.log('dog sleep');
    }
}

let dog = new Dog('wangwang');

// dog.eat();



 // 多态，在父类中我们定义一个抽象方法，在多个子类中我们有不同的实现，在程序运行时候会根据不同的对象执行不同的操作

 class Cat extends Animal{
    sleep(){
        console.log('cat sleep');
    }
 }

let cat = new Cat();

let animal: Animal[] = [dog, cat];
animal.forEach(i => {
    i.sleep();
})