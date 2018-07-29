const email = "loremimpsum@gmail.com"
    if (email.indexOf('@') !== -1){
        console.log( "email zawiera @", );
        } else {
        console.log("email nie zawiera @" );
    }   



 
 
 function bgcZwraca(txt){
    txt = txt.charAt(2,4,9).toUpperCase() + txt.slice(1);
    console.log (txt);
}

bgcZwraca["Ala ma kota"];

function mix(txt) {
    let newTxt = '';

    for (let i=0; i<txt.length; i++) {
        if (i % 2 === 0) {
            newTxt += txt.charAt(i).toUpperCase();
        } else {
            newTxt += txt.charAt(i).toLowerCase();
        }
    }
    return newTxt;
}

console.log( mix("Ala ma kota") )