// // // 装饰器是一个方法，或者返回值是一个方法

// // function setProp() {
// //     // return function () {}
// // }


// // @setProp

// function sealed(target) {
//     // do something with "target" ...
// }

// @sealed

function setName() {
    console.log('get setName');
    return function (target) {
        console.log('setName');
    }
}


function setAge() {
    console.log('get setAge');
    return function (target) {
        console.log('setAge');
    }
}


@setName()
@setAge()
class ClassDec {
    
}