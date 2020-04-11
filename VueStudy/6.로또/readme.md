 1.  watch:{
     winBalls(value, oldVal) {
         if(value.length === 0){
             this.showBalls();
         }
     },
     bonus(value, oldVal) {
         if(value === null){
             this.showBalls();
         }
     },
  }
  watch는 어떤값이 바꼈는지 안바꼈는지 감시하는 기능을 의미한다.
  최대한 watch는 안쓰는것으로 하자!! 사용했을때에 버그가 나타날수있는 경우가 많기때문에!!
  computed는 새로운 값을 리턴하고, watch는 새로운 동작을 수행한다

   props:{
            number: Number,
   },
   props는 부모가 자식에게 값을 보내줄수있도록 하는것이다.
   예를 들어 여기에서는 LottoGenerator->LottoBall로 값을 5라는 값을 보내게되는것이고,
   그값을 LottoBall.vue의 number라는값에서 받을수있다. 
   props는 받았을때에 데이터를 바꿔서는 안된다는 제약조건이 있으며, 
   만약 바꾼 값을 보내고싶을때에는 데이터를 바꾸는 부모의 함수를 자식에게
   props로 전달하는 방법을 사용해야한다
 2. 두개이상의 컴포넌트를 처음으로 사용

- 스타일가이드에 나와있는 우선순위 규칙 B까지는 꼭 지켜야하며
  그나머지는 선택적 사항일거같다

- 모양은 비슷하나 조금씩 달라지는것들은 컴포넌트로 만들어주면 아주 효율적이다

- v-for문을 사용할때는 항상 v-bind:key 값을 등록해주어야한다.
