/**
 * Immutable Object
 */
const yuJin = {
  name: '안유진',
  year: 2003,

  get age(){
    return new Date().getFullYear() - this.year;
  },

  set age(age){
    this.year = new Date().getFullYear() - age;
  }
}

console.log(yuJin);

/**
 * Extensible
*/
console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal';
console.log(yuJin);

Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브';
console.log(yuJin);

delete yuJin['position'];
console.log(yuJin);

console.log('---------');

/**
 * Seal
*/

const yuJin2 = {
  name: '안유진',
  year: 2003,

  get age(){
    return new Date().getFullYear() - this.year;
  },

  set age(age){
    this.year = new Date().getFullYear() - age;
  }
}
console.log(yuJin2);
console.log(Object.isSealed(yuJin2));

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));

yuJin2['groupName'] = '아이브';
console.log(yuJin2);

delete yuJin2 ['name'];
console.log(yuJin2);

Object.defineProperty(yuJin2, 'name', {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

// seal = configurable: false