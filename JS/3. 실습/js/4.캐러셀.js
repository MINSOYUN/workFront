window.onload = function(){

    // var container = document.getElementById('container');
    // var left = document.getElementById('left');
    // var right = document.getElementById('right');

    // 캐러셀 -> 이미지 배열 만들기
    pics = ['pic-1.jpg', 'pic-2.jpg', 'pic-3.jpg', 'pic-4.jpg', 'pic-5.jpg'];

    index=0;

    
    update();
    
    // 왼쪽 버튼이 클릭되었을 때
    left.addEventListener('click', function() {
        index--; 
        // 0보다 작니
        if (index < 0) {
            index = pics.length - 1;
        }
        update();
    });
    
    // 오른쪽 버튼이 클릭되었을 때
    right.addEventListener('click', function() {
        index++;
        if (index >= pics.length) {
            index = 0; // 인덱스가 배열 길이를 초과하면 첫 번째 사진으로 이동
        }
        update();
    });
    
}

// 백그라운드 설정 -> 배열의 0번째 이미지를 보여준다 
// 함수 사용 -> 외부에서 !
function update() {
  container.style.backgroundImage = 'url(images/'+ pics[index] + ')';
}

// 일정 간격으로 반복적으로 콜백 함수를 실행
// setInterval(콜백 함수, 대기시간(밀리초), (콜백함수의 인자, 나열));
var i=0;
var interval = setInterval(function(){
    imgChange();
}, 3000);

function imgChange(){
    // 주의: index,pics 를 함수 외부에서 참조할 수 있도록 전역변수로 설정한다
    // i++;
    // console.log('setInterval'+i);
    index++;
        if (index >= pics.length) {
            index = 0; // 인덱스가 배열 길이를 초과하면 첫 번째 사진으로 이동
        }
        update();
};

function imgChange(){
    index++;
    if(index>=pics.length){
        index = 0;
    }
    update();
}


function stop(){
    console.log('setInterval 중지');
    clearInterval(interval);
}