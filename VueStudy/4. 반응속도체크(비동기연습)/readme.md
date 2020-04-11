- npm i로 node_modules를 만들어줄수있다
- .gitignore 안에 파일을 적어두면 git에 업로드 되는것을 막아준다
- .vue devtools를 꼭 설치해서 사용하자. vue를 쉽게 잘 사용할수있도록
chrome에서 사용하게 도와주는 프로그램이다. 배포환경에서는 vue-devtools를
못보게 해야 보안에좋다. Vue.config devtools = false;이기 떄문이다


- package.json
  "scripts": {
    "build": "webpack --watch"
    "dev": "webpack-dev-server --hot"
  },
  --watch를 넣어주면 npm run build를 하지않아도 코드를 바꿀때마다 build를 해준다
  npm i -D webpack-dev-server를 설치해주면 새로고침을 하지않아도 webpack이 새로고침을 해준다
  npm run dev로 실행시켜주면 localhost:8080으로 서버가 생겨서 들어갈수있다. webpack-dev-server의 장점인
  그냥 내가 바꾸기만 바꾸고 저장만 눌러준다면 바로 바껴진다(개발할때 팁)
- .vue
  <div id ="screen" v-bind:class="state">{{message}}</div> //정석
  <div id ="screen" :class="state">{{message}}</div> //축약형
  class를 data로 넣어주고 싶다라고 생각이 든다면 v-bind라고
  class를 지정해주어서 data()에 있는 state를 직접 연결시킬수있다

  <style scoped>를 넣어주면 전역으로 style를 사용하는것이 아닌
  그 파일 안에서만 style를 사용하게만들어준다.

  result.reduce((a,c) => a + c, 0) / result.length
  reduce를 사용하면 배열의 모든값들을 더해줄수있다(평균구하는 코드)

  연산은 최대한 다른곳에서 수행할수있도록 해주어야한다. 그때 사용하는것이 computed
  - computed를 사용하는 이유(*)
  1.일반 데이터를 가공해서 사용할때 computed를 사용한다.
  computed해줄때에는 캐싱을 해주기때문에 만약 그 computed안에 있는 값이 바뀌는것이 아니라면
  그값을 그냥 그대로 사용할수가있기때문에 다시 연산을 하지 않아도 되기때문에
  성능에 중요한 요소가 될수있다

  - v-show="result.length"
  v-show를 사용하는방법 예를들어 "result.length" 라고 될때 이부분이
  True라면 화면에그냥 보이고 False라면 화면에 안나타나게된다
  v-if와 차이점이 무엇일까?
  v-if일때는 안보이는 부분이 주석처리되어서 나타나고, 
  v-show일때는 똑같이 화면에 안보이는데 태그가 나타나게된다

  div 대신에 template을 사용하여서 만들수도있는데 그냥 감싸기 위해서
  사용할때 template를 사용하게된다. 단 template안에 바로 template를 바로 사용할수없다

- webpack
style을 사용하기위해서는 npm i vue-style-loader, npm i css-loader -D 두가지를
추가 설치를 해주어야하며 vue-style-loader, css-loader를 추가해준다
        test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath:'/dist'
publicPath에 /dist를 넣어준다

