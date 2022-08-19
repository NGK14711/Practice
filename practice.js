let value1 = 0;
let value2 = 0;
let value3 = "";

function myFun1(){
  value1 = document.getElementById("value1");
  console.log(value1.value);
}
function myFun2(){
    value2 = document.getElementById("value2");
    console.log(value2.value);
  }
  
  function funAdd(){
    document.getElementById("sum").innerHTML=parseInt(value1.value)+parseInt(value2.value);
    
  }
  function funSub(){
    document.getElementById("sum").innerHTML=parseInt(value1.value)-parseInt(value2.value);
    
  }
  function funMut(){
    document.getElementById("sum").innerHTML=parseInt(value1.value)*parseInt(value2.value);
    
  }
  function funDiv(){ 
    document.getElementById("sum").innerHTML=parseInt(value1.value)/parseInt(value2.value);
    
  }
  function funClear(){
    document.getElementById("value1").value="";
    document.getElementById("value2").value="";
    document.getElementById("sum").innerHTML="";
    console.log("in clear");
  }