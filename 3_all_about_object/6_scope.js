/**
 * Scope
 */
var numberOne = 20;

function levelOne() {
  console.log(numberOne);
}

//levelOne();

function levelOne() {
    var numberOne = 40;

    console.log(numberOne);
};

// levelOne();

console.log(numberOne);

function levelOne() {
  var numberOne = 40;

  function levelTwo() {
    var numberTwo = 99;

    console.log(`levelTwo numberTwo : ${numberTwo}`);
    console.log(`levelTwo numberOne : ${numberOne}`);
  }

  levelTwo();
  console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();

console.log(numberOne);
console.log(numberTwo);