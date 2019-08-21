

hi.addEventListener("click",()=>{
        let userData = ()=> {
        const value = document.getElementById("userValue").value;
        let head =  document.querySelector("h1");
    
        head.innerHTML = !value ? head.innerHTML = 
        "Please type something." 
        :
        `Welcome ${value}`;
    }
    userData();
})