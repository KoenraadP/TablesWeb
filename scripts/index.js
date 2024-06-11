"use strict";

// add names to select

const userSelect = document.getElementById("user-select");

fetch("users.json")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
           const option = document.createElement("option");
           option.value = user.name;
           option.textContent = user.name;
           userSelect.appendChild(option);
        });
    })
    .catch(error => console.error("Error loading user data", error));

// form event
// save name to session and proceed to next page

const form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    sessionStorage.setItem("user",userSelect.value);
    location.assign("tables.html");
})