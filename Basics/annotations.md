
> 作用相当于强类型语言中的类型声明

语法: **`声明语句 变量名: 类型 = 值`**;

例子: 
``` js
    let hello: string = 'Hello TypeScript!';
```
---
## 布尔值

``` js
    let isLoading: boolean = true;
```
----
## 字符串

``` js
    let name: string = 'Jamey';
```
----
## 数值

``` js
    let age: number = 18;
```
----
## 数组
> TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。

第一种，可以在`元素类型`后面接上 `[]`，表示由此类型元素组成的一个数组：
``` js
    let list: number[] = [1, 2, 3];
```
 第二种方式是使用数组泛型，`Array<元素类型>`：
 ``` js
    let list: Array<number> = [1, 2, 3];
```
----

## 元组 Tuple

>元组类型允许**表示一个已知元素数量和类型的数组**，各元素的类型不必相同。 比如，你可以定义一对值分别为 `string`和`number`类型的元组。

``` js
let person: [string, number];
person = ['Benny', 60]; // ok
// 元组的里面元素必须一一对应
person = [60, 'Benny']; // error, 不能将"number"类型分配给"string"

// 注意事项
person.push('haha');  // ok, 这里的代码虽然越界了,但不会报错;
person[2] = 1; // error, 这里会提示元组越界的错误;
person.push(true) // error,报错,提示person元组中没用boolean类型

```

## 枚举 enum
> enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

打个比方, 假如我们把通讯录看作一个枚举, 想象一下,你拨打一个电话,只需要记住对方名字即可,并不需要记对方的手机号码,因为人的名字很好记住,而电话号码很难记住.这里的`人名相当于枚举名称`, 而`电话号码就相当于枚举对应的值`

`默认`情况下，枚举值从`0`开始为元素编号, 并且不赋值情况下后面的枚举会自动升序。
``` js
enum Color {Red, Green, Blue} // 0, 1 , 2
let c: Color = Color.Green;   // 1

```


你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号
``` js
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green; // 2

```
或者，全部都采用手动赋值：

``` js
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Blue; // 4

```
注意: 枚举是只读属性, 一旦定义,不可修改

``` js
enum Color {Red = 1, Green = 2, Blue = 3}
Color.Red = 5; // error, 枚举是只读类型

```

## Any

> 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：

``` js
let o: any = 4;
o = "string"; // ok
o = false; // ok

```

any类型的数组

``` js
let list: any[] = [1, true, "free"];
list[1] = 100;

```

在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：

``` js
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```
当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：

``` js
let list: any[] = [1, true, "free"];

list[1] = 100;
```

## Void
>某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：

``` js
function warnUser(): void {
    console.log("This is my warning message");
}
```
声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：

``` js
let unusable: void = undefined;
```

## Null 和 Undefined

> TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：

``` js
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

## Never

`never`类型表示的是那些永不存在的值的类型。 例如， `never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 `never`类型，当它们被永不为真的类型保护所约束时。

`never`类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是`never`的子类型或可以赋值给never类型（除了`never`本身之外）。 即使 `any`也不可以赋值给`never`。

下面是一些返回`never`类型的函数：

``` js
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

## Object

`object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。

使用`object`类型，就可以更好的表示像`Object.create`这样的API。例如：

``` js
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```


