
import inquirer from "inquirer";



let todos : string [] = ["mangos", "banana"];



async function createTodo(todos : string[]){

   do{
   let ans = await inquirer.prompt({
      name: "select",
      type: "list",
      message: "Select an operation",
      choices: ["add", "update", "view", "delete"],

   })
   if (ans.select == "add"){
      let addTodo = await inquirer.prompt ({
         name: "todo",
         type: "input",
         message: "What wolud you like to add in your todos",
      });
      todos.push(addTodo.todo);

      // update
   }
      if (ans.select == "update"){

      let updateTodo= await inquirer.prompt({
          name: "todo",
          type: "list",
          message: "What wolud you like to update in your todos",
         choices: todos.map( item => item)
         })

         let addTodo = await inquirer.prompt ({
            name: "todo",
            type: "input",
            message: "What wolud you like to add in your todos",
         })


          let newTodo = todos.filter(val  => val !== updateTodo.todo)
         todos = [...newTodo,addTodo.todo];
      }
      console.log(todos);

      if (ans.select == "view")
      console.log("****TO DO LIS****")
      console.log(todos)
      console.log("************");
      }
      
   while (true)
      
   }



createTodo(todos)


