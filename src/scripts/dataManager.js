// Declare JS data that we want to store
let cssThemes = [

];

let pageTheme = "dark"

// Read the localstorage
// Read CSS themes
function getStoredCssThemes(){
    // Update the css theme array
    let rawJsonStringCssThemes = localStorage.getItem("cssThemes")
    cssThemes = localStorage.getItem("cssThemes");
    // return the updated data
    return cssThemes;
}
/**
 * Retrieve, assign, and return the latest stored CSS theme list from the browser localstorage
 * @author BigfootDS
 * 
 * @returns String. Should be "light" or "dark"
 */
function getStoredPageTheme(){
    pageTheme = localStorage.getItem("pageTheme");
    return pageTheme;
}

// Create/update local storage
function setCssThemesToStorage(){
    let dataAsJsonString = JSON.stringify(cssThemes);
    localStorage.setItem("cssThemes", dataAsJsonString);
}




/*
cssThemes = [
    {
        name: "blah blah",
        hex: "000000"
    },
    {
        name: "blah blah",
        hex: "000000"
    },
]

"[[Object object], [Object object]]"

JSON.stringify(cssThemes);

"[{'name':'blah blah 100', 'hex': '000000'}, {'name':'blah blah 100', 'hex': '000000'}]""
*/



// Delete localstorage
