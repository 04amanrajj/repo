let emp =[{name:'aman',age:19,salary:20000},
          {name:'raman',age:19,salary:23000},
          {name:'rahul',age:19,salary:25000},
          {name:'raj',age:19,salary:27000}];


for(let i=0;i<emp.length;i++){
  if(emp[i].salary>=25000){
    console.log(emp[i].name+'-'+emp[i].salary)
  }
}