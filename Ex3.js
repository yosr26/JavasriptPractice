function sommeTableau(T){
    let s=0;
    for (let i=0; i< T.length; i++){
        s=s+T[i];
    }
    return s;
}
function moyenneTableau(T){
    return sommeTableau(T)/T.length;
}

let T = ([1,2,3,4]);
console.log(moyenneTableau(T));
