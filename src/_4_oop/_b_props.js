/**
 * 属性
 */

/**
 * 数据属性
 * 1. [[Configurable]]：可配置，能否delete，修改，能否修改为访问器属性
 * 2. [[Enumerable]]：可枚举
 * 3. [[Writable]]：可写
 * 4. [[Value]]: 属性值
 * 
 * 修改属性特性：Object.defineProperty(obj, propName, descObj)  (configurable, enumerable, writable, value)
 */
var obj1 = {};
Object.defineProperty(obj1, 'name', {
	value: '张三',
	writable: false,
	enumerable: true,
	configurable: false 	// 一旦为false，就不可以修改除writable之外的配置了，会报错
});
obj1.name = 'asdasd';	// 非严格模式：无作用，不报错， 严格模式会报错。
delete obj1.name;		// 同上
console.log(obj1.name);

/**
 * 访问器属性
 * 1. [[Configurable]]：可配置，同上
 * 2. [[Enumerable]]：可枚举
 * 3. [[Get]]：getter function, 不指定为不可读，严格模式会报错。
 * 4. [[Set]]: setter function，不指定为不可写，严格模式会报错。
 * 
 * 修改属性也行：Object.definedProperty(obj, propName, descObj) (configurable, enumerable, get, set)
 */
var obj2 = {};
Object.defineProperty(obj2, 'name', {
	get: function () {
		return this.value;
	},
	set: function (newName) {
		if (newName === this._name) return;
		console.log('setter: ' + newName);
		this._name = newName;
	}
});
obj2.name = '李四';
console.log(obj2);

/**
 * 定义多个属性
 * Object.defineProperties(obj, descObj)
 */
var obj3 = {};
Object.defineProperties(obj3, {
	_name: {
		value: '张三'
	},
	name: {
		set: function (value) {
			console.log('setter: ' + value);
			this._name = value;
		},
		get: function () {
			console.log('getter: ' + this._name);
			return this._name;
		}
	}
});
obj3.name = 'asdas';
console.log(obj3.name);

/**
 * 读取属性特性
 * Object.getOwnPropertyDescriptor(obj, propName);
 */
console.log(Object.getOwnPropertyDescriptor(obj3, 'name'));