let qvit = 30;
let qder = 9;
let saldoRank = qvit - qder;

function nivelC ( saldoRank){
    if (saldoRank < 10){
        return  `Ferro`;
    } else if (saldoRank >10 && saldoRank <= 20){
        return`Bronze`;
    } else if (saldoRank > 20 && saldoRank <= 50){
       return `Prata`;
    } else if (saldoRank > 50 && saldoRank <= 80){
        return `Ouro`;
    } else if (saldoRank > 80 && saldoRank <= 90){
       return `Diamante`;
    } else if (saldoRank > 90 && saldoRank <= 100){
        return `Lendario`;
    } else {
        return `Imortal`;
    }


}

console.log(`O Herói tem de saldo de **`+ saldoRank + `** está no nível de **`+ nivelC( saldoRank) + `**`);
