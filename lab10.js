//LAB 10-DATA STORAGE: INDEX PAGE
const lifetimeCookie = 60 * 60 * 24;

//Cookie Factory: makes cookies
function cookieFactory(cookieName, cookieValue, lifetimeCookie) {
    //String literal, creates a concatenated string containing essential cookie info
    var cookieString = `${cookieName}=${cookieValue};max-age=${lifetimeCookie};`;
    //Set the DOM node to the value of the 'cookieString'
    document.cookie = cookieString;
}

//Anonymous function for loading the page.
window.onload = function() {
    //Storing the form as a variable
    var formHandle = document.forms.infoForm;

    //Onsubmit, do the following
    formHandle.onsubmit = function() {
        //Store the value of the inputted name
        var fName = formHandle.f_name.value;
        //Store the value of the chosen color
        var fColor = formHandle.f_color.value;

        //Make a cookie for fName
        cookieFactory("fName", fName, lifetimeCookie);
        //Make a cookie for fColor
        cookieFactory("fColor", fColor, lifetimeCookie);
    };

    //IF the cookie exists, do the following
    if(document.cookie) {
        //Split the cookie on the ';' and store it in a variable
        var cookieArray = document.cookie.split(";");
        //Set a regex test in a variable
        const regexTestOne = /^[ ]*fName=.*/;
        //Set a regex test in a variable
        const regexTestTwo = /^[ ]*fColor=.*/;

        //For each cookie, if it passed the first test do this
        cookieArray.forEach(element => {
            if (element.search(regexTestOne) === 0) {
                var name = element.split('=')[1];
                document.getElementById('newMsgBox').innerHTML = `Welcome, ${name}!`;
            //Otherwise, do this
            } else if(element.search(regexTestTwo) === 0) {
                var color = element.split('=')[1];
                document.body.style.backgroundColor = color;
            }
        });
    }

    document.getElementById('btnDel').onclick = function() {
        //Delete a cookie
        cookieFactory("fName", "", 0);
        //Delete a cookie
        cookieFactory("fColor", "", 0);
        location.reload();
    };
};