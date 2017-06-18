/**
 * 创建对象
 */

// 1. Object实例
var obj1 = {
	name: 'obj1',
	getName: function () {
		console.log(this.name);
	}
};
obj1.getName();

// 2. 字面量
var obj2 = {
	name: 'obj2',
	getName: function () {
		console.log(this.name);
	}
}
obj2.getName();