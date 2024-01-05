var todos = [
    'clean room',
    'brush teeth',
    'exercise',
    'study javascript',
    'eat healthy'
];

var todosImportant = [
    'clean room!',
    'brush teeth!',
    'exercise!',
    'study javascript!',
    'eat healthy!'
];

// for loop
// for (i = 0; i < todos.length; i++) {
//     // console.log(todos[i] + '!');
//     todos[i] = todos[i] + '!';
// }

var todosLength = todos.length;
// for (var i = 0; i < todosLength; i++) {
//     console.log(todos[i], i);
// }

// // for each loop
// todos.forEach(function(todo, i) {
//     console.log(todo, i);
// })

//
function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

// console.log(todos);

// while loop
// increment
// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++;
// }

// // decrement
// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--;
// }

// do while loop
// var counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);