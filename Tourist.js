let username_input = document.getElementById("username");
let password_initial = document.getElementById("passi");
let password_final = document.getElementById("passf");
let number_input = document.getElementById("num");

function register(){
    let username= username_input.value;
    let password_i = password_initial.value;
    let password_f = password_final.value;
    let number = number_input.value;

    if(password_i !== password_f){
        window.alert(`Both your password columns should have equal values.`);
    }
    else{
        localStorage.setItem("username" , username);
        localStorage.setItem("phone",number)
        document.getElementById("username").textContent = username;
        window.location.href = "index.html";
        
    }

    

}
window.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username") || "Guest";
    const phone = localStorage.getItem("phone") || "Not provided";

    document.getElementById("username").textContent = username;
    document.getElementById("num").textContent = phone;
});
