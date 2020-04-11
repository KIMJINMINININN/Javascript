var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '나초';
document.body.append(단어);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);

버튼.addEventListener('submit', function 콜백함수 (이벤트){
    이벤트.preventDefault();
    //폼에서 enter를 치면 다른 페이지로 넘어가는것이 기본적이다. 다른페이지 즉 새로고침이 된다.
    //기본적인 동작 형태에서 기본적인거 하지마! 라고할때 preventDefault()라고 나타낸다.
    if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]){
        결과창.textContent = '딩동댕';
        단어.textContent = _입력창.value;
        입력창.value = '';
        입력창.focus();        
    }else {
        결과창.textContent = '땡';
        입력창.value = '';
        입력창.focus();
    }
}); //콜백함수

//이것이 끝말잇기.html 4줄만 쓰면 되는것
//javascript는 보이는 부분을 나타내기 조금 어렵다
