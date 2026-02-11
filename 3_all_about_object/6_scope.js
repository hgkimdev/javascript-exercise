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

    console.log(`levelTwo numberTwo : ${NumberTwo}`);
    console.log(`levelTwo numberOne : ${NumberOne}`);
  }

  levelTwo();
  console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();