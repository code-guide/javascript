/**
 * 函数
 */

// 函数声明：存在声明提升
function fun1() {}

// 函数表达式：不存在生命提升
const fun2 = function() {}

// 参数传递：按值传递
let name = 'a';
let obj = { name };

function fun3(name, obj) {
    name = 'aaa';
    obj.name = 'asdasd';
    return [name, obj];
}

fun3(name, obj); // name = 'a', obj = {name: 'asdasd'};