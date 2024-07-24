// 문제 4

function 함수명(a, b, c) {
    let result = 0;
    if(b === "+"){
        return result = a + c;
    }else if(b === "-"){
        return result = a - c;
    }else if(b === "*"){
        return result = a * c;
    }else if(b === "/"){
        return result = a / c;
    }

    
    // 코드를 작성해주세요.
}

console.log(함수명(3, "+", 6)); // 결과값 9
console.log(함수명(11, "-", 6)); // 결과값 5
console.log(함수명(6, "*", 3)); // 결과값 18
console.log(함수명(15, "/", 3)); // 결과값 5