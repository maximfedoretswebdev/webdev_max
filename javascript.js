var objPeople = [
    { // Object @ 0 index
        username: "maximfedorets",
        password: "Maximas2002!"
    },
    { // Object @ 1 index
        username: "maximfedorets",
        password: "Vfrcbv2002!"
    },
    { // Object @ 2 index
        username: "max",
        password: "Maximas2002!"
    }

]

function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for(var i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            window.location.href = 'visits.html';
            return
        }
    }
    alert("incorrect username or password")
}













const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/maximfedorets.vercel.app/visits?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}



// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

var timer = setInterval( updateVisitCount, 1000);