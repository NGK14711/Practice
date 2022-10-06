let username = "";
let username1 = "";
let password = "";
let password1 = "";
let firstname = "";
let firstname1 = "";
let lastname = "";
let lastname1 = "";
let dob = "";
let dob1 = "";
let email = "";
let email1 = "";
let pass = "";



function fun1() {
    username = document.getElementById("username");
    console.log(username1);                                               
}
function fun2() {
    password = document.getElementById("password");
    console.log(password1);                                               

}
function fun() {
    console.log(username1);
    const myArray = username1.split(",");
    let index = myArray.length+1;
    for (let i = 0; i < myArray.length; i++) {
        if(username.value == myArray[i]){                                
            index = i;
            break; 
        }  
    }
    if(index == myArray.length+1 || username.value == ""){
        document.getElementById("error").style.display="block";
        return;
    }
    if (password.value == password1.split(",")[index]) {
        document.getElementById("error").style.display = "none";
        // window.location.href = "https://www.aditiconsulting.com/";
        alert("welcome " + firstname1.split(",")[index]+ " " + lastname1.split(",")[index]);
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("dob").value = "";

        return;
    } else {
        document.getElementById("error").style.display = "block";
    }

}
function reset() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error").innerHTML = "";
}
function funfirst() {
    firstname = document.getElementById("firstname");
    console.log(firstname.value);
}
function funlast() {
    lastname = document.getElementById("lastname");
    console.log(lastname.value);
}
function fundob() {
    dob = document.getElementById("dob");
    console.log(dob.value);
}
function funpass() {
    pass = document.getElementById("pass");
    console.log(pass.value);
}
function funemail() {
    email = document.getElementById("email");
    console.log(email.value);
}
function submit() {
    // console.log(firstname1.value, lastname1.value, dob1, password1);
    firstname1 = firstname1 + "," + firstname.value;
    lastname1 = lastname1 + "," + lastname.value;
    dob1 = dob1 + "," + dob.value;                                                  
    password1 = password1 + "," + pass.value;
    username1 = username1 + "," + email.value;
    console.log(username1 + " " + password1);
    alert("signed up succesfully");
    document.getElementById("signindetails").style.display = "block";
    document.getElementById("signupdetails").style.display = "none";
}
function btsignin() {
    document.getElementById("signindetails").style.display = "block";
    document.getElementById("signupdetails").style.display = "none";
    console.log("science is fun");
    
}
function btsignup() {
    document.getElementById("signupdetails").style.display = "block";
    document.getElementById("signindetails").style.display = "none";
    console.log("abrakadabra");
}
