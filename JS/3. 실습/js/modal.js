window.onload = function(){
        // open, close 는 window 객체의 내장 함수
        // 아이디로 참조 불가
        // 직접 변수에 담아줘야 한다
        
        // close: 모달창 닫기
        let open = document.getElementById('open');
        let close = document.getElementById('close');
        // 하이픈(-) 있어 아이디로 바로 접근 불가
        let modal = document.getElementById('modal-box');
        
        // open 버튼 누르면 modal 창에 active 기능 추가
        open.addEventListener('click', function(){
            // open: 모달창 열기
            // class 속성 active 추가
            // modal.classList.add('active');  // active 속성 추가 -> display: flex
            modal.style.display = 'flex';
        });


        close.addEventListener('click', function(){
            // close: 모달창 닫기
            // class 속성 active
            // modal.classList.remove('active');
            modal.style.display = 'none';
        });

}   // window.onload()