 
function setBiodata(nama, umur) {

    let biodata = {
        name : nama,
        age : umur,
        addres : "jln.Garuda29",
        hobbies : [
            'main game',
            'nonton'
        ],
        is_married : false,
        list_school : {
            schol1 : {
                name : "Smkn 2 palu",
                yer_in : "2013",
                yer_out : "2015"
            },
            schol2 : {
                name : "Smpn 6 palu",
                yer_in : "2012",
                yer_out : "2013"
            }
        },
        skilss : {
            skill1 : {
                name : "Desktop Programing",
                level : "Beginer"
            },
            skill2 : {
                nama : "Web Programing",
                level : "Beginer"
            },
            skill3 : {
                nama : "Android Programing",
                skill : "Beginer"
            }
        },
        interest_in_coding : true        
    };

    let result = JSON.stringify(biodata);
    return result;
}

let bio1 = setBiodata("febriansyah", 22);
console.dir(bio1);