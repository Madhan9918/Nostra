import { products } from "./products.js"

//Offer Bar//
var offerBar = document.querySelector(".offer-bar")
document.getElementById("offer-close")
    .addEventListener("click", function () {
        offerBar.style.display = "none"
    })


//Side Navbar//
var sideNavmenu = document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavmenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px"
})
document.getElementById("side-navbar-close")
    .addEventListener("click", function () {
        document.querySelector(".side-navbar").style.marginLeft = "-50%"
    })

//Products//
var container = document.querySelector(".products")
products.forEach(function (product) {
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML = ` <img style="width: 20vw; height: 26vw; border-radius:5px" 
    src= "img/${product.src}">
    <h3>${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`
    container.append(createItem)
})

//Filter Products//

var filterList = []
var tags = document.getElementsByName("tags")
tags.forEach(function (tag) {
    tag.addEventListener("change", function (e) {
        if (e.target.checked) {
            filterList.push(e.target.value)
            update()
        }
        else {
            filterList = filterList.filter(item => item !== e.target.value)
            update()
        }
    })
})

function update() {
    var productList = document.querySelectorAll(".product")
    for (var i = 0; i < productList.length; i++) {
        var check = false
        var product = productList[i]
        var temp = product.querySelector("tags").innerHTML
        const tempFilterArray = temp.split(",")
        filterList.forEach(function (j) {
            tempFilterArray.forEach(function (i) {
                if (j == i) {
                    check = true
                }
            })
        })
        if (!check && filterList.length > 0) {
            product.style.display = "none"
        }
        else {
            product.style.display = "block"
        }
    }

}
