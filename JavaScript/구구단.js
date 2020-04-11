var Number1 = Math.ceil(Math.random() * 9);
var Number2 = Math.ceil(Math.random() * 9);
var Result = Number1 * Number2;
//floor 내림함수, ceil 올림함수
var Body = document.body;
var Word = document.createElement('div');
Word.textContent = String(Number1) + '곱하기' + String(Number2) + '는?';
document.body.append(Word);
var Form = document.createElement('form');
document.body.append(Form);
var inputText = document.createElement('input');
Form.append(inputText);
var Button = document.createElement('button');
Button.textContent = '입력!';
Form.append(Button);
var ResultText = document.createElement('div');
document.body.append(ResultText);

Form.addEventListener('submit', function 콜백함수(e){
    e.preventDefault();
    //Form에서 enter를 치면 다른 페이지로 넘어가는것이 기본적이다. 다른페이지 즉 새로고침이 된다.
    //기본적인 동작 형태에서 기본적인거 하지마! 라고할때 preventDefault()라고 나타낸다.
    if (Result === Number(inputText.value)){
        ResultText.textContent = '딩동댕';
        Number1 = Math.ceil(Math.random() * 9);
        Number2 = Math.ceil(Math.random() * 9);
        Result = Number1 * Number2;
        Word.textContent = String(Number1) + '곱하기' + String(Number2) + '는?';
        inputText.value = '';
        inputText.focus();
    }
    else{
        ResultText.textContent = '땡';
        inputText.value = '';
        inputText.focus();
    }
});