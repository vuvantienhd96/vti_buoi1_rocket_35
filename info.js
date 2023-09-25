// khai bao bien trong javascript

var simple;
var simple = 3;


let a, b = 2 ;


// var global scope 
if(a > 2){
    // something
    console.log('hello')
} else if(a = 2) {
    console.log('hi');
} else {
    console.log('nho hon 2')
}

a > 2 ? console.log('hello') : a = 2 ? console.log('hi') : console.log('nho hon 2');

let qbv = 'a';
switch (qbv) {
    case 'a':
        console.log('a')
        break;
    case 'b': 
        console.log('b')
        break;
    default:
        console.log('c')
}


// nulllist operator
 
let user;

console.log(user ?? "Anonymous"); 


// for loop

let i = 0;
while(i < 4){
    console.log(i);
    i++;
}

let i2 = 0;
do {
  alert( i2 );
  i++;
} while (i2 < 3);



for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
  }

  let array = [1,2,4,5,6];


  array.forEach(element => {
    console.log(element)
  });


  // method arrayy
  // regular function
  array.map(function(el) {
    el*2;
  });

  // spead operator



// let and const local scope 
 


// function ham trong javascrupt

// callback 

// promise in javascript 

// object array , method 

// tương tác với DOM

