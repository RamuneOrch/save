<template>
  <div class="d-flex flex-column bg-white" 
    style="max-width : 600px; margin : auto; padding : 50px 20px 80px 20px;">
      <div>
        <div class="pt-4 text-center">
          <h2 class="font-weight-bold">당신은 이런 사람!</h2>
          <strong style="font-size : 21px; margin-top : 15px;">쩌리형 고자</strong>
          <div class="rounded mt-4 p-3" style="height : 300px;">
              <img src="https://d29dbfyawlamz6.cloudfront.net/static_v1.8.11/img/test_content/chunmyung/results/ISFP.png" alt="1" width="250px;">
              </div>
          </div>

        <div class="p-4 mt-3 rounded bg-light" >
          <div>
            <p class="font-weight-bold">Type.</p>
            <ul>
              <li>혹시 모쏠인가요?</li>
              <li>짝사랑을 할 때 당신은 홍길동 뺨치는 대작가에요. 이렇게 소설을 잘 쓸거면 차라리 웹소설 연재를 해서 돈을 벌거 그랬나봐요.</li>
              <li>여기저기에  '나이렇게 할까, 저렇게 할까' 물어봐 놓고 정작 실행을 잘 못해요.</li>
              <li>이성을 이성으로만 봐서 연애를 시작하기 힘들 수 있어요. 그렇지만 그런성격이 막상 연애를 시작하면 더 장점이 될 수 있어요. 파이팅?</li>
            </ul>
          </div>
        </div>

        <div class="bg-light mt-3 p-4 bg-light rounded">
          <p class="font-weight-bold">Tip.</p>
          <ul>
            <li>사소하게 상처받는 일들이 많은데 서운하거나 속상한 게 있어도 말 안하고 참는 편이에요. 서운해 하는게 티가나요. 근데 말은 안해줘요. 그런 부분이 상대방은 오히려 답답하거나 서운할 수 있어요.</li>
            <li>만약 지금 사랑을 하지 않고 있다면 조금 더 결단력을 가져봐요. 어차피 모 아니면 도인 인생 아니겠어요? 머릿속 그 소설 실사화 한 번 해보는거에요.</li>
          </ul>
        </div>

        <div class="mt-3">
          <div class="p-4 bg-light text-center">
            <p class="m-0 font-weight-bold">나와 맞지않는 화장품은 이런 화장품!</p>
            <img src="https://d29dbfyawlamz6.cloudfront.net/static_v1.8.11/img/test_content/chunmyung/results/ENFJ.png" alt="" class="" width="200px;">
          </div>
        </div>

        <div class="mt-3">
          <div class="p-3 bg-light text-center">
            <p class="font-weight-bold">내 결과 공유하기</p>
            <a href="">
              <img src="https://d29dbfyawlamz6.cloudfront.net/static_v1.8.11/img/SNS/kakaotalk-logo%402x.png" alt="" width="55px">
            </a>
          </div>
        </div>

        <div class="mt-3">
          <div class="p-3 d-flex flex-column justify-content-center align-items-center">
            <button class="mb-4 w-100" @click="test()">
              <strong style="font-size : 19px;">테스트 다시하기</strong>
            </button>
            <button class="w-100" @click="playStore()">
              <strong style="font-size : 19px;">더 많은 화장품 구경하기</strong>
            </button>
          </div>
        </div>
        

        <div class="fixed-bottom">
          <div class="p-3 d-flex flex-row rounded-top" style="max-width : 600px; margin : auto; background-color : #ffbc4b">
            <div class="text-center rounded" style="width : 85%; border : 2px solid white;" @click="playStore()">
              <a href="https://play.google.com/store/apps/details?id=com.jjang.bangpan2&hl=ko" class="" style="" >
                <p class="m-0 p-2 font-weight-bold" style="color : white; font-size : 17px">화장품 추천!</p>
              </a>
            </div>
            <div class="text-center ml-3 rounded" style="width : 15%; border: 2px solid white;">
              <a href="" class="">
                <p class="m-0 p-2" style="color : white;">
                  <i>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-share-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                    </svg>
                  </i>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>

export default {
  data(){
    return{
      result : this.query
    }
  },
  props: {
    query : String
  },
  methods:{
    test(){
      window.open(`./`,"_self")
    },
    playStore(){
      alert("스토어 페이지로 이동합니다.")
      window.open(`https://play.google.com/store/apps/details?id=com.jjang.bangpan2&hl=ko`,"_self")
    }
  }
}
</script>

<style>
  li{
    margin-bottom : 14px;
    font-size : 12px;
  }
  button{
    border-radius: 20px;
    border : none;
    text-shadow: none;
    background-color : #ffaa3b;
    color : white;
    display: block;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    cursor:default;
  }
  button:active, button:focus{
        /* border: none; */
        outline: none;;
  }
  a{
    
  }
  a:hover{
    text-decoration: none;
  }
</style>