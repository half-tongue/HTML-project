/* console.log('Hello world!');
--
multiline comment
multiline comment
multiline comment
multiline comment
--
console.log('Hello, World!'); // just saying hello

const DOB = 'Feb 27 1995'
// DOB = 'Mar 15 1996'
console.log(DOB);

let firstName = "Stephen"; // ES6 syntax
firstName = "Arya";
console.log(firstName);
console.log(typeof firstName);

var age = 44; // ES5 syntax
// age = Number('72') + Number('11');
age = 72 + 11;
age = 45.8772;
console.log(age);
console.log(typeof age);


let friday = true;
friday = false;
console.log(friday);

// fruits has a global scope
let fruits = new Array('apple', 'kiwi', 'orange', 'dragonfruit', 'grape');
fruits.push('pineapple');
fruits.push('kale'); // add item to array
console.log(fruits);
fruits.pop(); // remove last item from array
console.log(fruits);
let slicedOrange = fruits[2].split('');
console.log(slicedOrange);

--
function sayName() { // ES5
    console.log('My name is Connie');
}
--

let sayName = (name, fruit) => { // ES6
    console.log('My name is ' + name + '. My favourite fruit is ' + fruit + '.');
    // console.log("My name is Connie. My favourite fruit is fruit.");
    let peel = false; // local scope
    console.log(`My name is ${name}. My favourite fruit is ${fruit}.`);
}

sayName("Connie", fruits[1]);
sayName(firstName, 10);
sayName("Stephen", fruits[3]);

--
console.log(typeof peel);
console.log(peel == undefined);
if (peel != 1) {
    console.log(`Sorry, no peel.`);
}
--

for (let i = 0; i < fruits.length; i++) { // for loop
    sayName("Bob", fruits[i]);
}

let j = 0;
while (j < fruits.length) { // while loop
    sayName("Bob", fruits[j]);
    j++;
}
*/

document.getElementById("copyrightYear").innerHTML = new Date().getFullYear()

function buttonAlert() { /* go to top */
    alert("BLASTOFFFFFFF!");
}

document.getElementById("topbutt").onmouseover = () => {
    document.getElementById("topbutt").innerText = "Blastoff?";
}

document.getElementById("topbutt").onmouseleave = () => {
    document.getElementById("topbutt").innerText = "Top";
}

let count = 0;
document.getElementById("countButt").onclick = () => {
    count += 1;
    document.getElementById("countNum").innerHTML = count;
    if (count % 2 == 0) {
        document.getElementById("countNum").classList.toggle("oddColor");
        document.getElementById("countNum").classList.add("evenColor");
    } else {
        document.getElementById("countNum").classList.toggle("evenColor");
        document.getElementById("countNum").classList.add("oddColor");
    }
}

for (let i = 0; i < 100; i += 1) {
    let listItem = document.createElement("li");
    if (i % 2 === 0) {
        listItem.textContent = "even";
    } else {
        listItem.textContent = "odd";
    }
    document.getElementById("lottaNumbs").appendChild(listItem);
  }

