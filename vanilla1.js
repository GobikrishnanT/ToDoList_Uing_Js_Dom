
let myForm = document.querySelector('#form_Id');
let Addedtask = document.querySelector('#AddTaskInp_Id');
let myUl = document.querySelector('#taskul_Id');
let delBtn = document.querySelector('#deleteTask_Btn');

myForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    var myLi = document.createElement('li');
    var myBtn = document.createElement('button');
    myBtn.id = "deleteBtn_Id";
    myBtn.type = 'submit';
    myBtn.textContent = "Delete";
    if(Addedtask.value === ""){
        alert("Pls enter the Task");
        
    }
    else{
        myLi.innerText = Addedtask.value;
        myLi.appendChild(myBtn);
        myUl.appendChild(myLi);
        Addedtask.value = "";
    }
    
   
});

myUl.addEventListener('click' , (e) => {
    if(confirm("Are u sure ?")){
        e.target.parentNode.remove();
    }
    else{
        alert("Not deleted");
    }
    
});

delBtn.addEventListener('click' , (e) => {
    let checkPurpose = e.target.previousElementSibling;
     if(checkPurpose.children.length === 0){
         alert("I thin you are tired!");
     }
     else{
        let mylistArr = e.target.previousElementSibling;
        while(mylistArr.firstChild){
            mylistArr.firstChild.remove();
        } 
     }
});


