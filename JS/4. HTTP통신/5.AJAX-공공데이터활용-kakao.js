var map;
window.onload = function(){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {   // 지도 생성에 필요한 옵션
        center: new kakao.maps.LatLng(37.5605672, 126.943386), // 지도의 중심좌표
        level: 10 // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로 지도를 생성합니다 (변수 map)
    map = new kakao.maps.Map(mapContainer, mapOption);    // new kakao.maps.Map 지도를 생성하는 코드 -> 변수 map 에 저장
    
    
    // 현재 나의 위치를 확인하고 mapX, mapY 요소의 value 값에 세팅하기
    if ("geolocation" in navigator) {    // 사용중인 브라우저가 위치 정보를 제공하면 true, 아니면 false
        /* 위치정보 사용 가능 */
        
        // 현재위치 요청
        // getCurrentPosition(성공콜백, 오류콜백)
        navigator.geolocation.getCurrentPosition(function(position){
            doSomething(position.coords.latitude, position.coords.longitude);
        });
    } else {
        /* 위치정보 사용 불가능 */
        alert('geolocation 지원 불가! - 현재위치를 알수 없습니다.');
    }
    
    let btn = document.querySelector('#btnCampInfo');    // 버튼
    
    // let 키워드로 선언하면 자동완성 됨
    btn.addEventListener('click', function(e){
        // 기본이벤트(submit) 제거
        e.preventDefault();
        
        let campForm = document.querySelector('#campForm');  // input
        let formData = new FormData(campForm);   // campForm에서 가져온 폼 데이터를 FormData에 담아 변수 formData 설정
        
        let url = 'https://apis.data.go.kr/B551011/GoCamping/locationBasedList?';    // 캠핑장 url
        let parms = '';   // 초기화
        
        // key/value pairs 반환
        for(let pair of formData.entries()){    // FormData에 포함된 이터레이터(키/쌍)를 반환
            // console.log('pair[0]', pair[0]);    // 키
            // console.log('pair[1]', pair[1]);    // 쌍
            
            parms += `${pair[0]}=${pair[1]}&`;
        }
        
        url += parms;    // 캠핑장 URL + 파라미터 -> 완전한 URL
        console.log('url', url);
        
        // ES6에서 
        // url요청 결과를 받아 옵니다
        fetch(url)      // url에 get 요청
        // 요청결과과 성공이라면 then 실행
        // 화살표 함수에서 한 줄인경우 return문과 {}가 생략 가능
        // res.json() : javascript object로 반환
        .then(res => res.json())   // 결과 res(response의 객체)를 object로 변환 / .json()(response 객체의 메서드)
        .then((json)=>{ // res.json()으로 변환된 객체
            console.log('json',json); 
            // 캠핑장 리스트를 매개변수로 넣어줍니다
            printCampInfo(json.response.body.items.item);       // 캠핑장 리스트를 매개변수로 넣어준다
            
        })
        .catch((err) => console.log(err));   // 에러
        
    });
}

// 현재위치를 받아서 mapX, mapY에 출력
function doSomething(latitude, longitude){
    console.log('latitude', latitude); // 경도
    console.log('longitude', longitude); // 위도
    
    let mapX = document.querySelector('input[name=mapX]');   // 타입[name]으로 조회하여 변수 선언
    let mapY = document.querySelector('input[name=mapY]');
    
    mapX.value = longitude;         // .value -> 값
    mapY.value = latitude;
    
    // ===================================================================
    // 현재 위치를 받아 온 후 지도의 중심좌표를 변경하고 접속 위치에 마커를 표시
    // 지도의 중심위치를 변경
    var locPosition = new kakao.maps.LatLng(latitude, longitude);    // LatLng 지도상에서 위치(경도, 위도)를 나타내는 좌표를 생성하는 클래스
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);   // 중심좌표 설정 setCenter();
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({    // Marker 마커를 생성하는 클래스
        map: map,
        position: locPosition    // position에 생성한 위치 넣어주기
    });
    
    marker.setMap(map);  // 마커 표시하는 클래스
}

// 캠핑장 정보 출력
// 배열을 매개변수로 받아서 배열에 입력된 캠핑장 정보를 화면에 출력
function printCampInfo(itemArr){    // itemArr = json.response.body.items.item -> 캠핑장 리스트

    // let itemArr = jsObj.response.body.items.item;

    let resDiv = document.querySelector('#result');   // 캠핑장 정보를 담을 div 

    // div 초기화
    resDiv.innerHTML = '';
    
    resDiv.innerHTML += '<ul>';

    // 마커를 여러개 생성하기 위해서 위치 배열을 생성
    let positions = [];
    for (const item of itemArr) {
        resDiv.innerHTML += `
        <li>
            <h2>${item.facltNm}</h2>
            <p><img src = "${item.firstImageUrl}" alt="캠핑장 이미지"></p>
            <p>${item.intro}</p>
            <p>${item.mapX}, ${item.mapY}</p>
        </li>
        `;
        
        // 포지션 객체를 생성
        let position = {
            title: item.facltNm,     // 백틱x
            latlng: new kakao.maps.LatLng(item.mapY, item.mapX)   // 지리 정보 표기 방식: 위도 - 경도 순
        };
        positions.push(position);   // 배열에 객체 삽입
    }  // for 문
    
    
    for (var i = 0; i < positions.length; i ++) {    // 위치 배열을 돌면서 for 문 실행
        
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        });
    }

    resDiv.innerHTML += '</ul>';
}