// 웹 페이지 다 읽고 실행하기 위해서 window.onload 함수 사용 -> 익명의 함수 필요
window.onload=function(){
    
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click',function(){  // 버튼을 클릭할 때마다 addEvent 문구가 출력
        test();
    });

    // 2) 익명의 함수: 변수에 대입하거나 함수 실행 시 인수로 사용할 수 있다
    btn2.addEventListener('click', function(){
        alert('익명의 함수 실행(이벤트 핸들러를 통해 실행한다)');
    })

    // 매개변수
    let btn3 = document.getElementById('btn3');
    btn3.addEventListener('click',()=>{    //function 생략 화살표함수 사용
        argTest('안녕하세요');
    });

    // argumnts
    btn4.addEventListener('click', ()=>{
        let res = sum_arguments(11, 22, 33);
        console.log('res',res);
    });

    // 일반적인 값 리턴
    btn5.addEventListener('click', ()=>{
        let random = ran();
        console.log(`random: ${random}`);
    });

    btn6.addEventListener('click',()=>{
        /* let func = funcTest();
        func(); */
        funcTest()();
    });
    

    
    // eval () 함수
    btn7.addEventListener('click',()=>{
        console.log('input: ', calc.value);    // typeof: string
        
        let res = eval(calc.value);
        console.log('res:', res);
    });

    // isInfinity()와 isNaN()
    btn8.addEventListener('click',()=>{
        let num1= -10/0;
        let num2= 10/'a';
        let p = document.getElementById('p3');
    
        p.innerHTML = `10/0: ${num1} <br>`;
        p.innerHTML += `10/'a': ${num2} <br>`;
        p.innerHTML += `num1 == Infinity: ${num1 == -Infinity} <br>`;
        p.innerHTML += `num2 == NaN: ${num2== NaN} <br>`;
        p.innerHTML += `isFinite(num1): ${isFinite(num1)} <br>`;
        p.innerHTML += `isNaN(num2): ${isNaN(num2)} <br>`;
    });
};


// 외부함수
function funcTest(){
    // 클로저: 내부 함수가 사용하는 외부함수의 지역변수는 내부함수가 소멸할 때까지 소멸되지 않는 특성을 가진다
    let name = '문인수';
    // 내부함수
    return function(){     // 함수를 리턴
        alert(`${name}님 환영합니다`);
    }
};

// 일반적인 값 리턴
function ran(){
    let random = parseInt(Math.random()*100+1);   // 1부터 100까지의 랜덤 값 
    return random;
}

// 매개변수
function argTest(value='매개값 없음'){  // 초기값 지정 ES6부터 도입
    alert(value);
}

// arguments: 매개변수의 갯수가 가변적인 경우 사용하는 속성
function sum_arguments(){
    let res = 0;

    for(i=0; i<arguments.length; i++){
        res += arguments[i];
    }
    return res;
}


// 1) 선언적 함수
// function 함수이름(매개변수, ...){}
// 호출: 함수명()
function test(){
    console.log('test 호출');
};

// 익명의 함수를 변수에 대입
// 익명의 함수: 함수 이름이 없는 함수
let sum = function(a, b){
    return a + b;
}
console.log('함수 실행 결과:', sum(10, 20)); // 함수 실행 위해서 변수(매개변수) 작성


// 3) 즉시 실행 함수
(
function(a, b){  // 이름이 없어서 한번말 실행하고 끝나는 변수
    return a + b;
    console.log(`a: ${a}, b: ${b}`);
    console.log('자동으로 실행');
}(10, 20)
);

// 4) 화살표 함수(Arrow Function)
const hi = function(){
    return alert('안녕하세요!');
}
const hi1 = () => {return alert('안녕하세요!')};
// 처리할 라인이 하나라면 {} 와 return 문을 생략할 수 있다
const hi2 = () => alert('안녕하세요!');