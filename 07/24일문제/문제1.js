// 문제 1.
// 1. let uninitialized;
// console.log(uninitialized); // 결과값 < undefined : uninitialized : 선언은 했지만 변수에 값이 없음.>


// 2. < const > apple = "사과";
// apple = "바나나"; // TypeError: Assignment to constant variable : const는 변수 재할당이 되지않는다.


// 3. let lotto = [3, 8, 13, 19, 21, 32];
// console.log(lotto[3]); // 결과값 < 19 > : 컴퓨터는 0부터 센다.


// 4. 
// let mySchedule = "";
// console.log(mySchedule || false); // < false >  : 빈 문자열은 false라고 알고있음. 그래서 false
// console.log(!!mySchedule); // < false > : !! = 원점, ! 한개는 초기 논리 연산자의 반대를 말하지만, !! 두개는 원점으로 온다. 고로 빈문자열 false?

