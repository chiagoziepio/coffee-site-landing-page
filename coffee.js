const login = document.querySelector(".login");
const loginForm = document.querySelector(".loginForm");
const signinBtn = document.querySelector(".signinBtn");
const actionBtn = document.querySelector(".actionBtn");
const signinLink = document.querySelector(".signupLink");
const signupLink = document.querySelector(".signinLink");
const closeIcon = document.querySelector(".closeIcon");

signupLink.addEventListener("click", ()=>{
    loginForm.classList.add("swipe");
});
signinLink.addEventListener("click",()=>{
    loginForm.classList.remove("swipe");
});
closeIcon.addEventListener("click",()=>{
    login.classList.remove("popup");
});
actionBtn.addEventListener("click",()=>{
    login.classList.add("popup")
})
signinBtn.addEventListener("click",()=>{
    login.classList.add("popup")
})