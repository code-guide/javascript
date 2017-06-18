/**
 * 原型
 * 
 * 
 * ----------- 							---------------
 * |构造函数   | 		/------------->  | 源性对象      |
 * |prototype | -----/ 		   /--------| constructor |
 * ----------- 			      /	        --------------- 
 * 		↑   ↑----------------/					 ↑
 * 		|									     |
 * 		|		----------------------------     |
 * 		|		| 实例	                  |	    |
 * 		--------| constructor		       |     |
 * 				| [[prototype]], __proto__ | -----
 * 				————————————————————————————
 * 
 */
function Person(name) {
	this.name = name;
}
Person.prototype.name = 'prototype';
Person.prototype.getName = function () {
	console.log(this.name);
}

var p1 = new Person('张三');

p1.getName();

console.log('p1 constructor: ', p1.constructor);	// Person
console.log(p1.__proto__);							// Person prototype
console.log(p1.constructor.prototype);				// Person prototype
console.log(p1.constructor.prototype.constructor);	// Person

// 校验原型		PrototypeObj.isPrototypeOf(obj)
console.log(Person.prototype.isPrototypeOf(p1));

// 获取原型对象	Object.getPrototypeOf(obj)  /   obj.__proto__
console.log(Object.getPrototypeOf(p1));

// 可以修改原型对象
p1.constructor.prototype.age = 10;
console.log(p1.constructor.prototype);

// 校验属性位置	obj.hasOwnProperty(name)
console.log(p1.hasOwnProperty('name'));

// in 	检查实例及原型中时候有对应的属性，会一直向上查找
console.log('age' in p1);	// true
p1.__proto__.__proto__.demo = 'asds';
console.log('demo' in p1);

// 获取实例可枚举属性
for (let key in p1) { console.log(key) }
console.log(Object.keys(p1));

// 获取实例所有属性
console.log(Object.getOwnPropertyNames(Person.prototype));

// 更简单的
Person.prototype = {
	getInfo: function () {
		return `name ${this.name}, age: ${this.age}.`;
	}
}
// 默认情况下constructor是不可枚举的
Object.defineProperty(Person.prototype, 'constructor', {
	enumerable: false,
	value: Person
});