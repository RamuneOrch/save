<template>
  <div>
    <div v-if="this.page === 0" class="d-flex flex-column bg-white pl-4 pr-4 p-4"
    style="max-width : 600px; margin : auto; margin-bottom : 15%;"
    >
      <div v-if="true" style="color : #6e7da0">
        <div class="pt-4 text-center" style="margin-top : 17%; 'Noto Sans KR',sans serif;">
          <img src="./img/fitting.png" alt="" style=" margin-bottom : 20px; ">
          <p class="m-0" style="font-size : 18px; font-family : 'Noto Sans KR',sans serif;">
            {{ this.result }} 피부타입에 잘 맞는 화장품
          </p>
          <p class="m-0" style="line-height : 48px; font-size : 40px; margin-top : 15px; font-weight:700;font-family :  'Noto Sans KR',sans serif;">{{ }}</p>
          <div class="rounded m-0" style="">
              <img src="" alt="1" width="100%">
              </div>
          </div>

        <div class="pl-3 pr-3 text-center">
            <p class="mb-4"
               style="
                  font-family: 'Noto Sans KR', sans serif;
                  font-size: 21px;
                  font-weight: 500;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: 1.4;
                  letter-spacing: normal;
                  text-align: center;
                  color: #ffa05a;
               "
            >
              {{}}
            </p>
        </div>

        <div class="" style="padding : 20px; border-radius : 13px; border: solid 2px #6f7e9f; background-color : rgba(145, 160, 200, 0.05);">
          <div>

            <ul class="pl-4 m-0" style="color : ">
              <!-- <li v-for="(people, index) in type" :key="index">
                {{ people.type_info }} -->
              <!-- </li> -->
              <li>
                <p>
                  피부가 감성적이에요. 가을을 타요. 일단 찬바람 불면 립밤은 필수에요.
                </p>
              </li>
              <li>
                <p>
                  처음 보는 화장품은 나에겐 두려움의 대상. 일단 겁부터 나요. 따갑거나 얼굴이 뒤집어지거나 어떤 후폭풍이 올지 몰라요.
                </p>
              </li>
              <li>
                <p>
                  환경이 바뀌는 매 순간마다 내 피부에 어떤 문제가 튀어나올지 몰라요. 고통의 연속.
                </p>
              </li>
              <li>
                <p>
                  반복되는 피부 염증으로 피부색이 고르지 않아 속상해요. 이놈의 색소 침착.. 레이저 치료가 효과가 있다 해서 알아보는 중이에요!
                </p>
              </li>
              <li>
                <p>
                  피부가 거칠고 칙칙해 보이기도 하지만, 그래도 피부 탄력만큼은 자신 있어요!
                </p>
              </li>
              
            </ul>
          </div>
        </div>

        <div class="mt-2 w-100">
          <div class="p-3">
            <p class="m-auto text-center" style="color : #696969; font-size : 22px; font-family :  'Noto Sans KR',sans serif; line-height: 1.5;">
              지금  <strong>피부컨설팅:피팅</strong>에서<br>
              <strong>휴엔맘 크림</strong> 경험하고<br>
              리얼한 후기를 남겨주세요!
            </p>
          </div>
        </div>

        <div class="mt-3 p-1">
          <div class="p-3 bg-white text-center" style="border-radius : 30px; border : solid 2px #6e7da0;">
            <p class="" style="font-size : 19px; font-weight : 700; font-family : 'Noto Sans KR',sans serif;color : #696969;">내 결과 공유하기</p>
            <p class="m-0">
              <img src="https://d29dbfyawlamz6.cloudfront.net/static_v1.8.11/img/SNS/kakaotalk-logo%402x.png" alt="" width="48px" @click="share()">
              <img src="https://d29dbfyawlamz6.cloudfront.net/static_v1.8.11/img/SNS/url-icon%402x.png" alt=""  width="48px" @click="clip()" class="" style="margin-left : 35px;">
            </p>
          </div>
        </div>

        <div class="mt-3 w-100">
          <div class="mb-4 mt-4 d-flex flex-column justify-content-center align-items-center w-100">
            <button class="mb-4 w-100 rounded-pill p-3 w-100" @click="retest()">
              <p class="m-0" style="font-size : 26px; font-weight : 500; font-family : 'Noto Sans KR',sans serif; ">테스트 다시하기</p>
            </button>
          </div>
        </div>
        

        <div class="fixed-bottom">
          <div class="d-flex flex-row p-3 pl-4 pr-4" style="max-width : 600px; margin : auto; background-color :#6e7da0">
            <div class="text-center rounded-pill" style="width : 100%; border : 2px solid white; cursor : pointer" @click="playStore(1)">
                <p class="m-0 p-3" style="font-weight : 500;color : white; font-size : 24px; font-family : 'Noto Sans KR',sans serif; ">휴엔맘 크림 무료 체험</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    
    
    <div v-if="this.page === 2" class="d-flex flex-column align-items-center justify-content-center" style="max-width : 500px; height : 100vh; margin : auto;">
      <div>
        <p class="m-0" style="font-size : 19px; font-weight : 700; font-family : 'Noto Sans KR',sans serif;">
          잘못된 페이지 입니다
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  created(){
    window.onload = () => {
        console.log(this.$cookies.get("test"));
        const BASE_URI = 'http://admin.cosmeticfitting.com:4000'
        setTimeout(() => {
          this.$http.post(`${BASE_URI}/user/survey_result`,{
            id : this.$cookies.get('test'),
            type : this.result
          })
          .then(res => {
            this.type = res.data.list
            console.log(this.type)
          })

          this.$http.post(`${BASE_URI}/user/survey_result_update`,{
            share_count : 1,
            maincount : 1,
            restart_count : 1
          })
          .then(res => {
            console.log('work!');
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err.res.data);
          })
        },2000)

      // this.$http.post(`${BASE_URI}/user/survey_result`,{
      //   ,
      //   id: this.$cookies.get("test"),
      //   type : this.result
      // })
      // .then(res => {
      //   console.log(res.data.list);
      // })
      if(this.result === "undefined" || this.result === null) this.page = 2

      this.$cookies.remove("key")
      
      this.restart = this.$cookies.get("restart")
      this.maincount = this.$cookies.get("countmain")
      this.share_count = this.$cookies.get("share")
    }
  },
  data(){
    return{
      page : 0,
      clink : location.href,
      share_count : 1,
      people : 0,
      maincount : 1,
      restart : 1,
      count : 0,
      type: [],
      tip : [],
      result : this.query,
      feedSettings: {
        objectType: 'feed',
        content: {
          title: '나랑 잘 맞는 화장품 찾기',
          imageUrl:
            'https://fitting-a6629.web.app/img/C.40f7ffde.png',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      }
    }
  },
  props: {
    query : String,
  },
  methods:{
    retest(){
      const BASE_URI = 'http://admin.cosmeticfitting.com:4000'

      this.restart++
      this.$cookies.set("restart", this.restart)
      if(this.$cookies.get("test") !== null){
        this.$http.post(`${BASE_URI}/user/survey_result_update`,{
          share_count : this.share_count,
          maincount : this.maincount,
          restart_count : this.restart
        })
      }
      setTimeout(() => {
        window.open(`./`,"_self")
      },100)
    },
    share(){

      const BASE_URI = 'http://admin.cosmeticfitting.com:4000'

      this.share_count++
      this.$cookies.set("share",this.share_count)
      if(this.$cookies.get("test") !== null){
          this.$http.post(`${BASE_URI}/user/survey_result_update`,{
          share_count : this.share_count,
          maincount : this.maincount,
          restart_count : this.restart,
          
          
        })
      }
      
      window.Kakao.Link.sendDefault(this.feedSettings)
    },
    clip(){
        var dummy = document.createElement('input'),
          text = window.location.href;
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);

        const BASE_URI = 'http://admin.cosmeticfitting.com:4000'

        this.share_count++
        this.$cookies.set("share",this.share_count)
        if(this.$cookies.get("test") !== null){
          this.$http.post(`${BASE_URI}/user/survey_result_update`,{
            share_count : this.share_count,
            maincount : this.maincount,
            restart_count : this.restart
          })
        }
        alert("복사되었습니다!")
    },
    playStore(n){
      const BASE_URI = 'http://admin.cosmeticfitting.com:4000'
      if(n === 1){
        this.maincount++
        this.$cookies.set("countmain",this.maincount)
          this.$http.post(`${BASE_URI}/user/survey_result_update`,{
            share_count : this.share_count,
            maincount : this.maincount,
            restart_count : this.restart
          })
      }
      // setTimeout(() => {
        // window.open(`https://bit.ly/3cp1b6g`,"_page")
      // },100)
    },
    
  }
}
</script>

<style scoped>
  li{
    margin-bottom : 14px;
    font-size : 12px;
    
  }
  button{
    border-radius: 20px;
    border : 2px solid #ffa05a;
    text-shadow: none;
    background-color : white;
    color : #ffa05a;
    cursor:default;
  }
  button:active, button:focus{
        outline: none;;
  }
  a:hover{
    text-decoration: none;
  }
  li p{
    line-height: 1.35;
    font-size : 20px;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    text-align: left;
    color: #696969;
    margin : 0;
  }
  ul{
    list-style-type : disc;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: normal;
    text-align: left;
    color: #ffa05a;
    padding-top : 15px;
  }
</style>