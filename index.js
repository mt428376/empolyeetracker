const mysql = require("mysql");
const inquirer = requirer("inquirer");

const connection = mysql.createConnection({
    host:"localhost",

  // Your username
  user: "root",
​
  // Your password
  password: "Mickey19",
  database: "employee_DB",
});
​
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id: ${connection.threadId}`);
  init();
});

function init () {
    inquirer
    .prompt({

        type:"list", 
        message: " What would like?",
        name: "action",
        choices: [ "Remove Employees","Add Employees","Update Employee Role","Update Employee Manager","View All Roles","Add Role Remove Role"]
    }


        
    )
    

}

function AddEmployees () {
    inquirer
    .prompt({
      {
        type:"list", 
        message: " What is the employee's first name?",
        name: "name",
      
    },
    {
    type:"list", 
        message: " What is the employee's last name?",
        name: "name",


    },  
    {


        type:"list", 
            message: " What is the employee's role?",
            name: "role",
    
    
        },  

        {


            type:"list", 
                message: " What is the employee's manager?",
                name: "employee's manager",
        
        
            },  
    )
    

}

function UpdateEmployeeMManager () {
    inquirer
    .prompt({
      {
        type:"list", 
        message: " Which  employee's manager do you want to update?",
        name: "name",
      
    },



    {
        type:"list", 
        message: " which employee do you want to set as manager for the selected employee?",
        name : "name",
        name: "choices",
        choices: [ "Sammy Bob ","Mike Chan","Kevin Tupik ","Malia Brown ","Sarah Lourd ","Tom Allen "],
    },
      
    
    )
}



