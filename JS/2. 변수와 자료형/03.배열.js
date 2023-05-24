window.onload=function(){
    let area = document.getElementById('area1');
    let btn1 = document.getElementById('btn1');

    // btn1 요소에 click 이벤트가 발생하면 함수를 실행
    btn1.addEventListener('click',function(){    // = onclick
        let array1 = new Array(); // [] 빈 배열 생성
        let array2 = new Array(3); // [empty * 3]
        let array3 = new Array('빨강','파랑','노랑','초록');
        let array4 = ['java','oracle','html5','css3','javascript'];

        console.log('array1', array1);
        console.log('array2', array2);
        console.log('array3', array3);
        console.log('array4', array4);

        // 여러가지 타입을 입력
        let array5 = [
            '고경희',    // 문자
            20,       // 숫자
            true,       // 논리값
            [1,2,3,4],       // 배열
            function(){return 1},    // 함수
            {}       // 객체
        ];     
        console.log(array5);

        // 2. 배열에 값을 추가하기 배열이름[인덱스 번호]='값';
        array1[0] = '귤';
        array1[1] = '사과';
        array1[2] = '자몽';
        console.log('-----------', array1);

        area.innerHTML = `array1(빈배열)에 값 대입: [${array1}] <br>`
                    + `array1.length: ${array1.length} <br><br>`;
                    
        // 배열의 길이를 3으로 정했지만 길이가 자동으로 늘어난다
        array2[0]='자동차';
        array2[1]='비행기';
        array2[2]='기차';
        array2[3]='배';
        area.innerHTML = `array2(배열)에 값 대입: [${array2}] <br>`
                    + `array2.length: ${array2.length} <br><br>`;
                    
    }); 

    // 2. 배열의 메소드
    // 1) indexOf(): 항목의 index 번호를 반환
    let area2 =document.getElementById('area2');
    let btn2 =document.getElementById('btn2');

    btn2.addEventListener('click',function(){
        // area2.innerHTML='실행완료';
    let array=['귤', '복숭아', '사과', '망고','자몽'];
    area2.innerHTML=`array: [${array}] <br>`;
    // 복숭아의 index
    area2.innerHTML +=`복숭아가 있는 배열의 인덱스: ${array.indexOf('복숭아')}<br>`;
    // 자몽의 index
    area2.innerHTML +=`자몽이 있는 배열의 인덱스: ${array.indexOf('자몽')} <br>`;
    });


    // 2) concaat(): 배열을 연결하여 반환
    // 배열1.concat(배열2)
    // 배열 1의 요소, 배열 2의 요소를 결합하여 새로운 배열을 만들어 반환
    // 원본에 영향을 미치지 않는다
    let btn3 = document.getElementById('btn3');
    let area3 = document.getElementById('area3');
    btn3.addEventListener('click',function(){
        // area3.innerHTML='실행확인';
    let array1 = ['귤','사과'];
    let array2 = ['바나나','수박','오렌지'];

    area3.innerHTML=`array1: [${array1}] <br>`;
    area3.innerHTML+=`array2: [${array2}] <br>`;

    area3.innerHTML += `결합: [${array1.concat(array2)}] <br>`;
    area3.innerHTML += `array1: [${array1}] <br>`; // concat은 원본에 영향을 미치지 않는다
    });


    // 3) join: 배열의 요소들을 결합하여 문자열로 반환
    // 매개값으로 구분자를 입력할 수 있다
    let btn4 = document.getElementById('btn4');
    let area4 = document.getElementById('area4');
    btn4.addEventListener('click', function(){
        let array = ['서울','강원','경기'];
        area4.innerHTML=`array: [${array}] <br>`;

        // 배열 -> 문자열
        area4.innerHTML +=`array.toString(): [${array.toString()}] <br>`;
        area4.innerHTML +=`array.join(): ${array.join()} <br>`;
        area4.innerHTML +=`array.join('|'): ${array.join('|')} <br>`;
        area4.innerHTML +=`typeof(array.join('|')): ${typeof(array.join('|'))} <br>`;

        // 공백을 구분자로 문자열 생성
        let str = array.join(' ');
        // 문자열 -> 배열
        area4.innerHTML +=`str.split(' '): ${str.split(' ')} <br>`
    });



    // 4) reverse()
    // 원본에 영향을 미치는 메소드
    let btn5 = document.getElementById('btn5');
    let area5 = document.getElementById('area5');

    btn5.addEventListener('click', function(){
        area5.innerHTML='실행';
        // ES6에서 추가된 배열 생성 메소드
        let array = Array.of(10, 5, 3, 6);

        area5.innerHTML = `array: [${array}] <br>`;
        // 주의! 함수를 실행하기 위해서는 ()를 붙여 주어야 한다
        area5.innerHTML += `array.reverse(): [${array.reverse()}] <br>`;
        area5.innerHTML += `array: [${array}] <br>`;
    });



    // sort()
    // 매개변수가 없는 경우 ASC 문자 오름차순으로 정렬
    // 원본 배열에 영향을 미치는 메서드
    let btn6 = document.getElementById('btn6');
    let area6 = document.getElementById('area6');

    btn6.addEventListener('click', function(){
        let array1 = [10, 35, 230, 100, 885];
        let array2 = ['Cherry','apple','Apple','Banana'];

        area6.innerHTML = `array1: [${array1}] <br>`
        area6.innerHTML += `array2: [${array2}] <br>`
        area6.innerHTML += `array1.sort(): [${array1.sort()}] <br>`;    // 문자의 아스키 코드를 기준으로 정렬
        area6.innerHTML += `array2.sort(): [${array2.sort()}] <br>`;  // 대문자 -> 소문자 순 
        area6.innerHTML += `array1: [${array1}] <br>`
        area6.innerHTML += `array2: [${array2}] <br>`

        // sort() 메소드 함수를 매개값으로 전달해서 정렬 기준을 변경할 수 있다
        array1.sort(function(left, right){
            return left - right;    // 오름차순 정렬
        });
        area6.innerHTML += `array1 오름차순 정렬: [${array1}] <br>`
        
        array1.sort(function(left, right){
            return right - left;   // 내림차순 정렬
        });
        
        area6.innerHTML += `array1 내림차순 정렬: [${array1}] <br>`;    // 이게 뭐?
        area6.innerHTML += `array2 내림차순 정렬: [${array2.sort().reverse()}] <br>`;   // 이게 뭐?
    });


    let btn7 = document.getElementById('btn7');
    let area7 = document.getElementById('area7');

    btn7.addEventListener('click', function(){
        let array = ['아이유','GD','방탄소년단','박효신'];
        
        // 추가
        area7.innerHTML = `array: [${array}] <br>`;
        console.log(array.push('coldplay'));   // 배열 요소 추가 후 배열의 길이를 반환하는 함수
        area7.innerHTML += `array: [${array}] <br>`;
        console.log(array.push('찰리푸스'));
        area7.innerHTML += `array: [${array}] <br>`;
        // 삭제
        // 배열의 마지막 요소를 반환하고 제거
        area7.innerHTML += `array.pop: [${array.pop()}] <br>`;
        area7.innerHTML += `array: [${array}] <br>`;
    });


    // 7) shift(), unshift()
    let btn8 = document.getElementById('btn8');
    let area8 = document.getElementById('area8');

    btn8.addEventListener('click', function(){
        let array = ['아이유','방탄소년단','크러쉬','박효신'];

        area8.innerHTML += `array: [${array}] <br>`;
        array.unshift('에스파');  // 길이 반환
        area8.innerHTML += `array에 unshift 후: [${array}] <br>`
        array.unshift('NCT127');
        area8.innerHTML += `array에 unshift 후: [${array}] <br>`

        // 맨 앞의 요소를 반환 후 제거 
        area8.innerHTML += `array.shift(): ${array.shift()} <br>`
        area8.innerHTML += `array에 shift 후: [${array}] <br>`
        area8.innerHTML += `array.shift(): ${array.shift()} <br>`
        area8.innerHTML += `array에 shift 후: [${array}] <br>`
    });


    // 8) slice(), splice()
    let btn9 = document.getElementById('btn9');
    let area9 = document.getElementById('area9');

    btn9.addEventListener('click', function(){
        let array = ['java','orcle','HTML5','CSS3','JS'];

        area9.innerHTML = `array: [${array}] <br>`;
        // array.slice(시작인덱스, 끝 인덱스)
        // 시작 인덱스 ~ (끝인덱스 -1) 요소를 추출 -> 끝 인덱스는 포함하지 않는다
        area9.innerHTML += `array.slice(2,4) : [${array.slice(2,4)}] <br>;`
        area9.innerHTML += `array: [${array}] <br>`;

        // array.splice(2,0, 'spring')
        // 시작인덱스, 삭제할 갯수, 추가할 요소
        // 반환: 삭제된 요소
        area9.innerHTML += `array.splice(2,0,'spring','mybatis'): [${array.splice(2,0,'spring','mybatis')}] <br>`;
        area9.innerHTML += `array: [${array}] <br>`; // 원본 배열에는 영향을 미친다
    });

}