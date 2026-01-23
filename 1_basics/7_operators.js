/**
 * Operators
 * 연산자
 */

console.log(10+10);
console.log(10*10);
console.log(10/10);
console.log(10%10);
console.log(10%3);
console.log('----------------');

console.log(10 * (10+10));

/**
 * 증가와 감소
 */
let number = 1;
number++;
console.log(number);

number--;
console.log(number);
console.log('-------------');

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +,- 사용
 */
let sample = '99';

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
console.log(+sample);

sample = '99';
console.log(-sample);
console.log(typeof -sample);

/**
 * 할당 연산자 (assignment operators)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * 비교 연산자 (comparison operators)
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */
console.log(5 == 5);
console.log(5 =='5');
console.log(0 =='');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');
console.log('------------');

// 사용
console.log(5 === 5);
console.log(5 === '5');
console.log(0 ==='');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');
console.log('------------');

console.log(5 != 5);
console.log(0 !='');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');
console.log('------------');

// 사용
console.log(5 !== 5);
console.log(0 !=='');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');
console.log('------------');

/**
 * 대소 관계 비교 연산자
 */
console.log(100>1);
console.log(100<1);
console.log(100<=1);
console.log(100>=1);
console.log('------------');

/**
 * 삼항 조건 연산자 (ternary operator)
 * : 왼쪽은 true일 때, 오른쪽은 false일 때 반환되는 값
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
console.log(10 < 0 ? '10이 0보다 크다' : '10이 0보다 작다');
console.log('------------');

/**
 * 논리 연산자
 * 
 * 1) && (AND)
 * 2) || (OR)
 * 3) ! (NOT)
 */
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('------------');

// ||는 하나만 true여도 true 반환
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('------------');

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log('------------');

/**
 * 단축평가 (Short-circuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */
console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');