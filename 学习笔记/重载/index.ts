// 函数重载

function add1(...rest: number[]): number;
function add1(...rest: string[]): string;
function add1(...rest: any[]): any{
    let first = rest[0];

    if (typeof first === 'string') {
        return rest.join('');
    }
    if(typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
}


console.log(add1(1,2,3,4,5,6,7,8,9,10));
console.log(add1('hi,','my',' name','\'s',' jamey!'))


