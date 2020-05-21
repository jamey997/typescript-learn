> 类型断言是对一些ts无法推测的值进行说明, 让ts编译器放开对它的限制(我自己的理解)

类型断言有两种形式。 其一是“尖括号”语法：

``` js

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length; // ok, 这里相当于告诉编译器someValue的值会是string类型,而string类型的长度是一个number类型,刚好匹配了strLength的number类型

```

另一个为 `as` 语法：

```js
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 `as` 语法断言是被允许的。


使用场景

```js
function getLength(something: string | number): number {
    return something.length;
}
//  error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
```

解决方法

```js
function getLength(something: string | number): number {
    return (<string>something).length; 
    // 或者使用 as 语法 
    // return (something as string).length;
}



```