// makeTitleOfApp.js

function makeTitleOfApp()
{
    let mainDiv = ce('div');
    mainDiv.style.position = 'absolute';
    mainDiv.style.right = '20px';
    mainDiv.style.top = '2px';
    mainDiv.style.zIndex = 1;
    ba(mainDiv);

    //-//

    let titleOfApp = ce('a');
    titleOfApp.id = 'titleOfApp';
    titleOfApp.textContent = 'CATopalian HTML JavaScript Code Editor';
    titleOfApp.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_HTML_JavaScript_Code_Editor';
    titleOfApp.target = '_blank';
    titleOfApp.style.fontSize = '17px';
    titleOfApp.style.fontWeight = 'bold';
    titleOfApp.style.textDecoration = 'none';
    titleOfApp.style.color = 'rgb(100, 100, 100)';
    mainDiv.append(titleOfApp);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

