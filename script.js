const menubtn =document.querySelector("#menu__btn")
const closebtn =document.querySelector("#close__btn")

const menuItem=document.querySelector("nav .container ul")

// menu items
menubtn.addEventListener('click',()=>{
    menuItem.style.left = "0"
    menubtn.style.display="none"
    closebtn.style.display ="block";
})

closebtn.addEventListener("click",()=>{
    menuItem.style.left = "-100%"

    menubtn.style.display="block"
    closebtn.style.display ="none";
})

const navItem=document.querySelectorAll("li")
const changeActive=()=>{
    navItem.forEach(item=>{
    const link = item.querySelector("a")
    link.classList.remove('active')
    })
}



navItem.forEach(item=>{
    const link = item.querySelector("a")
    link.addEventListener("click",()=>{
        changeActive()
        link.classList.add('active')
    })
})