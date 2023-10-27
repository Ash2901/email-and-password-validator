
const error = document.getElementById("error");
const input = document.getElementById("myText");
const button = document.getElementById("button");
const input2 = document.getElementById("myText2");

button.addEventListener("click", function() {
    if(input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) && input2.value.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/)) {
        console.log("Email address is : "+ input.value);
        console.log("Password is: "+ input2.value);
        alert("Welcome to my Page");
    } else {
        alert("Email or Password is invalid");
    }
})

function validateEmail() {
    
    if(!input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        error.innerHTML = "please enter valid email";
        error.style.color = "red";
        error.style.display = "block";
        return false;
     }
     error.innerHTML = "Valid email";
     error.style.display = "block";
     error.style.color = "green";
     return true;
}
 
function validatePassword() {
    if(!input2.value.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/)) {
        error.innerHTML = "please enter valid Password";
        error.style.color = "red";
        error.style.display = "block";
        return false;
    }
        error.innerHTML = "Valid Password";
        error.style.display = "block";
        error.style.color = "green";
        return true;    
}