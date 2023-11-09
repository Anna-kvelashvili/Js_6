"use strict";
//task1
let newElement = document.createElement("div");
newElement.classList.add("wraper");
let newImage = document.createElement("img");
newImage.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww"
);
newImage.setAttribute("alt", "image");
let titleElement = document.createElement("h2");
titleElement.classList.add("title");
titleElement.textContent = "image title";
newElement.appendChild(newImage);
newElement.appendChild(titleElement);
document.getElementById("box").appendChild(newElement);

//task2
document.querySelectorAll(".newdiv").forEach((item) => {
  let link1 = document.createElement("p");
  link1.textContent = "hello";
  item.appendChild(link1);
});
//task3
let navigationElement = document.getElementById("navBar");
let burgerElement = document.getElementById("burgerBar");

burgerElement.addEventListener("click", function () {
  navigationElement.classList.toggle("activenav");
});
