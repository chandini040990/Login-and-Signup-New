
let feedbackEl = "";
let feedbackEl2 = "";

function valsignForm() {
    const signName = document.getElementById("name").value;
    const signUsername = document.getElementById("username").value;
    const signEmail = document.getElementById("email").value;
    const signPassword = document.getElementById("password").value;
    const feedbackEl = document.getElementById("feedback1");


    if (signName && signUsername && signEmail && signPassword !== "") {
        window.alert("Signup Successful!!");
    }
    else {
        window.alert("Signup Failed!! Enter all the values");
    }
}

function vallogForm() {
    const logUsrname = document.getElementById("username2").value;
    const logPwd = document.getElementById("password2").value;
    const feedbackEl2 = document.getElementById("feedback2");


    if (logUsrname && logPwd !== "") {
        window.alert("Login Successful!!");
    }
    else {
        window.alert("Login Failed!! Enter all the values");
    }
}
