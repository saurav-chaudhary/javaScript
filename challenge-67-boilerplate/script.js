

function add()
{
let count = document.querySelector(".button");
console.log("hello");
count.addEventListener('click',(event)=>{
    console.log("hii");
    let c1 = document.querySelector('#countQueryRepositoryInput').value;
    let c2 =document.querySelector('#countQueryIssueType').value;
    console.log(typeof c2);
    let table=document.querySelector('#table1').insertRow(-1);
    let x=c2.split("/");
    let y = table.insertCell(0)
    let z = table.insertCell(1)
    let a = table.insertCell(2)
    let b = table.insertCell(3)
    

    y.innerHTML=c1;
    z.innerHTML=x[0];
    a.innerHTML=x[1];
    b.innerHTML=x[2];

   event.preventDefault();

})
}
