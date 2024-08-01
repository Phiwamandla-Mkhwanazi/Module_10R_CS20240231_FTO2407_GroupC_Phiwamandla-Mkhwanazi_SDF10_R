"use strict";

/*Database Connection - Start*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = 
{
    databaseURL : "https://shopping-cart-codecat-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig.databaseURL);
const database = getDatabase(app);
console.log(firebaseConfig.databaseURL)
/*Database Connection - End*/ 

const inputFieldEl = document.getElementById("input-field");
const itemListEl = document.getElementById("item-list");
const addButtonEl = document.getElementById("add-button");

// Event listener for the 'Add to cart' button
addButtonEl.addEventListener("click", function() 
{
    let inputValue = inputFieldEl.value.trim(); // Trim to remove leading/trailing whitespace
    console.log(inputValue); // Log the input value to the console

    if (inputValue !== "") { // Check if the input is not empty
        // Create a new list item element for the cart item
        let itemEl = document.createElement("li");
        itemEl.textContent = inputValue; // Set the list item text to the input value
        
        // Append the new list item to the item-list
        itemListEl.appendChild(itemEl);
        
        // Clear the input field for the next entry
        inputFieldEl.value = "";
    }
});
