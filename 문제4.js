// 문제 4

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

    
    // 코드를 작성해주세요.

console.log(sum(3, "+", 6)); // 결과값 9
console.log(sum(11, "-", 6)); // 결과값 5
console.log(sum(6, "*", 3)); // 결과값 18
console.log(sum(15, "/", 3)); // 결과값 5