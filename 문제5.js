// 5번 문제

const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function sum(firstnum, Operator, secondnumber) {
    let result = 0;
    if(Operator === "+"){
        return result = firstnum + secondnumber;
    }else if(Operator === "-"){
        return result = firstnum - secondnumber;
    }else if(Operator === "*"){
        return result = firstnum * secondnumber;
    }else if(Operator === "/"){
        return result = firstnum / secondnumber;
    }
}


function newscores(scores) {
    for(let i=0; i < scores.length; i++){
        scores[i] = sum(scores[i],"+",3);
    }
}
newscores(scores);


console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]


