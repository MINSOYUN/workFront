window.onload =  function(){
    // 1-1) 고전 방식

    // 이벤트가 발생한 요소는 내부적으로 이벤트 발생 정보를 담고 있는 객체를 매개 변수로 전달

    // 이벤트의 발생 정보를 확인하고 싶다면 매개변수를 입력 ex) e, event
    btn1.onclick = function(e){
        console.log('고전 이벤트 모델', this);
        console.log('이벤트', e);
        console.log('target',e.target);  // 이벤트가 발생한 대상
        console.log('button',e.button);  // 마우스 키값 반환
        console.log('clientX',e.clientX);  // 이벤트가 발생한 가로위치
        console.log('clientY',e.clientY);  // 이벤트가 발생한 세로위치
        console.log('ctrlKey',e.ctrlKey);  // ctrl이 눌렸는지
        console.log('shiftKey',e.shiftKey);  // shiftkey가 눌렸는지
        console.log('timeStamp',e.timeStamp); // 

        // 이전 이벤트와 현재 이벤트가 발생한 시간의 차이를 밀리세컨드로 반환
        console.log('code',e.code);  // 키보드 키코드 값
        console.log('key',e.key);  // 키보드 키
    };

    // // 고전 방식으로 이벤트를 적용할 경우 속성에 값을 주는 것이기 때문에 하나의 이벤트 핸들러만 적용이 가능하다
    btn1.onclick = (e) => {
        // 화살표 함수에서는 this가 없음
        // 화살표 함수의 상위 요소의 this 를 찾아서 반환
        console.log('this',this);      // window 객체: 최상위 객체
        console.log('e',e.target);
    };

    // 1-3) 표준 이벤트 모델
    btn3.addEventListener('click',clickEventListener);
    btn3.addEventListener('mouseenter',function(){
        this.style.backgroundColor = 'pink';
    });
    btn3.addEventListener('mouseleave', (e)=>{        // 화살표 함수이기 때문에 this 사용 못한다
        e.target.style.backgroundColor = 'green';
    });
    
    
    // 2. 이벤트가 발생한 요소 객체에 접근하는 방법
    // 2-1) 고전 이벤트 방식
    btn4.onclick = function(e){
        console.log ('e.target', e.target);
        console.log('this',this);
        console.log('window.event.target',window.event.target);
    };
    
    btn4.onclick = (e) =>{
        console.log ('e.target', e.target);
        // 이벤트 발생 요소가 아님!!
        console.log('this',this);   // 화살표 함수에서 this 는 window를 가리킨다
        console.log('window.event.target',window.event.target);
    };
    
    // 2-3. 표준 이벤트 방식
    btn5.onclick = function(e){
        console.log ('e.target', e.target);
        console.log('this',this);
        console.log('window.event.target',window.event.target);
    };

    btn5.addEventListener('click', (e)=>{
        console.log ('e.target', e.target);
        console.log('this',this);
        console.log('window.event.target',window.event.target);
    });

    // 3-2) 기본 이벤트 제거 2
    submit.addEventListener('click', function(e){
        // 정규식
        // 특정 규칙을 가진 문자열을 검색하거나 치환할 때 사용하는 형식 언어
        // /패턴/ 으로 선언
        // /정규식패턴/.test('문자열') : 문자열에 정규식 패턴을 만족하는 값이 있으면 true, 없으면 false를 리턴
        let regExp = /^[a-zA-Z0-9]{5,12}$/;   // 일정한 패턴을 만들어준다 ^ 시작 $ 끝문자
        // ^: 시작
        //  []: [...] 내의 문자들 중 하나라도 존재
        //  {m, n}은 앞선 패턴이 최소 m 번 최대 n 번 반복되는 문자열을 의미
        // $: 끝

        if(!regExp.test(userId)){   // 형식이 userId에 부합하는지 체크
            alert('아이디는 영문자, 숫자로만 총 5~12자 사이로 입력해주세요');
            
            // 표준 이벤트 방식에서는(이벤트 객체가 있는 경우)
            // 이벤트 객체의 preventDefault() 함수를 이용하여 기본이벤트를 제거할 수 있다
            e.preventDefault();
        }
    });




};   // window.onload





// 이벤트 핸들러
// 이벤트 처리기 - 이벤트가 발생 했을 때 처리하는 함수
function clickEventListener(){
    console.log('표준 이벤트 모델');
}

// 2-2) 인라인 이벤트 방식에서 이벤트가 발생한 요소를 확인하는 방법
function test(e){
    // 매개값으로 이벤트 객체를 가져 올 수 없다 -> undefined
    console.log('e',e); 
    console.log('this', this);    // window 객체
    console.log(window.event.target);  
}

// 3-1) 기본 이벤트 제거 1
function passwordCheck(){
    let pass1 = document.getElementById('pass1').value;
    let pass2 = document.getElementById('pass2').value;

    if(pass1 != pass2){
        alert('비밀번호가 일치하지 않습니다'); 
        return false;    
    }
};
