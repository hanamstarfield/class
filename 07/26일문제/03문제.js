function deepCopy(o) {
    var result = {};
    if (typeof o === "object" && o !== null)
      for (i in o) result[i] = deepCopy(o[i]);
    else result = o;
    return result;
  }


const student = {
    name: "yuno",
    age: "30",
    skill: ["javascript"],
    address: {
      city: "seoul"
    }
  };
  
  // 얕은 복사를 수행하여 shallowCopy를 만들어주세요.
  const shallowCopy = {...student};
  console.log(shallowCopy);
  // 깊은 복사를 수행하여 deepCopy를 만들어주세요.
  const deepCopy1  = deepCopy(student);
  
  // 얕은 복사 객체와 원본 객체를 비교하여 출력해주세요
  console.log("1. 원본 객체(student)와 얕은 복사 객체가 같을까요?",student === shallowCopy); // false 얕은 복사 객체는 주소값을 복사하고 새로운 객체를 생성한다. 따라서 두 객체는 다르다고 판단.
  
  // 얕은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
  console.log("2. 원본 객체의 address와 얕은 복사 객체의 address가 같을까요?", student.address === shallowCopy.address); // true 얕은 복사는 주소값을 복사한다. 같은 객체의 데이터를 참조하기 때문에 같다고 나온다.
  
  // 깊은 복사 객체와 원본 객체를 비교하여 출력해주세요.
  console.log("3. 원본 객체(student)와 깊은 복사 객체가 같을까요?", student === deepCopy1); // false 깊은 복사는 모든 데이터를 새롭게 복사해온다. 그러므로 두 객체는 다른 객체가 된다.
  
  // 깊은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
  console.log("4. 원본 객체의 address와 깊은 복사 객체의 address가 같을까요?", student.address === deepCopy1.address); // false 완전히 새롭게 카피해왔기 때문에 바라보는 주소값과 데이터가 다르다고 판단한다.

  
  
  //2.
  // 동일한 student로 진행합니다. 
  
  // 얕은 복사한 객체에 배열요소 변경 javascript -> js으로 변경해주세요 
  shallowCopy.skill = "js";

  // 깊은 복사 객체의 주소 속성을 변경하세요 (예: city를 "busan"으로 변경)
  deepCopy1.address.city = "busan";

  // 결과 확인 
  console.log("5. 원본 객체(student):", student); 
  console.log("6. 얕은 복사된 객체(shallowCopy):",shallowCopy); 
  console.log("7. 깊은 복사된 객체(deepCopy):", deepCopy1);
  
// 1~7번까지 출력값을 출력해보고 적어주세요
//  예 ) 
//   1 ~ 4 번은 문제 옆에 작성했습니다!.
//   5.   
// {
//   name: 'yuno',
//   age: '30',
//   skill: [ 'js' ],
//   address: { city: 'seoul' }
// }

// 6.
// {
//   name: 'yuno',
//   age: '30',
//   skill: [ 'js' ],
//   address: { city: 'seoul' }
// }

// 7.
// {
//   name: 'yuno',
//   age: '30',
//   skill: { '0': 'javascript' },
//   address: { city: 'busan' }
// }
