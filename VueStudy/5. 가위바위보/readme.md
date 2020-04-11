- vue 컴포넌트의 이름은 왠만하면 두단어 이상으로 지어주어야한다.
- 현재 app.js가 4번처럼 dist라고 나타나 있지않아도 다른 파일들도 잘 구성되며
네트워크에서도 app.js를 불러오고있다. 이것은 webpack dev-server가 해주는것인데
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath:'/dist'
    },
webpack.config.js가 파일로 아닌 메모리로 /dist/app.js를 만들어주기 때문이다
실제 파일이 생기지않는다. 파일로 만들고싶다면 webpack으로 그냥 실행해야한다

- node_modules를 만들어주는 방법!!!! : npm i 를 입력하여서 node_modules를 만들어준다!


- javascript에서 css의 속성을 사용할때는 -를 안쓰고 그뒤의 문자를 대문자로 적어준다
javscript는 -를 빼기로 나타내기 때문
ex) background-image를 backgroundImage로 나타내야한다

- .vue
   <div id="computer" :class="{state:true, hello: false}" 
        :style="{ background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0` }"></div>
  :class=""안에 객체형식으로써 값을 넣어줄수있다.
  :style=""안에도 마찬가지고 객체형식으로 넣어주었다.
  위에는 background 배경을 url로 나타내었으며 url 뒤에 0 0 은 x축과 y축을 나타내는 부분이다

  <button @click="onClickButton('바위')">바위</button>
  <button @click="onClickButton('가위')">가위</button>
  <button @click="onClickButton('보')">보</button>
에서 onClickButton이있을때에 ()
onClickButton(choice){   
            }
methods에서 위와같이 choice를 만들어준다면 메서드의 매개변수로 나타낼수도있다.

** Tip
  const rspCoords = {
      바위 : '0',
      가위 : '-142px',
      보 : '-284px',
  };
같이 나타낸 이유는 만약 내코드를 다른사람이 봐야하는 경우가 생겼을때에
              imgCoord: rspCoords.바위
              가 아니라
              imgCoord: '-142px'
로 적혀있다면 -142px가 무엇을 뜻하는지 정확하게 알수없기때문에 위에다가
따로 명시를 해준것이다.

- vue.js의 라이프사이클
<lifecycle-exmaple v-if="true" />이라는것이 만약에 있다고할때에
created() - 이것이 나올때에 created()가 실행된다.
false에서 만약 true로 실행이될때에 created가 실행되고(컴포넌트가 화면에 나타나기전에)
template에 데이터와 computed를 div안에다가 연결해주고 난뒤 즉 화면에는 나타나지않았는데
div등 구성요소는 갖추어졌을때 created,
mounted()- mounted()는 화면에 컴포넌트가 나타나고 나서 실행되는것,
update()- 데이터가 바뀌어서 화면이 바뀔때에 updated()가 실행된다.
destory()- 화면에서 사라질때 destory()가 실행된다.

만약 mounted()에서 어떠한 코드를 실행시켜서 계속해서 실행이된다면
그것이 끝날때에는 그 코드가 동작하는것을 막아주어야한다. javascript에서는 이것을
꽤많이 중요하게 여기게되는데, react에서는 보통 beforedestory()에서 해준다.[여기서도 그렇게해도된다]
쓸대없는 코드가 계속해서 실행되는것(메모리누수)을 막기위해서 clearInterval(interval);사용
            

