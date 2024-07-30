var btnSave=document.getElementById("btn_save");
var main=document.querySelector(".question__main");
var newDiv=document.querySelector(".questions");
var count=localStorage.getItem("count");
var button=document.querySelector("button");
var ans=new Array();
 for(i=0;i<count;i++)
 {
    var btn=document.createElement("input");
    btn.classList.add("input'"+i+"'");
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
    newDiv.appendChild(btn);
    h2.textContent=localStorage.getItem("question'"+i+"'");
    h3__1.textContent=localStorage.getItem("choice1'"+i+"'");
    h3__2.textContent=localStorage.getItem("choice2'"+i+"'");
    h3__3.textContent=localStorage.getItem("choice3'"+i+"'");
    h3__4.textContent=localStorage.getItem("choice4'"+i+"'");
 }
 j=0;
 btn.addEventListener("focusout",()=>{
   var input=document.querySelector(".input'"+j+"'");
   input.value="";
   ans.push(anawers);
   console.log(ans);
   j+=1;
 });
document.querySelectorAll(".input").forEach(ele => {
  ele.addEventListener("focusout", () => {
    ans.push(ele.value);
    ele.value = "";
    
  });
