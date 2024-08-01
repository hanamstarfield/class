//1. 출력값과 출력되는 값의 이유를 설명해주세요

var name = "yuno";

function myName(){
    var name = "yuno2";
    function a(){
        console.log(name);
    }
    return a();
}

myName(); 
// yuno2가 출력된다.  name이 지역 변수로 선언되어 있기 때문에 a함수는 자기 밭깥 outer(myName)에서 참조하게 된다.




//2. 출력값과 출력되는 값의 이유를 설명해주세요

function test() {
    var x = 1;

    if(true){
        var x = 2; 
    }

    console.log(x);
}

test();
// 2가 출력된다. var가 함수 스코프를 가지기 때문에 {} 내부에 선언한 변수라도 함수 전체에서 동일한 변수로 간주한다?





//3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.

const nameObj  = {
    name: "yuno",
    method: function() {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();
// 화살표 함수는 this가 함수가 정의한 위치의 this를 그대로 사용한다.
// 일반 함수는 this의 호출 시점에 따라 달라진다? 명시적으로 바인딩하지 않았기 때문에 전역을 가리킨다!