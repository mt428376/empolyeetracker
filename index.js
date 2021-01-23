const mysql = require("mysql");
const { title } = require("process");
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


function ViewAllEmployees () {
    inquirer
    .prompt({
      
        type:"list", 
        message: " Which  employee's manager do you want to update?",
        name: "name",
      
    },
    )
    }


    function ViewAllRoles () {
        inquirer
        .prompt({
           id: "1,2,3,4,5,6,7,8",
           first_name:" John,Mike,Ashley,Kevin,Malia,Sarah,Tom ",
            last_name:"Doe, Chan,Rodriguez,Tupik,Brown,Lourd,Allen",
            title:"Sales Lead,Salesperson,Lead Engineer, Software Engineer,Accountant,Legal Team Lead, lawyer",
            department: "sales, sales,engineering,engineering,finance,legal,legal",
            salary:"100000,80000,150000,120000,125000,25000,190000",
            manager:"Ashley Roderiguez, John Doe,null,Ashley Roderiguez,null,null,Sarah Lourd",
        }
        )
    }
      
        
        
    
