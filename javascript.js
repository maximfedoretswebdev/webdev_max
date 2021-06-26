var objPeople = [
    { // Object @ 0 index
        username: "Maxim",
        password: "Maximas2002!"
    },
    { // Object @ 1 index
        username: "Max",
        password: "Vfrcbv2002!"
    },
    { // Object @ 2 index
        username: "maxim",
        password: "Maxim2002!"
    }

]

function getInfo() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    for(var i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            window.location.href = 'visits.html';
            return
        }
    }
    alert("incorrect username or password")
}




/* Greeting */
function clock() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    var person = "Max";

if (hourNow > 18) {
    greeting = "Good evening " + person;
}else if (hourNow > 12) {
    greeting = "Good afternoon " + person;
}else if (hourNow > 0) {
    greeting = "Good morning " + person;
}else {
    greeting = "Welcome " + person;
}

document.querySelector(".greeting_txt").innerHTML = greeting;

};

clock()














