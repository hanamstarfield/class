//5. forEach로 변환해보기
//예시

//해당 문제를 forEach로 변경하여 풀어주세요
//1. 
let arr = [10, 20, 30]
let result = [];
// 해당 로직을 작성하세요 
arr.forEach(function (item) {
    result.push(item * 10);
});

console.log(arr);
// 결과 값: [100, 200, 300] 출력해주세요 

//2. 
let arr2 = [10, 22, 33]
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성 해주세요
let result1 = [];
arr2.forEach(function (item) {
    if (item % 5 === 0) {
        result1.push(item);
    }
});
console.log(result1);
// 결과값 [10]

// 