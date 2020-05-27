

class Log<T> {
    run(value: T) { }

    // static sleep(speed: T /*静态成员不能使用泛型 */) {}
}

let log1 = new Log<number>(); //实例化的时候指定类型为number
log1.run(1)

let log2 = new Log(); // 实例化时不指定类型, 我们可以传任意的值
log2.run(1);
log2.run('run');



interface Length {
    length: number
}

function Log3<T extends Length /* 这里 T 继承了 Length 接口，所以调用Log3的时候，传入的参数不管是什么类型，都一定必须得带上Length中的所有成员 */>(value: T): T {
    console.log(value, value.length);
    return value
}

Log3('455');
Log3([1,2,3]);
Log3({length: 5})



/**
 * 泛型的好处
 * 1.函数和类可以轻松的支持多种类型，增强程序的扩展性
 * 2.不必写多条函数重载，冗长的联合类型声明，增强代码的可读性
 * 3.灵活控制类型之间的约束
 * 
 */


