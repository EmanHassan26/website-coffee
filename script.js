window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{

   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    
   cartItem.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
}
window.onscroll = () =>{
    
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   cartItem.classList.remove('active');

}
