//Offer Bar//
var offerBar = document.querySelector(".offer-bar")
document.getElementById("offer-close")
.addEventListener("click",function(){
    offerBar.style.display="none"
})


//Side Navbar//
var sideNavmenu = document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavmenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})
document.getElementById("side-navbar-close")
.addEventListener("click",function(){
    document.querySelector(".side-navbar").style.marginLeft="-50%"
})

//Slider//
var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton = document.getElementById("slider-right-activate")
var sliderimage = document.querySelector(".slider-image-container")
var slidermargin = 0

sliderrightbutton.addEventListener("click",function(){

    slidermargin=slidermargin+100
    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw"
    }
})

sliderleftbutton.addEventListener("click",function(){

    if(slidermargin==0)
    {
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw"
    }
    else{
        slidermargin=slidermargin-100
        sliderimage.style.marginLeft="-"+slidermargin+"vw"
    }
})


//Most Wanted//

var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach(function(btn){
    btn.addEventListener("click",function(e){

        if(e.target.src.indexOf("blackheart")>0)
        {
            e.target.src="img/Logos/redheart.png"
        }
        else{
            e.target.src="img/Logos/blackheart.png"
        }
    })
})

//Scroll Animation//
window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach(function(el){
        windowHeight = window.innerHeight
        var elbound =el.getBoundingClientRect()

        if(windowHeight>elbound.top-100)
        {
            el.classList.remove("reveal-scroll-animate")
        }
    })
})



