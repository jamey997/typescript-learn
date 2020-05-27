// 泛型：

// 定义1
function log<T>(value: T): T {
    console.log(value);
    return value;
}

// 调用的两种方式
log<string[]>(['a', 'b']);
log(['a', 'b']) // 推荐（通过类型推断）



// 定义2

type Log = <T>(value: T) => T;
let myLog = log;

// 定义3

// 这里仅仅约束了接口的一个成员
interface Log2 {
    <T>(value: T): T
}

// 这里约束了接口的所有成员
interface Log3<T> {
    (value: T): T
}




