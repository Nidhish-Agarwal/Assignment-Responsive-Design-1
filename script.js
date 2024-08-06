const hamburger=document.getElementsByClassName('hamburger')[0];
console.log(hamburger)
const nav=document.getElementsByClassName('nav-items')[0]
console.log("nav")

hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('active');
})


console.log("I am working")