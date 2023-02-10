function sommeTableau(T){
    let s=0;
    for (let i=0; i< T.length; i++){
        s=s+T[i];
    }
    return s;
}
let T = ([1,2,3,4]);
console.log(sommeTableau(T));
