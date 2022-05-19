/* 
const name = 'john';
const age = 30;
const isCool = true;
const rating = 4.5
const x = null;
const y = undefined ;
let z; 
console.log(typeof z); */





const name = 'mart';
const age = 24;
const hello = 'My name is ' + name + ' and i am  ' + age + ' yrs old'
console.log(hello)

console.log   (`My name is is ${name} and i am ${age}`);

const sade = 'hello world';
console.log(sade.length);
console.log(sade.toUpperCase());
console.log(sade.toLowerCase());
console.log(sade.substring(0, 5).toUpperCase());
console.log(sade.toLocaleUpperCase());
console.log(sade.split(''));
const message = 'technology, computrrs, code';
console.log(message.split(', '));


//Arrays variables that hold ,multiples values
const numbers = new Array(1,2,3,4,5,6);
console.log(numbers);


const fruit = ['apples', 'oranges', 'pears', 40, true];
fruit[3] = 'grapes';
fruit[5] = 'pawpaw';
fruit.push('mangoes');
fruit.unshift('strawberries');
fruit.pop();


console.log(fruit);
console.log(fruit[1]);
console.log(fruit[4]);
console.log(Array.isArray(fruit));
console.log(fruit.indexOf('grapes'));
//object literal
const person = {
    firstName : 'john',
    lastName : 'Doe',
    age : 60,
    hobbies : ['music', 'movies', 'sports'],
    address : {
        street:'50 main street', 
        city: 'Boston', 
        state : 'india', 
    }
}
console.log(person.firstName, person.lastName);
console.log(person.hobbies[2]);
console.log(person.address.city);
console.log(person.address.state);

//use destruting
const {firstName, lastName, address: {city, state}, } = person;
console.log(firstName, lastName , city, state);
person.email = 'john@gmail com'; // we add  email to list of person
console.log(person);


const todos = [
{
    id : 1,
    text: 'take out trash' ,
    isCompleted : true
},
{
    id : 2,
    text: 'meeting wih boss' ,
    isCompleted : true
},
{
    id : 3,
    text: 'sleeping at home' ,
    isCompleted : false
}
];
console.log(todos);
console.log(todos[1].text);
console.log(todos[0].id);
console.log(todos[2].isCompleted);
console.log(todos[1].text)

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//For loop
for(let i = 0 ; i <= 10; i++){
    console.log(`for loop number : ${i}`);
}

//while loop
let i = 0;
while(i < 10 ){
    console.log(`while loop number ${i}`);
    i++;
}


const cats = [
    {
        id : 1,
        text: 'take out trash' ,
        isCompleted : true
    },
    {
        id : 2,
        text: 'meeting wih boss' ,
        isCompleted : true
    },
    {
        id : 3,
        text: 'sleeping at home' ,
        isCompleted : false
    }
    ];

    // two ways to loop 
for(let cat of cats){
    console.log(cat.text);
    }
    /*
    for(let i = 0 ; i < todo.length; i++){
        console.log(todo[i].text);
        console.log(todo[i].id);
        console.log(todo[i].isCompleted);
    }
*/
//forEash map filter
cats.forEach (function(cat){
    console.log(cat.text);

});

//map
const assign = cats.map(function(cat){
    return cat.isCompleted;
});
console.log(assign)
//filter
const completed= cats.filter(function(cat){
return cat.isCompleted == true;
});
console.log(completed);
//to map one of th item
const complete= cats.filter(function(cat){
    return cat.isCompleted == true;
    }).map(function (cat){
        return cat.text;
        
    });
    console.log(complete);