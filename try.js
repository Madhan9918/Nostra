var container=document.querySelector(".products")
products.forEach((product)=>{
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML=` <img style="width: 16vw; height: 22vw; border-radius:5px; " src="img/${product.src}">
    <h4>${product.name}</h4>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`

    container.append(createItem)
})
