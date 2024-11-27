const icon = document.querySelector(".icon")
const navBody = document.querySelector(".nav-body")
console.log(icon);

const NavBarToggle = ()=>{
    console.log("toggled");
    
}
icon.addEventListener("click" , (()=>{
    navBody.classList.toggle("active")
}))
