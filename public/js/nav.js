const navMenu = document.getElementById('navMenu');
const navBurger = document.getElementById('burger');
const homeBtn = document.getElementById('home-btn');
const browseBtn = document.getElementById('browse-btn');
const smallLogo = document.getElementById('background');
const LoginForm = document.getElementById('btns');

console.log('nav.js');

navBurger.addEventListener('click', function(event){
    event.stopPropagation();
    event.preventDefault();
    navMenu.classList.toggle('is-active');
    console.log("clicked");
});


homeBtn.addEventListener("click", function(){    
    document.location.replace('/');
});

smallLogo.addEventListener("click", function(){    
    document.location.replace('/');
});

browseBtn.addEventListener("click", function(){
    document.location.replace('/browse-events');
});

LoginForm.addEventListener("click", function(){
    document.location.replace('/login');
});