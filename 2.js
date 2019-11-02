

function isUsernameValid(username) {

    let regex = /[a-z]{5,}/;
    let test = regex.test(username);
    console.log(test);
}

function isPasswordValid(password){

    let regex = /^[0-9]{2}([@&])([A-Z]{4})$/;
    let test = regex.test(password);
    console.log(test);
}



isPasswordValid('28@EBIS');
isUsernameValid('bukanebi');