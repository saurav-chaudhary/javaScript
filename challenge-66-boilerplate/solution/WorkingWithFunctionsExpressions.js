/*
1.	Create the following function using functional programming
       Create a function which takes employee array and return the 
       employee who is having more salary      

*/ 

function findEmployee(empArrayNegativeInput)
{
      if(empArrayNegativeInput<0)
      {
       throw 'Input must be an Array of employees';
      }
      if(typeof empArrayNegativeInput==='string')
      {
       throw 'Input must be an Array of employees';
      }
      if(empArrayNegativeInput===null)
      {
       throw 'Input must be an Array of employees';
      }
      if(!empArrayNegativeInput.salary){
             throw 'Array must contain employee objects with salary key';
      }
     
      else{
      const object = arr.reduce((prev, current) =>
        prev.salary > current.salary ? prev : current
    );
    return object;
      }
}

module.exports = findEmployee;
