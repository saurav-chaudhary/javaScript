/**
 * Create the following functions
1. Create a function called calculateSalary() which takes employee salary as a parameter and increment the salary by 15% and returns the updated salary

Input:  calculateSalary(20000)
Output : 23000

Input : calculateSalary(-2000)
Output: Error : Enter valid input




 */
  function calculateSalary(salary)
  {
    if(salary<0){
        throw 'Salary must be positive number';
    }
    if(!Number.isInteger(salary)){
        throw 'Enter Valid Input'
    }
    if(salary===null){
        throw 'Enter Valid Input';
    }
    else{
    let prof = (salary*15)/100;
    let increment = prof+salary;
   return increment;

    }
  }

module.exports = calculateSalary;
