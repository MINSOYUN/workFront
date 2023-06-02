// 페이지가 로드(이벤트 발생) 이후 함수를 실행
window.onload = () =>{
    // 텍스트 노드가 있는 요소 노드 생성
    btn1.addEventListener('click', function(){
        // 요소 노드 생성
        let elementNode = document.createElement('h3');
        // 텍스트 노드 생성
        let textNode = document.createTextNode('안뇽');
        // 연결(자식요소로 등록)
        // 부모 요소의 맨 마지막 요소로 충가
        elementNode.appendChild(textNode);
        area1.appendChild(elementNode);

        area1.innerHTML += '<h3>innerHTML로도 입력 가능';
    });


    // 텍스트 노드가 없는 요소 노드 생성
    // 요소의 속성을 설정 하는 방법!
    btn2.addEventListener('click', function(){
        // img 요소 노드 생성
        let imgNode = document.createElement('img');
        // 속성 설정 하는 방법
        imgNode.src = 'images/morning.jpg';
        imgNode.setAttribute('width','150px');    // (속성 이름, 값)
        imgNode.setAttribute('height','100px');
        // 연결(자식 요소로 추가)
        area2.appendChild(imgNode);
        area2.innerHTML += '<img src = "images/morning.jpg" width = "150px" height = "100px">';
    });

    // Node 객체 삭제
    btn3.addEventListener('click', (e)=>{
        area3.remove();
        // 이벤트가 발생한 요소
        let target = e.target; 
        console.log(target);
        // 상위 요소를 반환
        console.log(target.parentNode);
        // 상위 요소의 자식 노드를 삭제
        let delNode = document.getElementById('area1');   // 변수 선언하여 removeChild 요소에 넣기
        target.parentNode.removeChild(delNode);
    });


    // 원하는 위치에 Node 객체 삽입하기
    btn4.addEventListener('click', ()=>{
        // p 요소 생성
        let pNode = document.createElement('p');
        // text node 생성
        let textNode = document.createTextNode('text');
        // 연결
        pNode.appendChild(textNode);
        // 부모 요소 선택(body)
        let body = document.querySelector('body');
        // 노드 선택(삽입하고 싶은 위치의 요소를 선택)
        let h1 = document.querySelector('h1');
        // insertBefore(추가 할 요소, 추가 할 위치의 요소)
        body.insertBefore(pNode, h1);   // 내가 선택한 자식 요소(h1) 앞에 삽입 -> 위치 추가
        body.appendChild(pNode); // 요소의 맨 마지막에 추가
    });
};