let alphabit = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let plane = document.querySelector(".planeText");
let key = document.querySelector(".planeKeyAdd");
let keymulti = document.querySelector(".planeKeyMulti");
let encryption = document.querySelector(".encryptionButton");
let resultOfEncryption = document.querySelector(".resultOfEncryption");


encryption.onclick = () =>{
    let planeText = Array.from(plane.value);
    let ciyperText = [];
    for (let i = 0 ; i < planeText.length; i++ ){
        for(let j = 0 ; j < alphabit.length; j++){
            if (planeText[i] === alphabit[j]) {
                let k1 = parseInt(keymulti.value);
                let ko = parseInt(key.value);
                let z = ((j * k1) + ko) % 26 ;
                ciyperText.push(alphabit[z]);
            }
        }
    }
    resultOfEncryption.innerHTML = ciyperText.join("") ;
}

let cypher = document.querySelector(".cypherText");
let decryption = document.querySelector(".decryptionButton");
let cypherkey = document.querySelector(".cypherKeyAdd");
let cypherkeyMuti = document.querySelector(".cypherKeyMulti")
let resultOfDecryption = document.querySelector(".resultOfDecryption");


decryption.onclick = () =>{
   let cypherText = Array.from(cypher.value);
    let planeText = [];
    for (let i = 0 ; i < cypherText.length; i++ ){
        for(let j = 0 ; j < alphabit.length; j++){
            if (cypherText[i] === alphabit[j]) {
                let ko = parseInt(cypherkey.value);
                let k1 = parseInt(cypherkeyMuti.value);
                let abs = (j - ko) * k1;
                let z ;
                if (abs < 0){
                    z = abs + 26;
                    if (z < 0) {
                        let w = z + 26;
                        planeText.push(alphabit[Math.abs(w)]);
                    }
                    planeText.push(alphabit[z]);
                }else if( abs > 0){
                    z = abs % 26 ;
                    planeText.push(alphabit[Math.abs(z)]);
                }else if (abs == 0){
                    z = 0 ;
                    planeText.push(alphabit[Math.abs(z)]);
                }
            }
        }
    }
    resultOfDecryption.innerHTML = planeText.join("");
}