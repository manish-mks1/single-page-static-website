const menulistbar=document.querySelector(".container .menulist"),
menucrossbtn=document.querySelector(".container .menulist i"),
menubtn=document.querySelector(".container .header .topheader i"),
homebtn=document.querySelector(".container .header .menu ul .home"),
admissionbtn=document.querySelector(".container .header .menu ul .admission"),
coursebtn=document.querySelector(".container .header .menu ul .course"),
contacttn=document.querySelector(".container .header .menu ul .contact"),
abouttn=document.querySelector(".container .header .menu ul .about"),
homebtnl=document.querySelector(".container .menulist ul .homelist"),
admissionbtnl=document.querySelector(".container .menulist ul .admissionlist"),
coursebtnl=document.querySelector(".container .menulist ul .courselist"),
contacttnl=document.querySelector(".container .menulist ul .contactlist"),
abouttnl=document.querySelector(".container .menulist ul .aboutlist");
menubtn.onclick=()=>{
    menulistbar.classList.add("active");
}
menucrossbtn.onclick=()=>{
    menulistbar.classList.remove("active");
}
homebtn.onclick=()=>{
    homebtn.classList.add("active");
    admissionbtn.classList.remove("active");
    coursebtn.classList.remove("active");
    contacttn.classList.remove("active");
    abouttn.classList.remove("active");
}
admissionbtn.onclick=()=>{
    homebtn.classList.remove("active");
    admissionbtn.classList.add("active");
    coursebtn.classList.remove("active");
    contacttn.classList.remove("active");
    abouttn.classList.remove("active");
}
coursebtn.onclick=()=>{
    homebtn.classList.remove("active");
    admissionbtn.classList.remove("active");
    coursebtn.classList.add("active");
    contacttn.classList.remove("active");
    abouttn.classList.remove("active");
}
contacttn.onclick=()=>{
    homebtn.classList.remove("active");
    admissionbtn.classList.remove("active");
    coursebtn.classList.remove("active");
    contacttn.classList.add("active");
    abouttn.classList.remove("active");
}
abouttn.onclick=()=>{
    homebtn.classList.remove("active");
    admissionbtn.classList.remove("active");
    coursebtn.classList.remove("active");
    contacttn.classList.remove("active");
    abouttn.classList.add("active");
}
homebtnl.onclick=()=>{
    homebtnl.classList.add("active");
    admissionbtnl.classList.remove("active");
    coursebtnl.classList.remove("active");
    contacttnl.classList.remove("active");
    abouttnl.classList.remove("active");
}
admissionbtnl.onclick=()=>{
    homebtnl.classList.remove("active");
    admissionbtnl.classList.add("active");
    coursebtnl.classList.remove("active");
    contacttnl.classList.remove("active");
    abouttnl.classList.remove("active");
}
coursebtnl.onclick=()=>{
    homebtnl.classList.remove("active");
    admissionbtnl.classList.remove("active");
    coursebtnl.classList.add("active");
    contacttnl.classList.remove("active");
    abouttnl.classList.remove("active");
}
contacttnl.onclick=()=>{
    homebtnl.classList.remove("active");
    admissionbtnl.classList.remove("active");
    coursebtnl.classList.remove("active");
    contacttnl.classList.add("active");
    abouttnl.classList.remove("active");
}
abouttnl.onclick=()=>{
    homebtnl.classList.remove("active");
    admissionbtnl.classList.remove("active");
    coursebtnl.classList.remove("active");
    contacttnl.classList.remove("active");
    abouttnl.classList.add("active");
}