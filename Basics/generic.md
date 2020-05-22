## 定义

> 很多时候我们希望一个函数，或者一个类可以支持多种数据类型，有很大的灵活性。就可以使用范型；


例：一个打印函数

```js
function log(value: string):string{
    console.log(value);
    return value;
}
```

这里我们声明了一个log函数，它接收一个字符串类型的值，返回一个字符串的值，然后打印出来，最后再返回出去；


假如我们现在有个需求，需要log函数可以接收一个字符串数组的值

**函数重载的方式实现**


```js
function log(value: string): string{
    console.log(value);
    return value;
}

function log(value: string[]): string[]

```

**联合类型**

```js
function (value: | string | string[]): string | string[]{
    ...
}
```

**any类型**

```js
function log(value: any) {
    console.log(value);
    return value;
}
```

> 但是any类型丢失了一些信息，也就是类型之前的约束关系。它忽略了函数的接收类型，函数的返回值类型。当函数调用的时候，它完全无法获知这种约束关系.

## 泛型的使用

> 泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定。

### 声明

```js
function log<T>(value: T): T{
    console.log(value);
    return value;
}
```

不需要预先指定类型，就相当于any类型，另一方面也保证了函数的接收参数的类型和返回值类型是一致的

### 调用

泛型函数有两种调用方式，第一种

```js
log<string[]>(['a', 'b']);
```

第二种：使用TS的类型推断**（推荐使用）**

```js
log(['a', 'b'])
```
---
## 泛型函数

```js
function log<T>(value: T): T{
    console.log(value);
    return value;
}

type Log = <T>(value: T) => T;
let MyLog: Log = log;

```









