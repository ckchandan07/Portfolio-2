let Open = document.querySelector("#btns");
let Closes = document.querySelector("#close");
let link = document.querySelector(".main-text")
let links = document.querySelector(".main-text ul")

Open.addEventListener("click",()=>{
   if(link.style.display = "flex") {
     Closes.style.display = "block"
     Open.style.display = "none"
   }
   else{
      Open.style.display = "none"
   } 
});

Closes.addEventListener("click",()=>{ 
     console.log("hello")
     link.style.display = "none"
     Open.style.display = "flex"
     Closes.style.display = "none"
     
});

links.addEventListener("click",()=>{ 
    // links.style.display = "none"
     Closes.style.display = "none"
      Open.style.display = "flex"
      link.style.display = "none"
    
    
});