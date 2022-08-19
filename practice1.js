function fun1(){
   username = document.getElementById("username");
   console.log(username.value);
}
function fun2(){
    parseInt(password) = document.getElementById("password");
    console.log(password.value);
}
function fun(){
        if ((username.value == "gopalan@aditiconsulting.com" || username.value == 9010116827) && password.value == 9010116827){
            document.getElementById("error").style.display="none";
            window.location.href="https://www.aditiconsulting.com/";
            alert("welcome GOPALA KRISHNA");
           return;
        }else{
            document.getElementById("error").style.display="block";
        }

    }
function reset(){
    document.getElementById("username").value="";
    document.getElementById("password").value="";
    document.getElementById("error").innerHTML="";

}