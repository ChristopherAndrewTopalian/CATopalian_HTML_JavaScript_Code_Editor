// saveTextFile.js

function saveTextFile(whichContent, whichFileName)
{
    // make a Blob from whichContent
    let blob = new Blob([whichContent],
    {
        type: 'text/plain'
    });

    //-//

    let url = URL.createObjectURL(blob);

    //-//

    // make a temp anchor for downloading
    let downloadLink = ce('a');
    downloadLink.href = url;
    downloadLink.download = whichFileName;

    // start the download
    downloadLink.click();

    //-//

    // clean up after the download
    URL.revokeObjectURL(url);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

