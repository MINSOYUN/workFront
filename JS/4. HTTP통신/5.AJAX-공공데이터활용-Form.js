window.onload = () =>{
    // 현재 나의 위치를 확인하고 mapX, mapY 요소의 value 값에 세팅하기
    if ("geolocation" in navigator) { 
            navigator.geolocation.getCurrentPosition((position) =>{
              doSomething(position.coords.latitude  
              , position.coords.longitude);
            });
      }  else {
            alert('현재위치를 알 수 없습니다');
      }

        
    // 현재 나의 위치를 확인하고 mapX, mapY 요소의 value 값에 세팅하기
    let btn = document.querySelector('#btnCampInfo');

    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        let campForm = document.querySelector('#campForm');
        let formData = new FormData(campForm);
        let url ='https://apis.data.go.kr/B551011/GoCamping/locationBasedList?';
        let parms = '';

        // key/value pairs 반환
        for(let pair of formData.entries()){   // 함수이기 때문에 () 붙여준다
            console.log('pair[0]', pair[0]);
            console.log('pair[1]', pair[1]);

            parms += `${pair[0]}=${pair[1]}&`;
        }

        url += parms;
        console.log('url', url);

        // ES6에서 url 요청 결과를 받아 옵니다
        fetch(url)    // url에 get 요청
        // 요청 결과가 성공이라면
        // 화살표 함수에서 한 줄인 경우 return 문과 {} 가 생략 가능
        // res.json(): javascript object로 변환
        .then(res => res.json())    // 결과 res(response의 객체)를 object로 변환 / json(response 객체의 메서드)
        .then((json)=>{    // res.json()으로 변환된 객체
            console.log('json',json);
            // 주변에 캠핑장이 없는 경우
            if(json.response.body.items.item=''){
                alert('주변에 캠핑장이 없습니다. 반경을 확대해보세요');
                return;
            }
            printCampInfo(json.response.body.items.item);    // 캠핑장 리스트를 매개변수로 넣어준다
        })
        .catch((err)=> console.log(err));  // 오류
        
    });
    
}

// 현재위치를 받아서 mapX, mapY에 출력
function doSomething(latitude, longitude){
    console.log('latitude', latitude); // 경도
    console.log('longitude', longitude); // 위도
    //resDiv.innerHTML = `경도 : ${latitude}, 위도 : ${longitude}`;
    
    let mapX = document.querySelector('input[name=mapX]');
    let mapY = document.querySelector('input[name=mapY]');

    mapX.value = longitude;
    mapY.value = latitude;
}

// 캠핑장 정보 출력
// 배열을 매개변수로 받아서 배열에 입력된 정보를 화면에 출력
function printCampInfo(itemArr){    // let itemArr = jsObj.response.body.items.item;

    let resDiv = document.querySelector('#result');

    // div 초기화
    resDiv.innerHTML = '';
    
    resDiv.innerHTML += '<ul>';

    for(item of itemArr){
        resDiv.innerHTML += `
            <li>
                <h1>${item.facltNm}</h1>
                <p><img src="${item.firstImageUrl}" alt="캠핑장 이미지"></p>
                <p>${item.intro}</p>    
            </li>
        `;
    }

    resDiv.innerHTML += '</ul>';
}