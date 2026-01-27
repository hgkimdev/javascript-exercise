/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 *10/ 2 % 3 스트링으로 변환해서
 * 반환받고 싶으면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());
console.log('-------------');

/**
 * DRY -> Don't Repeat Yourself
*/
function calculate(){
  console.log((3 * 10 / 2 % 3).toString());
}

// calculate();

function calculate(number){
  console.log((number * 10 / 2 % 3).toString());
}

calculate(4);
calculate(5);
console.log('-------------');
/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter(매개변수)라고 한다. //number
 * 실제 입력하는 값은 Argument(인자)라고 한다. //4, 5
*/

function multiply(x, y){
  console.log(x * y);
}
multiply(2, 4);

function multiply(x, y = 10){
  console.log(x * y);
}
multiply(2, 4);
multiply(2);
console.log('-------------');

/**
 * 반환받기
 * return
*/
function multiply2(x,y){
  return x * y;
}

const result1 =multiply2(2, 4);
console.log(result1);

const result2 = multiply2(4, 5);
console.log(result2);
console.log('-------------');

/**
 * Arrow function
*/
const multiply3 = (x, y) => {
  return x * y;
}
console.log(multiply3(3, 4));

const multiply4 = (x,y) => x * y;
console.log(multiply4(4, 5));

const multiply5 = x => x * 2;
console.log(multiply5(2));

const multiply6 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply6(2)(5)(7));

function multiply7(x){
  return function(y){
    return function(z){
      return `x: ${x} y: ${y} z: ${z}`;
    }
  }
}
console.log(multiply7(3)(4)(5));

const multiplyTwo = function(x, y){
  return x * y;
}
console.log(multiplyTwo(4, 5));
console.log('-------------');

const multiplyThree = function(x, y, z){
  console.log(arguments);
  return x * y * z;
}
console.log(multiplyThree(4, 5, 6));
console.log('-------------');

const multiplyAll = function (...args) {
  return Object.values(args).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// args 자체가 이미 배열이므로 Object.values 없이 바로 reduce 사용 가능 
const multiplyAll2 = (...args) => { return args.reduce((acc, cur) => acc * cur, 1); };

console.log(multiplyAll2(2, 3, 4, 5)); // 결과: 120
console.log('-------------');

// IIFE : Immediately Invoked Function Expression
(function (x, y){
  console.log(x * y);
})(4, 5);
console.log('-------------');

// Function is Object
console.log(typeof multiply);
console.log(multiply instanceof Object);