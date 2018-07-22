/**
 * 声明
 */

// 变量
let width = 5;

// 常量
const PI = 3.14;

/**
 * 基本类型
 */

// undefined => 'undefined'
let tUndefined;

// null
let tNull = null;

// number
let tNum = 1;

// boolean
let tBoolean = true;

// string
let tString = 'demo';

// symbol
let tSymbol = Symbol('demo');

/**
 * 引用类型
 */
let tObject = {};
let tFunction = () => null;
let tArray = [];

/**
 * 类型判断
 */

// 基本类型使用typeof
typeof tUndefined; // 'undefined'
typeof tNull; // 'object'
typeof tNum; // 'number'
typeof tBoolean; // 'boolean'
typeof tString; // 'string'
typeof tSymbol; // 'symbol'

// 区分对象与null
!!tNull; // false
!!tObject; // true

// 判断原生引用对象使用Object.prototype.toString
Object.prototype.toString.call(tArray).slice(8, -1); // 'Array'

// 判断对象是否为类的实例使用instanceof
tArray instanceof Array; // true