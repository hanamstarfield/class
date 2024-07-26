1.
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1); // [10, 2, 3] arr1과 arr2 가 같은 주소값을 참조하기 때문에 arr2배열이 수정되면 arr1 배열도 수정된다. 
console.log(arr1 === arr2);  // 결국 같은 주소값을 참조하기 때문에 두 배열은 같다고 나올것이다.



2.
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {...obj1};
obj2.d = 4;
console.log(obj2); // 굿



// obj1을 얕은 복사하는 코드로 작성해주세요

/* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */

/* 해당값 obj1, obj2의 값을 출력해주세요 */