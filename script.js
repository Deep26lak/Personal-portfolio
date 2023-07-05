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

const readMoreContent = document.querySelector(".read__more__content")
const readMoreBtn=document.querySelector(".read__more")

readMoreBtn.addEventListener("click",()=>{
    readMoreContent.classList.toggle("toggle_btn")
  if(readMoreContent.classList.contains("toggle_btn")){
      readMoreBtn.textContent='Show less'
  }else{
    readMoreBtn.textContent ='Read more...'
  }
})


const skillitems=document.querySelectorAll('section.skills .skill')

skillitems.forEach(skill=>{
    skill.querySelector('.head').addEventListener("click",()=>{
        skill.querySelector(".items").classList.toggle("show__more")
    })
})


window.addEventListener("scroll",()=>{
    document.querySelector("nav").classList.toggle("add__shadow",window.scrollY>0)
})


const themeToggler = document.querySelector(".theme-toggler")



themeToggler.addEventListener("click",(e)=>{

    document.body.classList.toggle("dark-theme-variables")
    themeToggler.querySelector("span:nth-child(1)").classList.toggle('active')
    themeToggler.querySelector("span:nth-child(2)").classList.toggle('active')
})


// typing animation 


let typed = new Typed(".typing",{
 strings: ["Front-end Developer" , "UI/UX Designer" ,"Javascript Developer" , "React JS developer"],
 typeSpeed:200,
 backSpeed:100,
 loop:true,

})