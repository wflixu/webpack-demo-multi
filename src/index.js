

// let str = require('inline-loader!./a.js')
let str = require('./a.js');

class Animal {
    constructor(){
        this.name = 'dog'
    }
    eat(){
        console.log('dog eating food');
        
    }
}

const dog = new Animal();
dog.eat();

console.log('test wathc');
