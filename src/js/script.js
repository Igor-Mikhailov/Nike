"use strict";
// Анимация кнопки
let navbar = document.querySelector(".navbar-burger");
let Menu = document.querySelector(".main-menu");

navbar.onclick = () =>{
    //Проверка на наличие класса
    if(navbar.classList.contains('active')){
        navbar.classList.remove("active");
        Menu.style.maxHeight = "0"
    }
    else{
        navbar.classList.add("active");
        Menu.style.maxHeight = "720px";
    }
}