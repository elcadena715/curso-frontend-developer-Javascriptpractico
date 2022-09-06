const Menuemail = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");
const menuCarritoicon = document.querySelector(".navbar-shopping-cart");
const menuHamicon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

Menuemail.addEventListener("click", togglemenu);
menuHamicon.addEventListener("click", toggleMobilemenu);
menuCarritoicon.addEventListener("click", toggleCarrito);

function togglemenu (){
    const isasideClose = aside.classList.contains("inactive");

    if(!isasideClose){
        aside.classList.add("inactive");
    }
    menu.classList.toggle("inactive");
}

function toggleMobilemenu (){
    const isasideClose = aside.classList.contains("inactive");

    if(!isasideClose){
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarrito (){
    const ismobileMenuClose = mobileMenu.classList.contains("inactive");
    
    if(!ismobileMenuClose){
        mobileMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "GRAnggg",
    price: 456,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Kui",
    price: 457,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


for (product of productList){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);


    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}


console.log("JS FUNCIONANDO");