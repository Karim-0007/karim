let TextInput = document.querySelector(".TextInput");
let list = document.querySelector(".list");
let Li = document.querySelectorAll(".task");
 let items = document.querySelectorAll(".taskItem");
 








let data = [];
if (localStorage.tasks != null) {
    data = JSON.parse(localStorage.getItem("tasks"))
 
}

// create localStorage & 
TextInput.addEventListener("keypress",(e)=>
{

   
        if (e.key === "Enter" ) {
            if (TextInput.value == "" ) 
                {
        e.preventDefault()
          }
        // console.log(TextInput.value)
else{
        let task = {
            completed :false,
            task : TextInput.value ,
           
        }

        data.push(task)
        localStorage.setItem("tasks",JSON.stringify(data));
    
    }
        ClearAll()
        ShowData()
        count()

        
    }

    
})

// clearAll

function ClearAll()
{
    TextInput.value= ""
}

//ShowData
Li.forEach((ele)=>list.appendChild(ele))
function ShowData() {

    let taskJs = ``

    for (let i = 0; i < data.length; i++) {
        
         taskJs +=
         `
          <li class="task  P ">

                   <div ondblclick="edit(${i})" class="taskItem ${data[i].completed}"  id="taskItem-${i}" >
                            <a id="icon-chacked-${i}" class="icon-chacked ${data[i].completed}"  onclick="Chacked(${i})" href="#"><i  class=" fa-solid fa-check-to-slot"></i></a>
                            <span class="TX"> ${data[i].task}</span>
                            <a class="icon-delete"  onclick="Delete(${i})" href="#"><i class="fa-solid fa-circle-xmark"></i></a>
                   </div>

                </li>
     
        `  
    }
  
 list.innerHTML = taskJs;
allDoneBlack()

 


}



ShowData()


// Chacked
function Chacked(i) {
   
    data[i].completed = !data[i].completed;
 localStorage.setItem( "tasks",JSON.stringify(data));

 ShowData()
   countClear()
   count()
   allDoneBlack()
   
  
   


    
}
// count
function count() {
   let count = document.querySelector(".count")
 if(document.querySelectorAll(".false .icon-chacked").length <= 1)
 {
 count.innerHTML = `(${document.querySelectorAll(".false .icon-chacked").length}) Left Item`;

 }
 else
 {
    count.innerHTML = `(${document.querySelectorAll(".false .icon-chacked").length}) Left Items`;
 }

 

}

// delete 
function Delete(i) {
    console.log(i)
   data.splice(i,1)
   localStorage.setItem( "tasks",JSON.stringify(data))
    ShowData()
    
}
// delete All
function DeleteAll() {
  
    let completedTasks = document.querySelectorAll(".true .icon-chacked");
completedTasks.forEach((ele)=>
{
    let taskid = ele.getAttribute('id');
    data.splice(taskid,1)
})
   
   localStorage.setItem( "tasks",JSON.stringify(data))
    
 
    
   
    ShowData()
     countClear()
    

  }

  function countClear() {
    let DEl = document.querySelector("#clearAll")
    
   
    if(document.querySelectorAll(".false .icon-chacked").length >= 1)
        {
            DEl.innerHTML = `Clear (${document.querySelectorAll(".true .icon-chacked").length}) Completed Item`;
       
        }
        else
        {
            DEl.innerHTML = `Clear (${document.querySelectorAll(".true .icon-chacked").length}) Completed Items`;
        }
        ShowData()

  }
  countClear()
  
// AllDone icon 
function allDoneBlack()
{
    let done = data.every((task) => task.completed);
    if (done) {
document.querySelector('#AllDone').style.color = 'black';
        
    }
    else
    {
document.querySelector('#AllDone').style.color = '#676767a0';

    }
}

// AllDone


function AllDone()
{  
    let done = data.every((task) => task.completed);
    
   if (!done) 
    {
        data.forEach((ele)=>
            {
                       ele.completed = true;
                       localStorage.tasks = JSON.stringify(data)
     ShowData()
   countClear()
   allDoneBlack()
    })

    }
    
    else{
    data.forEach((ele) => {
        ele.completed = false;
        localStorage.tasks = JSON.stringify(data)
     ShowData()
   countClear()

        
    }    
)
   }}
    
    localStorage.setItem( "tasks",JSON.stringify(data));
    
   
    
   
    ShowData()
  
     
    
      
     
   





function edit(i) {
    
    let edit = document.querySelector(`#taskItem-${i}`)
    edit.innerHTML = `
    <input class="edit" type="text" style = "width:100%; border-radius:10px ; outline:none;padding: 5px 10px"> `
    
    let editValue =document.querySelector(".edit") ;
    editValue.focus()
    editValue.value = data[i].task
    editValue.addEventListener("keypress",(e)=>
        {
            if (e.key === "Enter" ) {
                e.preventDefault()
                // console.log(TextInput.value)
          
               

                data[i].task = editValue.value
        
        
        
                
                localStorage.setItem("tasks",JSON.stringify(data));
               
            //    document.querySelector(".count").innerHTML = `(${i+1}) Left Item`
                
                ClearAll()
                count()
                ShowData()
            }
        })
}





let Reload1 = document.querySelector('.Reload-a');
function Reload()
{
    window.location.reload
}


count()
countClear()
ShowData()
allDoneBlack()