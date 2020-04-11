- .html
npm init를 사용하면 package.json을 만들어준다
package.json은 내가 남의 소스 즉 가져와서 사용하는 소스가 무엇인지 
메모하기위하여서 사용하는데, npm init으로 package.json을 자동으로 만들어줄수있다.

npm vue
이 명령어를 이용하여 vue를 설치

npm i webpack webpack-cli -D
이것을 통해서 webpack을 설치한다 -D는 개발할때 이 webpack과 cli를 사용하겠다라는것
-D는 배포할때 사용하지 않겠다는 의미이다.

component부분이 .vue부분

webpack이 main.js, NumberBaseball.vue, NumberBaseball.html를 
dist/app.js로 하나로 합쳐주었다.
    
- .vue
@대신으로 v-on: 을 대신할수있으며, preventDefault을 적는대신에
메소드 옆에 .prevent라고 적어주면 prevent가 적용이된다.

javascript는 데이터 형식이 중요한데, [1,5,3,4]와 그냥 일반적인 Text를
비교하기위해서는 .join('')을하여서 비교를 하여야한다.

어떤것이 끝났으면 다시 원래대로 초기화 시켜주는것은 필수!

화면에 나타나는것은 데이터라고 생각해서 data()에다가 따로 넣어서 관리를 해야겠지만
그냥 식을 사용하거나 하는것이라면 그냥 변수로 넣어서 사용해줘도 된다

v-for=""를 사용할때는 항상 v-bind:key=""를 사용해주어야하고
하나의 for문이 돌때마다 각각의 값에 이름을 붙여준다고 생각할수있다.


- webpack
node의 module을 만들었다 webpack처리를 할때 사용한다(webpacking)
webpack 설정 4가지
webpack은 여러개의 script를 하나로 합치기위해서 사용한다.

path: path.join(__dirname, 'dist')은
node.js가 제공하는 path라는 것을 사용하여 [const path = require('path');]
경로를 지정해주는데, __dirname은 현재 경로라는 의미이며 거기에서 dist라는 폴더로
경로를 합쳐주어서 절대경로로 만들어주게된다. 

package.json 파일에 dependencies의 vue와 devDependencies의 vue-template-compiler의 버전이 같아한다
만약 업데이트가 되어서 다를경우에 npm i vue@2.7.0 이렇게 다운로드를 해주어야한다 @를 안쓰면 최신버전이 깔린다.

entry에서 처리하다가 예외의 경우가 나타날경우 module의 rules가 처리한다
rules에서 test로 나타난 부분이 vue라는 파일을 vue-loader로 되게만들어주고
rules에서 지정한 파일들을 한꺼번에 모아서 output 즉 app.js로 만들어준다
최종결과물로 output이 나타나게된다. plugins은 마지막에 output이 나오기전에 한번더 가공해주는부분
Vue.js의 장점중 하나인 app.js 즉 하나의 javascript 파일로 만들어준다는것이 장점이다.