const img = document.querySelectorAll("img");
const container = document.querySelectorAll(".container");

const btn_lunch = document.querySelector(".btn__lunch");
const btn_all = document.querySelector(".btn__all");
const btn_breakfast = document.querySelector(".btn__breakfast");
const btn_shakes = document.querySelector(".btn__shakes");
const btn_dinner = document.querySelector(".btn__dinner");



container.forEach(function (card) {
   const neki = card.classList
   window.addEventListener("DOMContentLoaded", function () {
      neki.remove("hide");
   })


   btn_breakfast.addEventListener("click", function () {
      if(neki.contains("breakfast")){
         neki.remove("hide")
         }
      else {
         neki.add("hide")
      }
   })


   btn_lunch.addEventListener("click", function () {
      if (neki.contains("lunch")){
            neki.remove("hide")
      }
      else{
         neki.add("hide")
      }

   })
   btn_shakes.addEventListener("click", function () {
      if (neki.contains("shakes")){
         neki.remove("hide")
      }
      else{
         neki.add("hide")
      }

   })
   btn_dinner.addEventListener("click", function () {
      if (neki.contains("dinner")){
         neki.remove("hide")
      }
      else{
         neki.add("hide")
      }

   })
   btn_all.addEventListener("click", function () {
      if (neki.contains("container")){
         neki.remove("hide")
      }
      else{
         neki.add("hide")
      }

   })


})




