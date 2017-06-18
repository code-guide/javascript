/**
 * 创建对象的模式
 */

/**
 * 1. 工厂模式
 * 
 * 缺点：无法解决对象识别问题
 */
function createPerson(name, age) {
	let result = new Object();
	result.name = name;
	result.age = age;
	result.getInfo = function () {
		return `name: ${this.name}, age: ${this.age}.`;
	}
	return result;
}
var p1 = createPerson('张三', 11);
console.log(p1.getInfo());

/**
 * 2. 构造函数模式
 * 
 * 步骤
 * 1. let result = new Object()
 * 2. this -> result
 * 3. this.constructor = constructor; constructor()
 * 4. return result;
 * 
 * 使用new创建对象
 * 
 * 缺点：每个对象的方法都会重新创建单独的一个函数实例。
 * 
 */
function Person2(name, age) {
	this.name = name;
	this.age = age;
	this.getInfo = function () {
		return `name ${this.name}, age: ${this.age}.`;
	}
	// console.log(this.constructor);	// Person2
};
var p2 = new Person2('李四', 12);
console.log(p2.getInfo());


/**
 * 原型模式
 * 
 * 缺点：属性直接指定。
 */
function Person3() { }
Person3.prototype.name = '王五';
Person3.prototype.age = 20;
Person3.prototype.getInfo = function () {
	return `name ${this.name}, age: ${this.age}.`;
}
var p3 = new Person3();
console.log(p3.getInfo());

/**
 * 构造函数和原型模式的组合
 */
function Person4(name, age) {
	this.name = name;
	this.age = age;
}
Person4.prototype = {
	constructor: Person4,
	getInfo: function () {
		return `name ${this.name}, age: ${this.age}.`;
	}
};
var p4 = new Person4('马六', 30);
console.log(p4.getInfo());

/**
 * 动态原型模式
 * 所有都封装在原型函数中
 */
function Person5(name, age) {
	this.name = name;
	this.age = age;

	if (typeof this.getInfo !== 'function') {
		Person5.prototype.getInfo = function () {
			return `name: ${this.name}, age: ${this.age}.`;
		}
	}
}
var p5 = new Person5('p5', 20);
console.log(p5.getInfo());

/**
 * 寄生构造函数模式
 */
function Person6(name, age) {
	var result = new Object();
	result.name = name;
	result.age = age;
	result.getInfo = function () {
		return `name: ${this.name}, age: ${this.age}.`;
	}
	return result;
}
var p6 = new Person6('p6', 20);		// new默认返回实例，可以在构造函数中使用return重写返回对象。
console.log(p6.getInfo());

/**
 * 稳定构造函数模式
 * 
 * 不应用this,无公共属性
 */
function Person7(name, age) {
	var result = new Object();
	result._name = '';
	result.getInfo = function () {
		return `name: ${name}, age: ${age}.`;
	}
	return result;
}
var p7 = Person7('p7', 20);
console.log(p7.getInfo());