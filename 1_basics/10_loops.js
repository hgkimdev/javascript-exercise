/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for(let i = 0; i < 10; i++){
  console.log(i);
}
console.log('------------');

for (let i = 10; i > 0; i--){
  console.log(i);
}
console.log('------------');

for(let i = 0; i < 3; i++){
  for(let j = 3; j > 0; j--){
    console.log(i,j);
  }
}
console.log('------------');

// *을 이용해서 6*6의 정사각형을 출력해라

// 내 풀이
for (let i =0; i < 6; i++){
  console.log('* * * * * *');
}

console.log('------------');
// 강사 풀이
let square = '';
let side = 6;

for (let i = 0; i < side; i++){
  for (let j = 0; j < side; j++){
    square += '* ';
  }
  square += '\n';
}
console.log(square);

console.log('------------');

/**
 * for..in
*/
const jane = {
  name: 'jane doe',
  age: 25,
  gender: 'female',
}

for (let key in jane){
  console.log(key);
}
console.log('------------');

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

for (let key in iveMembersArray){
  console.log(key);
  console.log(`${key}:${iveMembersArray[key]}`);
}