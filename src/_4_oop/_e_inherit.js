/**
 * 继承
 */

/**
 * 原型链继承
 * js中的继承就是把子类构造函数的原型对象重写为父类的实例。
 * 
 * 缺点： 1. 实例类型变了. 2. 无法向父类传入参数
 */
function Parent1() {
	this.name = 'parent1';
}

function Child1() {
	// this.name = 'child1';
}
Child1.prototype = new Parent1();
Child1.prototype.getInfo = function () {
	return `name: ${this.name}`;
}

let child1 = new Child1();
console.log(child1.getInfo());

console.log(child1.name);
console.log(child1.constructor);				// parent1
console.log(child1.__proto__.constructor);		// parent1

// 检测
console.log(child1 instanceof Parent1);
console.log(Parent1.prototype.isPrototypeOf(child1));

/**
 * 借用构造函数修正实例类型
 * 
 * 缺点：在构造函数你定义方法，无法复用
 * 
 */
function Parent2(age) {
	this.name = 'parent2';
	this.age = age;
}
function Child2(name, age) {
	Parent2.call(this, age);
}
let child2 = new Child2('child', 20);
console.log(child2);
console.log(child2.__proto__.constructor);			// Child2

/**
 * 组合继承
 */
function Parent3(name) {
	this.name = name;
}
Parent3.prototype.getName = function () { return `name: ${this.name}.` }

function Child3(name, age) {
	Parent3.call(this, name);
	this.age = age;
}

// 继承
Child3.prototype = new Parent3;
Child3.prototype.constructor = Child3;

Child3.prototype.getAge = function () { return `age: ${this.age}.` };
let child3 = new Child3('c3', 20);
console.log(child3.getName(), child3.getAge());

/**
 * 原型式继承:Object.create()
 */
Object._create = function (target) {
	function F() { }
	F.prototype = target;
	return new F();
}

/**
 * 寄生式继承
 */
function parasiticInherit(obj) {
	let result = Object.create(obj);
	result.getInfo = function () {
		return this.name;
	}
	return result;
}
let newObj = parasiticInherit({ name: "asdasd" });


/**
 * 寄生组合式继承
 */
function Parent4() {
	this.className = 'parent';
}
function Child4() {
	Parent4.call(this);
}
Child4.prototype = Object.create(Parent4, { constructor: Child4 });
console.log(new Child4());