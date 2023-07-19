window.addEventListener('load', function(){
    btn1.addEventListener('click', function(){
        // 리터럴을 이용한 정규 표현식 객체 생성
        // 찾고 싶은 패턴 양쪽에 / 붙여준다(시작기호, 종료기호)
        let regExp1 = /script/;
        // 생성자 함수를 이용한 정규 표현식
        // 매개값으로 찾고 싶은 형식(패턴문자열) 지정
        let regExp2 = new RegExp('script');

        let str1 = 'javascript jqueryscript ajax';
        let str2= 'java jquery ajax';

        console.log(regExp1, typeof(regExp1), regExp1 instanceof RegExp);
        console.log(regExp2, typeof(regExp2), regExp2 instanceof RegExp);

        /*
            RegExp 객체에서 제공하는 메서드
            객체.test(문자열) : 문자열에 정규식 패턴을 만족하는 값이 있으면 true, 없으면 false 리턴

            객체.exec(문자열) : 문자열에 정규식 패턴을 만족하는 값이 있으면 처음 매치된 문자열 리턴
        */

        console.log('regExp1', regExp1);
        console.log('str1', str1);
        console.log('str2', str2);

        area.innerHTML = '<h4> 정규표현식 객체 생성</h4>';
        
        // RegExp 객체에서 제공하는 메소드 사용
        // regExp1 리터럴을 이용한 정규 표현식(/패턴/)
        // regExp2 new 생성자 함수(new RegExp('패턴'))
        area.innerHTML += `regExp1.test(str1) : ${regExp1.test(str1)} <br>`;  // true
        area.innerHTML += `regExp1.test(str2) : ${regExp1.test(str2)} <br>`;  //false

        area.innerHTML += `regExp2.test(str1) : ${regExp1.exec(str1)} <br>`;  // script
        area.innerHTML += `regExp2.test(str2) : ${regExp2.test(str2)} <br>`;  // false

        /*
            String 객체에서 정규 표현식 객체를 이용하는 메서드
            문자열.match(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 값을 리턴
            문자열.replace(정규식, 바꿀 값) : 문자열에서 정규식 패턴의 값과 일치하는 부분을 바꿀 값으로 변경
            문자열.search(정규식) : 문자열에서 정규식 패턴의 값과 일치하지 않는 부분의 시작 인덱스를 리턴
            문자열.split(정규식) : 문자열에석 정규식 패턴의 값과 일치하는 값을 구분자로 하여 배열을 생성하여 리턴
        */
       // String 객체에서 정규 표현식을 사용하는 메서드
        area.innerHTML += '<p></p>';
        area.innerHTML += 'str1.match(regExp1) : ' +  str1.match(regExp1) + '<br>';  // script
        // 첫번째 일치하는 값만 변경
        area.innerHTML += 'str1.replace(regExp1, "스크립트") : ' +  str1.replace(regExp1, '스크립트') + '<br>';  // java스크립트 jqueryscript ajax
        area.innerHTML += 'str1.search(regExp1) : ' +  str1.search(regExp1) + '<br>';  // 4
        area.innerHTML += 'str1.split(regExp1) : ' +  str1.split(regExp1) + '<br>';  // script를 구분자로 사용 -> java, jquery, ajax

    })

    btn2.addEventListener('click', function(){
        let str = 'JavaScript jQuery Ajax';
        area2.innerHTML = '<h4>플래그문자</h4>';
        // replace() 메소드에서 '$&' 는 패턴을 만족하는 문자열을 가리킨다
        area2.innerHTML += '/a/ : ' + str.replace(/a/, '($&)') + '<br>'; 
        area2.innerHTML += '/a/i : ' + str.replace(/a/i, '($&)') +'<br>';
        area2.innerHTML += '/a/g : ' + str.replace(/a/g, '($&)') +'<br>'; 
        area2.innerHTML += '/a/gi : ' + str.replace(/a/gi, '($&)') +'<br>'; 
        area2.innerHTML += '/a/ig : ' + str.replace(/a/ig, '($&)') +'<br>'; 
    })

    btn3.addEventListener('click', function(){
        let str = 'a aa aaa aaaa';
        area3.innerHTML = '<h4>메타문자</h4>';
        
        /*
        반복검색
        {n, m}
            앞선 패턴이 최소 n번 최대 m번 반복되는 문자열을 의미
        +
            앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미
        ?
            앞선 패턴이 최대 한 번 이상 반복되는 문자열을 의미
        */

       // a라는 문자열을 찾는데 1번 이상 최대 2번 반복되는 문자열을 추출
       area3.innerHTML += '/a{1,2}/g : ' + str.replace(/a{1,2}/g, '($&)') + '<br>';
       area3.innerHTML += '/a{3}/g : ' + str.replace(/a{3}/g, '($&)') + '<br>';   // {3,3}
       area3.innerHTML += '/a{2,}/g : ' + str.replace(/a{2,}/g, '($&)') + '<br>'; // 앞선 패턴이 최소 2번 이상 반복되는 문자열
       area3.innerHTML += '/a+/g : ' + str.replace(/a+/g, '($&)') + '<br>'; // {1,}
       area3.innerHTML += '/a?/g : ' + str.replace(/a?/g, '($&)') + '<br>';  // {0,1}


       let str1 = 'Javascript\nJquery\nSheelscript\nAjax';
       /*
           문자열의 앞, 뒤 구분
           ^는 문자열의 시작을 의미
           $는 문자열의 마지막을 의미
       */
        area3.innerHTML += '<p>문자열 앞, 뒤 구분</p>';
        area3.innerHTML += '/^j/ig : ' + str1.replace(/^j/ig, '($&)')+ '<br>';
        area3.innerHTML += '/^j/igm : ' + str1.replace(/^j/igm, '($&)')+ '<br>';
        area3.innerHTML += '/ipt$/igm : ' + str1.replace(/ipt$/igm, '($&)')+ '<br>';

        /*
        OR 검색
        [...] 내의 문자들 중 하나라도 존재할 경우를 의미한다
        [a-zA-Z0-9] : []안에서 - 는 범위 지정을 의미
        [^a] : [] 안에서 ^ 는 not의 의미를 지님
        */
       str = '123 Jacvascrip Jquery Ajax';
       area3.innerHTML += '<p>OR검색</p>';
       area3. innerHTML += '/^j/ig : ' + str.replace(/[aj]/ig, '($&)')+ '<br>)';
       area3. innerHTML += '/[^aj]/ig : ' +  str.replace(/[^aj]/ig, '($&)') + '<br>';
       area3. innerHTML += '/[a-z]/ : ' +  str.replace(/[a-z]/ig, '($&)') + '<br>';
       area3. innerHTML += '/[0-9]/ : ' +  str.replace(/[0-9]/ig, '($&)') + '<br>';

       /*
        임의의 문자열 검색
        . : 임의의 문자 한개를 의미
    */  
        area3.innerHTML += '<p>임의의 문자열 검색</p>';
        area3.innerHTML += '/...../g : ' + str.replace(/...../g, '($&)')+ '<br>';
    })


    /*
        \d : 숫자를 의미 [0-9]
        \D : 숫자가 아닌 문자를 의미 [^0-9]
        \w : 알파벳, 숫자, 언더 스코어(_) 의미 [a-zA-Z0-9]
        \W : 알파벳, 숫자, 언더 스코어(_) 가 아닌 문자를 의미 [^a-zA-Z0-9]
        \s : 공백 문자를 의미 (띄어쓰기, 탭, 줄바꿈) [\n\t]
        \S : 공백 문자가 아닌 문자를 의미 [^\n\t]
    */
})