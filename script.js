let price = 125.0
let currentImage = 0
let numberOfItems = 0
let toggleCart = false
let isToggleMenu = false
let bigImage = document.getElementById("big-image")
let smallImages = Array.from(document.getElementsByClassName("small-picture"))
let bigLightbox = document.getElementById("big-lightbox")
let smallLightboxes = Array.from(
  document.getElementsByClassName("small-lightbox")
)
let quantity = document.getElementById("quantity")
let cartPopUp = document.getElementById("items")
let numberItems = document.getElementById("number-items")
let total = document.getElementById("total")
let cartItems = document.getElementById("cart-items")
let toggleMenu = document.getElementById("toggle-menu")
let emptyCart = document.getElementById("empty")
let notEmptyCart = document.getElementById("not-empty")
let sideMenu = document.querySelector("aside")
function showCart() {
  cartItems.style.display = toggleCart ? "none" : "flex"
  toggleCart = !toggleCart
}
function changeQuantity(number) {
  numberOfItems = numberOfItems + number < 0 ? 0 : numberOfItems + number
  quantity.textContent = numberOfItems
}
function addToCart() {
  if (numberOfItems > 0) {
    cartPopUp.style.display = "flex"
    cartPopUp.textContent = numberOfItems
    emptyCart.style.display = "none"
    notEmptyCart.style.display = "block"
    numberItems.textContent = numberOfItems
    total.textContent = (numberOfItems * price).toFixed(2)
  }
}
function deleteOrder() {
  cartPopUp.style.display = "none"
  emptyCart.style.display = "block"
  notEmptyCart.style.display = "none"
}
function checkOut() {
  cartItems.style.display = "none"
}
smallImages.forEach(img => {
  img.addEventListener("click", () => {
    smallImages.forEach(imgs => {
      imgs.classList.remove("selected")
    })
    img.classList.add("selected")
    currentImage = smallImages.indexOf(img) + 1
    bigImage.src = `images/image-product-${currentImage}.jpg`
  })
})
smallLightboxes.forEach(lightBox => {
  lightBox.addEventListener("click", () => {
    smallLightboxes.forEach(imgs => {
      imgs.classList.remove("selected")
    })
    lightBox.classList.add("selected")
    let imgNumber = smallLightboxes.indexOf(lightBox) + 1
    bigLightbox.src = `images/image-product-${imgNumber}.jpg`
  })
})
function closeLightbox() {
  document.querySelector(".light").style.display = "none"
}
bigImage.addEventListener("click", () => {
  document.querySelector(".light").style.display = "flex"
})
function changeImage(num) {
  if (currentImage + num > 4) {
    currentImage = 1
  } else if (currentImage + num < 1) {
    currentImage = 4
  } else {
    currentImage += num
  }
  bigImage.src = `images/image-product-${currentImage}.jpg`
}
toggleMenu.addEventListener("click", () => {
  if (isToggleMenu) {
    toggleMenu.src = "images/icon-menu.svg"
    sideMenu.classList.add("hidden-menu")
  } else {
    toggleMenu.src = "images/icon-close.svg"
    sideMenu.classList.remove("hidden-menu")
  }
  isToggleMenu = !isToggleMenu
})
