var qus=document.querySelector(".ques");
var c1=document.getElementById("choice1");
var c2=document.getElementById("choice2");
var c3=document.getElementById("choice3");
var c4=document.getElementById("choice4");
document.getElementById("btn__upload").addEventListener("click",()=>{
    var question=qus.value;
    var ch1=c1.value;
    var ch2=c2.value;
    var ch3=c3.value;
    var ch4=c4.value;
    localStorage.setItem("question",question);
    localStorage.setItem("choice1",ch1)
    localStorage.setItem("choice2",ch2)
    localStorage.setItem("choice3",ch3)
    localStorage.setItem("choice4",ch4)
});