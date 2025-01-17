//getData 라는 주어진 url을 인자로 받는 함수를 만들어주세요.
//getData 는 3초 후 url이 기준 url과 동일할 경우 성공적으로 데이터를 반환하고, 틀릴 경우 에러를 발생시킵니다.
//then과 catch를 이용하여 데이터를 처리하는 방법과 에러를 처리하는 방법 두 가지를 각각 보여주세요.
const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
    // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === API_URL) {
                resolve("데이터를 가져왔습니다.")
                console.log(resolve);
            } else {
                reject(new Error("잘못된 URL입니다."));
            }
        }, 3000);
    });
}

// ...

// getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.
getData(API_URL)
    .then(data => console.log("성공: ", data))
    .catch(error => console.error("실패: ", error.message))

getData(WRONG_URL)
    .then(data => console.log("성공: ", data))
    .catch(error => console.error("실패: ", error.messager))


//    2. Async / Await 다뤄보기
// 위 1번 문제에서 다루었던 비동기 처리를 async, await 키워드를 사용하여 코드를 수정해서 작성해주세요.

// async await 를 사용한 코드로 변경해보기

async function fetchData(url){
    try {
        const data = await getData(url);
        console.log("성공!: ", data);
    } catch (error){
        console.log("에러!: ", error.message);
    }

};

fetchData(WRONG_URL);