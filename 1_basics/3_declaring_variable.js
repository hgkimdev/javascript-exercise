/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 사용하지 않음
 * 2) let
 * 3) const
 */
var name = 'John';
console.log(name);

var age = 25;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */
ive = '안유진';
console.log(ive);

const newJeans = '뉴진스'
console.log(newJeans);

// newJeans = '민지';

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것
 * let name;
 * 
 * 2) 할당
 * let name = 'John';
 */

let girlFriend;
girlFriend = 'giulia';
console.log(girlFriend);

/**
 * const는 선언과 동시에 할당해야 한다.
 * const girlFriend2; <- 오류
 */

let city = 'seoul';
city = 'incheon';
console.log(city);

const city2 = 'busan';
city2 = 'daegu';
console.log(city2);