# Javascript 문법 헷갈리는것 정리


## js 기본 문법
- undfinded -> 값이 정의되지 않은 값을 말한다.

- 함수의 기본 문법
function test(x,y){
    return x + y;
}

- 문자열
var 단어 = '함수야놀자'
단어[2] //야 가 출력된다
문자열도 []로 나타내어서 보여줄수있다.

- if 조건문 형식
if(){

}else if (){

}else{

}
 
- for문 
for(var 조건 = 0; 조건 < 5 ; 조건 = 조건 +3){
    console.log('');
}

- length 활용하기
var word = '헬로우'
word[0] 첫번째 글자
word[length-1] 마지막 글자

- repeat()
for (var star = 1; star <= 5; star = star + 1){
    console.log("*".repeat(star))
} //star의수만큼 반복하게 된다

- Math.abs() 
값의 절대값을 구해준다

- 객체(Object)
    1. 함수(function() {})
    2. 배열
객체 - 값들을 그룹화 할때 사용된다
var 객체 = {
    이름 : what,        ---속성
    키: function 키(){  ---메서드
    },
    몸무게: 75,
} 
객체라는 이름에 {}객체를 저장한것
객체['이름'] ,  객체.이름
두가지가 같은 방식으로 사용할수가있다
객체.키() 라고 하면 객체의 메서드가 실행되게된다

키: function ()으로 익명함수로 사용하여도 가능하다 

Math라는 객체를 사용할수있는 이유는 브라우저에서
미리 Math라는 객체를 만들어서 제공하기때문이다.
Math를 그냥 입력해보면 Math에 관련된 함수들이 안에 있다. 그래서 우리는 쉽게 호출해서 사용할수있다.

- 배열
var 배열 = [
    '사과',
    '오렌지',
    '포도',
    '딸기',
]
값 그룹화를 하고싶긴하지만 속성이름을 따로 주고 싶지않을때 배열을 주로 사용하게된다.

var 배열같은객체 = {
    0: '코끼리',
    1: '고양이',
    2: '강아지',
    3: '치킨',
}
Array.isArray()

- Math.random()
0~1 까지의 값을 나타내는데,
Math.random() * 9를 하면 0~9까지의 값이 나타난다
Math.floor(Math.random() * 9)를 사용하면 소수점이 나타나지 않는다

-----------------------------------
## 웹화면 구현

- window
윈도우라는 객체가 있는데 제공하는 객체중 중요도가 높은 객체이다.
window는 브라우저 자체를 의미한다고 생각하면되고,
document는 페이지라고 생각할수있다.

window는 전역객체의 속성을 나타낼수있다.
전역변수와 함수안의 변수가 다르다.

- document
HTML과 JS의 중간 역활을 해준다
console.dir() 객체 형식으로 볼수가있다.
DOM 객체 - javascript를 HTML로 통역시켜주는 역활.

- javascript의 핵심
비동기!

- submit
submit으로 데이터를 보낼때에 자동으로 새로고침이되게된다.
이 이벤트를 막고싶다면 preventDefault()를 실행해주면된다 
