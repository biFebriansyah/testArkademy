


function matchChar(aray) {
    
    if(!Array.isArray(aray)) {
        throw "Parameter harus Array"
    }

    let txt = aray.toString(aray);
     for (const re of aray) {
         
        let regex = new RegExp('[' + re + ']' + "{3,}", "g");
        let hasil = regex.exec(txt);
        
        console.log(hasil[0]);
        
     }
    //  console.log(txt);
     
    
}

let theAray = ['cat', 'listen', 'code', 'act', 'silent', 'tac']

let test = /[cat]{3,}/
let str = theAray.toString();


let hasil = test.matchAll(str);
for (const match of hasil) {

    console.log(match);
    console.log(match.index);
    
}

// matchChar(theAray)