// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    ba(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.id = 'subDiv';
    subDiv.style.margin = '4px';
    mainDiv.append(subDiv);

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
    subDiv.append(titleOfApp);

    //-//

    let saveContainer = ce('div');
    saveContainer.className = 'row';
    subDiv.append(saveContainer);

    //-//

    let saveButton = ce('button');
    saveButton.textContent = 'SAVE';
    saveButton.onmouseover = function()
    {
        hoverSound();
    };
    saveButton.onclick = function()
    {
        clickSound();

        let content = theTextInput.value;

        saveTextFile(content, fileNameInput.value);
    };
    saveContainer.append(saveButton);

    //-//

    let fileNameInput = ce('input');
    fileNameInput.type = 'text';
    fileNameInput.id = 'fileNameInput';
    fileNameInput.value = 'Untitled';
    fileNameInput.onmouseover = function()
    {
        hoverSound();
    };
    fileNameInput.oninput = function()
    {
        clickSound();
    };
    fileNameInput.onclick = function()
    {
        clickSound2();
    };
    saveContainer.append(fileNameInput);

    //-//

    subDiv.append(ce('hr'));

    //-//

    let fontContainer = ce('div');
    fontContainer.id = 'fontContainer';
    fontContainer.style.marginBottom = 2 + 'px';
    subDiv.append(fontContainer);

    //-//

    let fontSizeLabel = ce('label');
    fontSizeLabel.textContent = 'Font Size';
    fontSizeLabel.style.marginRight = '5px';
    fontContainer.append(fontSizeLabel);

    //-//

    let fontSizeInput = ce('input');
    fontSizeInput.type = 'number';
    fontSizeInput.id = 'fontSizeInput';
    fontSizeInput.value = 24;
    fontSizeInput.style.width = '60px';
    fontSizeInput.oninput = function()
    {
        clickSound2();

        theTextInput.style.fontSize = fontSizeInput.value;
    };
    fontContainer.append(fontSizeInput);

    //-//

    let runButton = ce('button');
    runButton.textContent = 'Run';
    runButton.onmouseover = function()
    {
        hoverSound();
    };
    runButton.onclick = function()
    {
        clickSound();

        ge('output').innerHTML = eval(ge('theTextInput').value);
    };
    fontContainer.append(runButton);

    //-//

    let inputOutputContainer = ce('div');
    inputOutputContainer.style.display = 'flex';
    inputOutputContainer.style.flexDirection = 'row';
    ba(inputOutputContainer);

    //-//

    let theTextInput = ce('textarea');
    theTextInput.id = 'theTextInput';
    inputOutputContainer.append(theTextInput);

    //-//

    let output = ce('iframe');
    output.id = 'output';
    inputOutputContainer.append(output);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

