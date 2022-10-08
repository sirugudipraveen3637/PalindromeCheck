var pos=0;
var taskInput=document.getElementsByClassName("input");
var addTaskBtn=document.getElementsByClassName("addButton")[0];


addTaskBtn.addEventListener("click",addTask)

function addTask(){
	console.log("Add bookmark...");
  
   let bname=taskInput[0].value;
   let reg=/[^A-Za-z0-9]/g;
   let replc=bname.toLowerCase().replace(reg,'');
   let revstr=replc.split('').reverse().join('');

     alert("before"+ replc);
    alert("after"+ revstr);

   if(revstr===replc)
     alert("Its a palindrome");
   else
     alert("Its not a palindrome");
  
    taskInput[0].value="";


 }

