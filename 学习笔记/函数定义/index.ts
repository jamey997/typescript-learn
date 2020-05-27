// 函数定义4种方式

// 1.
function add1(x: number, y: number ) {
    return x + y
}


// 后面三种只是函数类型的定位，而并没有具体的实现，真正在调用的时候，需要书写函数体  

// 2.

let add2: (x: number, y: number) => number;

// 3.
type add3 = (x: number, y: number) => number;

// 4.
interface add4 {
    (x: number, y: number): number
}



// 1.ts中的函数的参数必须一一对应（参数的类型和个数）



 // 2.函数中的参数有必选和可选  function(x: number, y? : number)

 function add4(x: number, y? : number) {
    //  可选参数只能放在必选参数之后
    return y ? x + y : x;
 }


// 3. 可以为参数赋一个默认值

function add5(x: number, y = 1, z: number) {
    return x + y + z;
}
// 调用时如果需要使用默认值，则要对它传入undefined 
add5(1, undefined, 2);


