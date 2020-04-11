var Body = document.body;
var numberhubo
var numlist

function numberaa(){
    numberhubo = [1,2,3,4,5,6,7,8,9];
    numlist = [];
    for(var i = 0;i < 4; i += 1){
        var takenumber = numberhubo.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        numlist.push(takenumber);
        console.log(numlist);
    }
}

numberaa();

console.log(typeof(numlist));
console.log(numlist);
var result = document.createElement('h1');
Body.append(result);
var Form = document.createElement('form');
document.body.append(Form);
var inputText = document.createElement('input');
inputText.type = 'number';
Form.append(inputText);
var Button = document.createElement('button');
Button.textContent = '입력!';
Form.append(Button);
var faultcount = 0;

Form.addEventListener('submit', function (e){
    e.preventDefault();
    var dap = inputText.value;
    if (dap === numlist.join('')){// 답이 맞으면
        result.textContent = '홈런';
        inputText.value = '';
        inputText.focus();
        var Body = document.body;
        numberaa();
        faultcount = 0;
        // start();
    }else { //답이 틀리면
        var daparray = dap.split('');
        var strike = 0;
        var ball = 0;
        faultcount += 1;
        if (faultcount > 10){
            result.textContent = '10번 넘게 틀려서 실패! 답은' + numlist.join(',') + '였습니다';
            inputText.value= '';
            inputText.focus();
            numberaa();
            faultcount = 0;
        } else{
            for(var i = 0; i < 3 ; i+=1){
                if(Number(daparray[i]) === numlist[i]){ //같은 자리인지 확인
                    strike += 1;
                }else if(numlist.indexOf(Number(daparray[i])) > -1){ // 같은 자리는 아니지만, 숫자가 겹치는지 확인
                    ball += 1;
                }
            }
        }
        result.textContent = strike + '스트라이크' + ball + '볼입니다';
        inputText.value = '';
        inputText.focus();
    }
});