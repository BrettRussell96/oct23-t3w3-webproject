const themes = {
    light: {
        "50":"#f7fbff",
        "100":"#f0f6ff",
        "200":"#e0eeff",
        "300":"#d1e5ff",
        "400":"#c2dcff",
        "500":"#b3d4ff",
        "600":"#6babff",
        "700":"#2483ff",
        "800":"#005fdb",
        "900":"#004094",
        "950":"#003170"
    },
    dark: {
        "50":"#f7fbff",
        "100":"#dbe9fc",
        "200":"#000000",
        "300":"#000000",
        "400":"#000000",
        "500":"#000000",
        "600":"#000000",
        "700":"#000000",
        "800":"#000000",
        "900":"#000000",
        "950":"#000000"
    }
}


/*
	// Light mode blues 
	--demosite-50: #f7fbff;
	--demosite-100: #f0f6ff;
	--demosite-200: #e0eeff;
	--demosite-300: #d1e5ff;
	--demosite-400: #c2dcff;
	--demosite-500: #b3d4ff;
	--demosite-600: #6babff;
	--demosite-700: #2483ff;
	--demosite-800: #005fdb;
	--demosite-900: #004094;
	--demosite-950: #003170;

	// Dark mode blues
	--demosite-50: #e5ebf4;
	--demosite-100: #cbd8e9;
	--demosite-200: #97b1d2;
	--demosite-300: #6389bc;
	--demosite-400: #406495;
	--demosite-500: #294160;
	--demosite-600: #263b58;
	--demosite-700: #22364f;
	--demosite-800: #1e3047;
	--demosite-900: #1b2a3e;
	--demosite-950: #19273a;
*/


// Update #pageThemeHeading text
function updatePageThemeHeading(){
    let headingToUpdate = document.getElementById("pageThemeHeading");
    headingToUpdate.textContent = getStoredPageTheme();
}

// Update #pageThemeButtom text
function updatePageThemeButtonText(){
    let buttonToUpdate = document.getElementById("pageThemeButton");

    let textToShow = "";

    if (getStoredPageTheme() == "dark"){
        textToShow = "Toggle to Light mode";
    } else {
        textToShow = "Toggle to dark mode";
    }

    buttonToUpdate.textContent = textToShow;
}

// Add onclick 
function togglePageTheme(){
    if (getStoredPageTheme() == "dark"){
        pageTheme = "light";
    } else {
        pageTheme = "dark";
    }
    setPageThemeToStorage();
    applySavedTheme();


}


//apply theme from localstorage
function applySavedTheme(){
    updatePageThemeButtonText();
    updatePageThemeHeading();
    updateCssVariables();
}


// Update CSS variables based on current theme
function updateCssVariables(){
    let themeName = getStoredPageTheme();
    for (const variable in themes[themeName]){
        document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
        console.log("Updated CSS variable --" + variable);
    }
}

let pageThemeToggleButton = document.getElementById("pageThemeButton");
pageThemeToggleButton.addEventListener("click", togglePageTheme);

