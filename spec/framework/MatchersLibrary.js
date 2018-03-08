//
// describe = function(string) {
//   if (typeof string !== "string") {
//     throw new Error("Incorrect syntax: description must be a string");
//   };
//   console.log(string)
// };

var assert = {
  isTrue: function (assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(assertionToCheck + " is not truthy!")
    } else if (!!assertionToCheck) {
      console.log("Life is green!")
    }
  }
};

////////////////

function expect(subject) {
  return new Test(subject);
}

function describe(string, callback){
  console.log("%c**** " + string + " ***", 'background: #efacdd');
  // document.getElementById("tests").appendChild(`<div>${string}</div>`)
  document.write(`<div class="desc" >***** ${string} ******* </div>`);
  callback();
}

function it(string, callback){
  document.write(`<div class="it" >    ** ${string} ** </div>`)
  beforeEach(beforeEachFunction);
  console.log(string);
  callback();
  console.log("%cHannah is a happy bunny", 'color: #30a337')
}

var beforeEachFunction;

function beforeEach(callback) {
  beforeEachFunction = callback;
  if (callback) {
    callback();
  }
};

function Test(subject) {
  this.subject = subject
  this.secretSquirrel = false
}


Test.prototype = {

  not: function() {
    this.secretSquirrel = true
    return this
  },

  toBe: function(expectation) {
    if (this.secretSquirrel === false) {
      if (this.subject !== expectation) {
        var err = new Error(`${this.subject} is not equal to ${expectation}`)
        document.write(err.stack);
      }
    } else {
      if (this.subject === expectation) {
        throw new Error(`${this.subject} is equal to ${expectation}`)
      }
    }
  },

  toMatchArray: function(expectation) {
    if(this.secretSquirrel === false) {
      if ( !Array.isArray(this.subject) || !Array.isArray(expectation) ) {
        throw new Error("One or more of these elements is not an array")
      }
      if (this.subject.length !== expectation.length) {
        console.log(this.subject)
        throw new Error(`${this.subject} is not the same length as ${expectation}!`);
      }
      for (i = 0; i < this.subject.length; i++) {
        if (this.subject[i] !== expectation[i]) {
          throw new Error (`${this.subject} does not match ${expectation}!`)
        }
      }
    } else {
      if ( !Array.isArray(expectation) ) {
        throw new Error(`${expectation} is not an array`)
      }
      if (this.subject.length === expectation.length) {
        for (i = 0; i < this.subject.length; i++) {
          if (this.subject[i] === expectation[i]) {
            throw new Error ("Arrays are equal")
          }
        }
      }
    }
  },

};
window.onload;
