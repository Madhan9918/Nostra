var sideNavMenu = document.getElementById("side-navbar-activate")
var sidenabar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenabar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close")
.addEventListener("click",function(){
    document.querySelector(".side-navbar").style.marginLeft="-50%"
})