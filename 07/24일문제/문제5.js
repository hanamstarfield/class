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
};


// function newscores(scores) {
//     for(let i=0; i < scores.length; i++){
//         scores[i] = sum(scores[i],"+",3);
//     }
// }
// newscores(scores);


// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]
let updatescores = [];
function newscores(item){
    for(let i=0; i < item.length;i++){
        updatescores.push(sum(item[i],"+",3));
    
}};

newscores(scores);
console.log(updatescores);



// 5번 문제는 필수 문제가 아닌, 4번까지 풀고 여유가 있을 때 풀어보는 선택 문제입니다.

 

// 학교에서 시험을 보았는데 전산 문제로 한 문제의 답이 전부 오답처리가 된 바람에 학생들의 점수를 전부 3점씩 올려주어야 합니다.

// scores에 있는 학생들의 점수를 반복문을 통해 3점씩 올리게 고쳐주시는데 4번 문제를 통해 만든 계산기 함수를 통해 더해주세요.

// const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

// function 함수명(scores) {
//     // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
// }

// console.log(scores);
// // 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]