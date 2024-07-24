var btnSave=document.getElementById("btn_save");
var main=document.querySelector(".question__main");
var newDiv=document.querySelector(".questions");
 i=0;
    
    var h2=document.createElement("h2");
    var h3__1=document.createElement("h3");
    var h3__2=document.createElement("h3");
    var h3__3=document.createElement("h3");
    var h3__4=document.createElement("h3");
    newDiv.appendChild(h2);
    newDiv.appendChild(h3__1);
    newDiv.appendChild(h3__2);
    newDiv.appendChild(h3__3);
    newDiv.appendChild(h3__4);
    h2.textContent=localStorage.getItem("question'"+i+"'");
    h3__1.textContent=localStorage.getItem("choice1'"+i+"'");
    h3__2.textContent=localStorage.getItem("choice2'"+i+"'");
    h3__3.textContent=localStorage.getItem("choice3'"+i+"'");
    h3__4.textContent=localStorage.getItem("choice4'"+i+"'");
    i+=1;

    