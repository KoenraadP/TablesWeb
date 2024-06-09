"use strict";

const userSelect = document.getElementById("user-select");

fetch("users.json")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
           const option = document.createElement("option");
           option.value = user.id;
           option.textContent = user.name;
           userSelect.appendChild(option);
        });
    })
    .catch(error => console.error("Error loading user data", error));