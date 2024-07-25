var qus=document.querySelector(".ques");
var c1=document.getElementById("choice1");
var c2=document.getElementById("choice2");
var c3=document.getElementById("choice3");
var c4=document.getElementById("choice4");
var answer=document.getElementById("answer");
var ansary=new Array();
i=0;
var cont=0;
document.getElementById("btn__upload").addEventListener("click",()=>{
    var question=qus.value;
    var ch1=c1.value;
    var ch2=c2.value;
    var ch3=c3.value;
    var ch4=c4.value;
    var ans=answer.value;
    cont+=1;
    localStorage.setItem("count",cont);
    localStorage.setItem("question'"+i+"'",question);
    localStorage.setItem("choice1'"+i+"'",ch1);
    localStorage.setItem("choice2'"+i+"'",ch2);
    localStorage.setItem("choice3'"+i+"'",ch3);
    localStorage.setItem("choice4'"+i+"'",ch4);
    i+=1;
    qus.value="";
    c1.value="";
    c2.value="";
    c3.value="";
    c4.value="";
    ansary.push(ans); 
    answer.value="";
    localStorage.setItem("ansArray",ansary)
 
});
console.log(localStorage.getItem("ansArray"));

