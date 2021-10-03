import '../styles/styles.css'
console.log('Its working')

function Person() {
  this.greet = function() {
    console.log("Hello One!");
  }
}

var john = new Person()

john.greet()