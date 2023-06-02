window.onload = ()=>{
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  // 지도를 표시할 mapContainer 변수 생성
        mapOption = {    // 지도 확대와 중심좌표를 나타내는 mapOption
            center: new kakao.maps.LatLng(37.5605672,  126.943386), // 지도의 중심좌표 (제주도)
            level: 3 // 지도의 확대 레벨(지도를 얼마나 크게 보여줄 것인지)
        };
    
    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption); 
    
    // 현재 위치 가져옴
    if ("geolocation" in navigator) { 
        // 위치 정보 사용 가능
    
        // 현재 위치 요청
        // getCurrentPosition(성공콜백, 오류콜백, 옵션)
        navigator.geolocation.getCurrentPosition((position) =>{
          doSomething(position.coords.latitude   // 성공했을 때 수행할 함수
          , position.coords.longitude);
        }, (err) => console.log(err)   // 오류 콜백
        );
    }  else {
     // 위치 정보 사용 불가능
        alert('geolocation 사용 불가능!');
    }


    function doSomething(latitude, longitude){
        // 현재 위치 정보를 지도에 세팅 -> 중심 좌표 잡고 마커
        // 마커 표지션(위도, 경도) 생성 
        var markerPosition  = new kakao.maps.LatLng(37.5605672, 126.943386);
    
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map,    // setMap 필요 없다
            position: markerPosition    // position에 생성한 위치 넣어주기
        });
    
        // 마커가 지도 위에 표시되도록 설정
        // marker.setMap(map);
        // 지도 중심좌표를 접속 위치로 변경
        map.setCenter(markerPosition);    // 지도의 중심 좌표를 변경
    }
    
}
