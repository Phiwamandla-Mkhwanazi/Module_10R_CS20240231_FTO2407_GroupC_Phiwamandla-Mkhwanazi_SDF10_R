"use strict";

//Declare and Initialize variables
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
const inputFieldEl = document.getElementById("input-field");
const itemListEl = document.getElementById("item-list");
const addButtonEl = document.getElementById("add-button");


/*Database Connection - Start*/
 const firebaseConfig = 
  {   
      databaseURL : "https://shopping-cart-codecat-default-rtdb.europe-west1.firebasedatabase.app/"
  }

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "Shopping Cart")
/*Database Connection - End*/ 



// Event listener for the 'Add to cart' button
addButtonEl.addEventListener("click", function() 
{
    let inputValue = inputFieldEl.value.trim(); 
    console.log(inputValue)
    push(referenceInDB,inputValue)// Add Items to the database
    if (inputValue !== "") 
    { // Check if the input is not empty
        // Create a new list item element for the cart item
        let itemEl = document.createElement("li");
        itemEl.textContent = inputValue; // Set the list item text to the input value
        
        // Append the new list item to the item-list
        itemListEl.appendChild(itemEl);
        
        // Clear the input field for the next entry
        inputFieldEl.value = "";
    }
});
