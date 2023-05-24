// 사용자로부터 출생년도를 입력 받아서 나이를 출력하는 프로그램
// 전역 변수
var date = new Date();     // 내장객체
var year = date.getFullYear();    // 연도를 알아내는 함수
function getAge(){
    if(true){
        // 지역 변수
        let birth = prompt('출생년도를 입력해주세요');
        var age = year - birth;
        console.log(`당신의 나이는 ${age}세 입니다`);
        console.log(birth);
    }
}
// 블럭 레벨
// var키워드는 함수 레벨
// console.log(`당신의 나이는 ${age}세 입니다`); // 자바에서는 오류, 스크립트에서는 오류 x
// var는 블럭따지지않고 let은 따진다
// console.log(birth);  // Uncaught ReferenceError: birth is not defined
// let 키워드는 블럭 레벨
// console.log(birth);       // 참조 안됨


// 전역변수(global wariable): 함수 외부에서 변수를 선언
g_str1='전역변수';
g_str2='전역변수2';
g_str3='전역변수3';

console.log('전역변수');
console.log(g_str1);
console.log(g_str2);
console.log(g_str3);

// window 객체:
// 브라우저에서 제공하는 브라우저창에 대한 정보를 담고 있는 객체
// 전역변수 사용 시 window.변수명 혹은 history.변수명으로 표현해서 사용할 수 있다
// var 키워드로 변수를 선언하거나 함수를 선언하면, 다 이 window객체의 프로퍼티가 된다
// window는 전역 객체로 페이지 내에 있는 모든 객체를 다 포함하고 있기 때문에 window는 그냥 생략이 가능한 특징이 있다
console.log('window. ==========');
console.log(window.g_str1);
console.log(window.g_str2);
console.log(window.g_str3);

console.log('this. 변수명========');
console.log(this.g_str1);
console.log(this.g_str2);
console.log(this.g_str3);


function test(){   // 전역변수는 어디에서든, 함수 내부 외부 전부 사용할 수 있다
console.log('전역변수=======');
console.log(g_str1);
// 같은 이름의 지역변수를 선언 시 호이스팅에 의해서 undefined로 출력
console.log(g_str2);
console.log(g_str3);

console.log('window. ==========');
console.log(window.g_str1);
console.log(window.g_str2);
console.log(window.g_str3);

console.log('=== 체크 this. 변수명========');
console.log(this.g_str1);
console.log(this.g_str2);
console.log(this.g_str3);

// 지역변수 (local variable): 함수 외부에서 접근 불가
// 키워드 없이 선언하면 함수가 실행 시 전역변수로 작성된다
l_str1='지역변수';
var l_str2 = 'var 지역변수';
let l_str3 = 'let 지역변수';

console.log('지역변수 출력=======');
console.log(l_str1);
console.log(l_str2);
console.log(l_str3);

// 전역변수와 동일한 이름의 지역 변수 선언시 지역변수가 우선
// 상단 출력이 undefined로 나오며 전역변수는 영향을 받지 않음
// -> 함수내부에서는 재선언된 값이 사용되지만 함수외부에서는 전역변수가 사용된다

// 호이스팅: 위로 끌어 올린다 라는 뜻 -> 메모리에 올라가기 때문에 참조가 가능한 상태
// 자바스크립트 파서가 프로그램 실행 전에 변수와 함수의 메모리 공간을 미리 할당하는 것
// 변수 선언문과 함수선언문 유효범위 최상단에 선언(변수는 undefined로 초기화)

console.log(g_str2);  // undefined
// console.log(aaa);   // 선언되지 않은 변수 ERR: aaa is not defined
var g_str2='전역변수==지역변수';
console.log('g_str2',g_str2); // 지역변수에서 같은 이름으로 재선언
// 함수가 반환하는 값이 없으면 undefined


// 블럭레벨 스코프(let, const) 테스트
if(true){
    b_str1 = '블럭선언';   // 전역변수
    var b_str2='블럭선언 var';  // 함수
    let b_str3= '블럭선언 let'; // 블럭
    // 상수: 선언과 동시에 초기화 / 변경 불가
    const b_str4='블럭선언 const'; // 블럭

}
console.log('함수내부선언', b_str1);
console.log('함수내부선언', b_str2);

// 블럭 내부에서 선언된 경우 블럭 외부에서 호출 불가
// console.log('함수내부선언', b_str3);
// console.log('함수내부선언', b_strr3);

}

// 함수 내부에서 선언된 지역변수
// console.log(l_str1); -> 함수 실행 후 접근 가능(전역변수)
// console.log(l_str2); -> ERR
// console.log(l_str3); -> ERR


// 페이지가 로드된 이후 바로 실행된다
window.onload = function(){
    // 페이지가 모두 로딩되면 실행
    console.log('onload 실행 -- 페이지 로딩 완료 ======');

    // var 예약어의 중복 선언
    var num=0;
    console.log(num);
    var num=10;
    console.log(num);


    // let으로 선언 시 num1을 선언문이 나오기 전에는 사용 불가
    // let, const도 호이스팅이 되지만 Temporal Dead Zone(TDZ)에 위치
    // TEZ: 선언 전에 변수를 사용하는 것을 비 허용하는 개념상의 공간

    // var는 되고 let은 안되는 이유!!
    // var 키워드는 선언과 함께 undefined로 초기화되어 메모리에 저장되는데
    // let과 const는 초기화되지 않은 상태로 선언만 메모리에 저장되기 때문
    num1=0;  //let은 tdz라 먼저 가져다 사용할 수 없다
    // length, const 중복 선언 불가
    let num1=0;
    // let num1=0;  ERR
    num1=10;    // 값의 재설정은 가능

    // const 선언과 동시에 초기화되면 값 변경 불가
    const num2=0;
    // num2=10;    // 상수이기 때문에 재설정도 불가 Assignment to constant variable. ERR 발생
}