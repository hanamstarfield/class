// 문제 1.
1. let uninitialized;
console.log(uninitialized); // 결과값 < undefined >


2. < const > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable


3. let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >


4. 
let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false >

