
const inputBox=document.getElementById('toDo');
const tasks=document.getElementById('tasks');
const add=document.getElementById('add_button');
add.addEventListener('click',Addtasks)
function Addtasks(event){
    event.preventDefault();
    if(inputBox.value===''){
        alert("You must write something !!!");
    }
    else{
          let li=document.createElement('li');
          
          li.textContent=inputBox.value;
          inputBox.value="";
          tasks.appendChild(li);
          let span=document.createElement('span');
          span.innerHTML="\u00d7";
          li.appendChild(span);
          tasks.scrollTo(0,tasks.scrollHeight);
          save();
          
    }
}
tasks.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI' ){
        e.target.classList.toggle('check');
        e.target.remove();
        tasks.insertBefore(e.target,tasks.children[0]);
        tasks.scrollTop=0;
        save();
    }
    if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        save();
    }
},false);
function save(){
    localStorage.setItem("data",tasks.innerHTML);
}
function show(){
    tasks.innerHTML=localStorage.getItem('data');
}
show();