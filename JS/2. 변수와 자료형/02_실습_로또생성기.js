// 1. 화면이 모두 로드 된 이후 실행

// id 선택할때는 ''로 감싸주기
// 웹 모두 읽고 실행해야하니까 코드 window.onload 안에 넣어주기 -> ERR: null
//


window.onload=function(){
    console.log('화면이 모두 로딩 되었습니다');
    // 2. 버튼을 선택, div 선택
    let btn1 = document.getElementById('btn1');
    let lottoDiv = document.querySelector('div[class=lottoDiv]');  // div 중에서 class가 lottoDiv인 속성 선택

    // 3. 버튼이 클릭되면 div를 초기화
    btn1.onclick=function(){
        lottoDiv.innerHTML='';
        // 4. 로또 번호 생성 -> 임의의 번호 생성
        let lotto = new Array[6];
        
        // lotto[0]=parserInt(math.random()*45)+1;

        for(let i=0; i<lotto.length;i++){
            lotto[i]= parserInt(math.random()*45)+1;
            for(k=0; k<i; k++){
                if(lotto[i]==lotto[k])
                i--;
            }
            lottoDiv.innerHTML+=`<div class="ball">${lotto[i]}<div>`;
        }
        // 색상 변경
        let ballList=document.querySelectorAll('div[class-ball]');
        for(let i=0; i<ballList.length; i++){ // 리스트는 직접 적용 안되고 for 사용해야한다
            let color=getColor(); // 랜덤색
            ballList[i].style.backgroundColor=color;
            ballList[i].style.borderColor=color;                                
        }
    }
};

function getColor(){
    console.log('색상반환');
    let r=parseInt(Math.random()*256);
    let g=parseInt(Math.random()*256);
    let b=parseInt(Math.random()*256);
    return rgb(`${r},${g},${b}`);
};