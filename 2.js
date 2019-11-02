

function isUsernameValid(username) {

    let regex = /[a-z]{5,}/; //username minimal 5 charater, harus huruf kecil semua
    let test = regex.test(username);
    console.log(test);
}

function isPasswordValid(password){

    let regex = /^[0-9]{2}([@&])([A-Z]{4})$/; //2 angka diawal, diikuti @|& 4 char capital di akhir.
    let test = regex.test(password);
    console.log(test);
}



isPasswordValid('28@EBIS');
isUsernameValid('bukanebi');