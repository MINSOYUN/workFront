// 페이지가 모두 불러져 왔으면 함수를 실행
// onload: 이벤트
window.onload = () => {
    // 버튼 요소 선택
    let btn = document.querySelector('#register');
    btn.addEventListener('click', (e) => { // 첫번째 인자로 넣어준다
        // 버튼이 한 개인 경우 submit 버튼으로 동작 -> 기본 이벤트를 제거
        e.preventDefault();

        // input 필드의 입력된 내용을 변수에 저장
        let userName = document.querySelector('#username').value;
        let major = document.querySelector('#major').value;

        console.log('userName', userName);
        console.log('major', major);

        let tbody = document.querySelector('#attendant > tbody');

        // 테이블의 행 생성
        let newTr = document.createElement('tr');
        // 테이블의 한 칸 생성
        let newTdName = document.createElement('td');
        newTdName.innerHTML = userName;
        let newTdMajor = document.createElement('td');
        newTdMajor.innerHTML = major;

        // tr과 td 
        newTr.appendChild(newTdName);
        newTr.appendChild(newTdMajor);
        // tbody와 tr
        tbody.appendChild(newTr);
    });
}
