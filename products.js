//LAB 10-DATA STORAGE: PRODUCTS PAGE

 //IF the cookie exists, do the following
 if(document.cookie) {
    var cookieArray = document.cookie.split(";");
    const regexTestOne = /^[ ]*fName=.*/;
    const regexTestTwo = /^[ ]*fColor=.*/;

    cookieArray.forEach(element => {
        if (element.search(regexTestOne) === 0) {
            var name = element.split('=')[1];
            document.getElementById('newMsgBox').innerHTML = `Welcome, ${name}!`;
        } else if(element.search(regexTestTwo) === 0) {
            var color = element.split('=')[1];
            document.body.style.backgroundColor = color;
        }
    });
}