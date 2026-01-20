/**
 * Naming Conventions
 * 
 * 1) 일반적으로 라틴문자를 사용하며 문자와 숫자를 모두 사용할 수 있다/
 * 2) 특수기호는 언더스코어(_)와 달러($)만 허용된다.
 * 3) 숫자로 이름을 시작할 수 없다.
 * 4) 키워드는 변수명으로 사용할 수 없다.
 */
let firstName = 'Jane';
let $lastName = 'Doe';
let _fullName = firstName + ' ' + $lastName;
console.log(_fullName);

// let 1stName = 'Error'; // 오류
// let const = 'Error'; // 오류