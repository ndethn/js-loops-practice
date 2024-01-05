var todos = [
    'clean room',
    'brush teeth',
    'exercise',
    'study javascript',
    'eat healthy'
];

// for loop
// for (i = 0; i < todos.length; i++) {
//     // console.log(todos[i] + '!');
//     todos[i] = todos[i] + '!';
// }

var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
    console.log(i);
}

// for each loop
todos.forEach(function(i) {
    console.log(i);
})

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