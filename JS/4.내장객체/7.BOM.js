window.onload = function(){

    // 1) window.open()
    btn1.addEventListener('click', function(){
        // window.open();   // 새탭 <- 아무런 값을 지정해 주지 않았다
        // window.open('http://www.naver.com'); // http 붙여주어야 한다 왜??
        // window.open('http://www.naver.com', 'naver_1');    // url, url이름 지정

        // open(url, 창이름, '속성')
        window.open('7.BOM.html', 'BOM', 'width = 500, height = 500');   // popup 창으로 뜬다
    });

    // 2) 타이머 관련 메소드
    // window.setTimeout(콜백함수, 시간) 일정시간 경과 후에 콜백함수 한번 실행
    btn2.addEventListener('click', ()=>{
        let timerId = 0;

        // 새 창 띄우기
        let newWindow = window.open();
        newWindow.alert('3초 후에 이 페이지는 종료 됩니다');  // 새 창에 알림 설정

        timerId = window.setTimeout(()=>{    // 콜백 함수 취소 위해 변수 선언하고 반환값을 변수에 저장
            newWindow.close();     // 콜백함수 -> 창 닫기
        }, 3000);    // 시간 -> 3초 후에 닫는다

        // 타이머 id를 claerTimeout() 함수에 전달하면 해당 id의 타이머를 취소 할 수 있다
        clearTimeout(timerId);
    });


    let timerId = 0;   // 종료하기 위한 변수 선언
    // window.setInterval
    btnStart.addEventListener('click', ()=>{
        // 일정 시간마다 콜백 함수를 반복 실행
        // window.setInterval(함수, 시간);
        // 반환된 숫자값(식별값)을 이용해 종료시켜 줄 수 있다
        timerId = window.setInterval(()=>{
            let date = new Date();    // 날짜, 시간정보 담은 객체
            area1.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ` + `<span id='second'> ${date.getSeconds()}</span>`;  // date.toTimeString();
        }, 1000);    // 1s 마다 한번씩 함수 실행
        console.log('timerId', timerId);
    });

    btnStop.addEventListener('click', ()=>{
        clearInterval(timerId);   // 반환하는 값을 저장해서 가져오기
    });


    // BON - 1) location 객체
    btn3.addEventListener('click', ()=>{
        area3.innerHTML = '<h4> location 객체 </h4>';

        for(key in location){
            console.log('key: ', );
            // 객체[속성] or 객체.속성
            console.log('value', location[key]);

            area3.innerHTML += `key: ${key}, value: ${location[key]}}`;

        }
    });

};  // window.onload