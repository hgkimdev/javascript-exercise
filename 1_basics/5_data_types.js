/**
 * Data Types in JavaScript
 * 
 * Six Primitive Data Types
 * One Object Data Type
 * 
 * Primitive Data Types:
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) Null
 * 5) Undefined
 * 6) Symbol
 * 
 * Object Data Type:
 * 7) Object
 *    Function, Array, Object etc.
*/
let age = 25;
let temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log('----------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('----------------');

/**
 * String
*/

let firstName = 'Jane';
console.log(typeof firstName);

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Template Literals
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶으면 두 번 입력 -> \\
*/
const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung); 
const iveBackSlash = '아이브\\민지';
console.log(iveBackSlash);
const smallQuotation = '아이브\'민지';
console.log(smallQuotation);

const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 장원영');
console.log(`${groupName} 장원영`);
console.log('----------------');

/** 
 * Boolean
*/
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * Undefined
 * 
 * 변수가 선언은 되었지만 값이 할당되지 않은 상태
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값이다.
 * 
 * 직접 Undefined로 값을 초기화 하는 건 지양해야 한다.
*/
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * Null
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개잘자가 명시적으로 없는 값으로 초기화할 때 사용된다.
*/
let init = null;
console.log(init);
console.log(typeof init); // object -> JS의 버그 중 하나
console.log('----------------');

/**
 * Symbol
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 primitive 타입과 다르게 Symbol 함수를 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);