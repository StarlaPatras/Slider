// header

let menu = document.querySelector("#menu-bars")
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}

// Home

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

//Review
var swiper = new Swiper(".review-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


//Order

let form = document.getElementById('form')
let username = document.getElementById('username')
let number = document.getElementById('number')
let order = document.getElementById('order')
let additionalFood = document.getElementById('additionalFood')
let address = document.getElementById('address')
let message = document.getElementById('message')


 form.addEventListener('submit',  (e) => {

   let messages = []
  if (username.value === '' || username.value == null) {
   messages.push('Name is required')
    }


 if (messages.length > 0) {
     e.preventDefault()
     errorElement.innerText = messages.join(', ')
   }
   })


//  form.addEventListener('submit',  (e) => {
//    e.preventDefault()

//  })




