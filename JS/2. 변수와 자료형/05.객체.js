window.onload = () => {

    // 객체 선언
    btn1.addEventListener('click', ()=>{
        let area1 = document.getElementsByClassName('area1');
        let product = {
            0: '배열 흉내',   // 객체명['속성명'] 으로 접근 가능
            pName: '아이폰14',   // 속성: 값
            price: 1000000,
            price: 1500000, // 같은 속성 중복 선언 시 마지막에 입력된 값으로 세팅 된다
            brand: '애플',
            spec: ['OLED', 'ISO15']
        };
        console.log('product: ',product);
        area1.innerHTML = '객체 선언 테스트';
        area1.innerHTML += `객체명[속성명]으로 접근하는 방법 <br>`;
        area1.innerHTML += `product[0]: ${product[0]} <br>`;
        area1.innerHTML += `product['spec'][0]: ${product['spec'][0]} <br>`;
        
        area1.innerHTML += `객체명.속성명으로 접근하는 방법 <br>`;
        area1.innerHTML += `product.pName: ${product.pName} <br>`;
        area1.innerHTML += `product.spec[0]: ${product.spec[0]} <br>`;

        // 속성명에 공백이나 특수문자가 입력된 경우 '', ""로 묶어 주어야 하며 .을 이용해서 접근이 불가능하다
        // []를 이용해서 값을 가져올 수 있다
        let user = {
            'user name' : '문인수',
            user_age: 20,
            'id!!' : 'ismoon'
        };
    });


    // 객체의 메소드
    btn2.addEventListener('click', ()=>{
        let name= ' 고경희';
        
        // 객체 선언
        let dog = {
            name: '백구',
            kind: '진돗개',
            // 객체의 메서드
            eat: function(food){  
                // 객체의 내부 속성에 접근하기 위해서 this 를 사용 
                let area = document.getElementsByClassName('area');
                console.log(`${this['kind']} ${this.name}가 ${food}을(/를) 먹습니다`);
                let message =`${this['kind']} ${this.name}가 ${food}을(/를) 먹습니다`;
                area.innerHTML = message;
            }
        }
        dog.eat('닭가슴살');
    });


    // 객체와 반복문
    btn3.addEventListener('click', ()=>{
        let game = {
            title: '크레이지 아케이드',
            price: 0,
            supportOS: ['win7', 'win8'],
            service: true
        };
        console.log(game);

        // game 객체가 가지고 있는 key(속성값) 하나씩 담아준다
        for(const key in game){
            console.log(`key: ${key}, game[key]: ${game[key]}`);
        }
    });


    // 객체의 속성 추가 및 제거
    btn4.addEventListener('click', ()=>{
        // 빈 객체 선언
        let student = {};

        // 객체의 속성 추가
        // 속성이 이미 존재하는 경우 업데이트가 없는 경우 추가
        student.name = '홍길동';
        student.age = 20;
        student['job'] = '도둑'

        // 객체의 메서드 추가
        student. whoAreYou = function(){
            let str = '';
                for(const key in this){
                    if(typeof(this[key]) != 'function'){
                        str += `${key}: ${this[key]} \n`;   // this: student
                    }
                }

            return str;
        };

        console.log(student);
        console.log(student.whoAreYou());
        // 객체에 해당 속성이 정의되어 있으면 true, 없으면 false
        console.log('job' in student);

        // 객체의 속성을 제거
        delete(student.job);
    });
};