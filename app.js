//======================================== getting data from form======================================================
document.querySelector("form").addEventListener("submit",inputFields);
 let studentName="",studentEmail="",studentPhNo="";
function inputFields(){
event.preventDefault();
studentName=document.querySelector("#name").value;
studentEmail=document.querySelector("#email").value;
studentPhNo=document.querySelector("#number").value;
//console.log(studentName,studentEmail,studentPhNo);

if(studentEmail==""||studentName==""||studentPhNo=="")
window.alert("empty input field submited");
//===============================================putting data in table==========================================================
else{
let tr= document.createElement("tr");
let td1= document.createElement("td");
td1.innerText=studentName;
let td2= document.createElement("td");
td2.innerText=studentEmail;
let td3= document.createElement("td");
td3.innerText=studentPhNo;
let btn=document.createElement("button");
btn.setAttribute("id","delete");
btn.innerText="delete";
tr.append(td1,td2,td3,btn);
document.querySelector("tbody").append(tr);
}
}
