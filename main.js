// import inquirer from "inquirer";
// // variables banaye
// let todosList: string [] = [];
// // //while loop condition
// let condition = true;
// while (condition) 
// //function using
// {
//  let todosQues = await inquirer.prompt([
//     //add 
//     {
//  name: "firstQues",
//  type: "input",
//  message: "What wolud you like to add in your todos",
//  },
// // add more
//  {
//  name: "secondQues",
//  type: "confirm",
//  message: "wolud you like to add more in your todos",
//  default: "true",
//  },
//  //update
// ]);
//  //pushing in to the very frist variable array
//  todosList.push(todosQues.firstQues);
//  //consoling
//  console.log(todosList);
//  //while loop 
//  condition = todosQues.secondQues;
// };
import inquirer from "inquirer";
let todos = ["mangos", "banana"];
async function createTodo(todos) {
    let ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Select an operation",
        choices: ["add", "update", "view", "delete"],
    });
    if (ans.select == "add") {
        let addTodo = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "What wolud you like to add in your todos",
        });
        todos.push(addTodo.todo);
        // update
    }
    if (ans.select == "update") {
        let updateTodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "What wolud you like to update in your todos",
            choices: todos.map(item => item)
        });
        let addTodo = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "What wolud you like to add in your todos",
        });
        let newTodo = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodo, addTodo.todo];
    }
    console.log(todos);
    if (ans.select == "view")
        console.log("****TO DO LIS****");
    console.log(todos);
    console.log("************");
}
createTodo(todos);
