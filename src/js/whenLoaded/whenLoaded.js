// whenLoaded.js

function whenLoaded()
{
    makeInterface();

    // add event listener to HTML input textarea
    ge('theTextInput').addEventListener("input", updateOutput);

    // get reference to output
    let output = document.getElementById("output");
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

