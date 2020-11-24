<template>
  <div>
    <div v-if="this.page === 0" class="d-flex flex-column bg-white pl-4 pr-4 p-4"
    style="max-width : 600px; margin : auto; margin-bottom : 15%;"
    >
      <div v-if="true" style="color : #6e7da0">
        <div class="pt-4 text-center" style="margin-top : 17%; 'Noto Sans KR',sans serif;">
          <img src="./img/fitting.png" alt="" style=" margin-bottom : 20px;">
          <p class="m-0" style="font-size : 18px; font-family : 'Noto Sans KR',sans serif;">
            {{ this.result }} 피부타입에 잘 맞는 화장품
          </p>
          <p class="m-0" style="line-height : 48px; font-size : 40px; margin-top : 15px; font-weight:700;font-family :  'Noto Sans KR',sans serif;">{{ type[0].tip_info }}</p>
          <div class="rounded m-0" style="">
              <img :src="type[0].image" alt="1" width="100%">
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
                  white-space : pre-wrap;
               "
            >
              {{ type[0].info1 }}
            </p>
        </div>

        <div class="" style="padding : 20px; padding-top:30px; border-radius : 13px; border: solid 2px #6f7e9f; background-color : rgba(145, 160, 200, 0.05);">
          <div v-for="(people, index) in dataa[this.idx]" :key="index">

              <ul class="pl-4 m-0" style="color : "  v-if="people !== result">
                <li>
                  <p >
                    {{ people }}
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
import dataa from './data.js'

export default {
  created(){
    window.onload = () => {
        this.result = this.query
        const BASE_URI = 'http://admin.cosmeticfitting.com:4000'
        this.$http.post(`${BASE_URI}/user/survey_result`,{
          id : this.$cookies.get('test'),
          type : this.result
        })
        .then(res => {
          this.type = res.data.list
        })

      if(this.result === "undefined" || this.result === null) this.page = 2

      this.$cookies.remove("key")
      
      this.restart = this.$cookies.get("restart")
      this.maincount = this.$cookies.get("countmain")
      this.share_count = this.$cookies.get("share")
      
      if(this.result === "DSPT"){this.idx = 0}
      else if(this.result === "DSNT"){this.idx = 1}

      else if(this.result === "DSPW"){this.idx = 2}

      else if(this.result === "DSNW"){this.idx = 3}
      
      else if(this.result === "DRPT"){this.idx = 4}

      else if(this.result === "DRNT"){this.idx = 5}

      else if(this.result === "DRPW"){this.idx = 6}

      else if(this.result === "DRNW"){this.idx = 7}

      else if(this.result === "DSPT"){this.idx = 8}
      else if(this.result === "DSPT"){this.idx = 9}
      else if(this.result === "DSPT"){this.idx = 10}
      else if(this.result === "DSPT"){this.idx = 11}
      else if(this.result === "DSPT"){this.idx = 12}
      else if(this.result === "DSPT"){this.idx = 13}
      else if(this.result === "DSPT"){this.idx = 14}
      else if(this.result === "DSPT"){this.idx = 15}
    }
  },
  data(){
    return{
      idx : 0,
      dataa,
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
            'https://ramuneorch.github.io/firstProject/img/2.9916156e.png',
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
          restart_count : this.restart,
          id : this.$cookies.get('test')
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
          id : this.$cookies.get('test')
          
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
            restart_count : this.restart,
            id : this.$cookies.get('test')
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
            restart_count : this.restart,
            id : this.$cookies.get('test')
          })
      }
      setTimeout(() => {
        window.open(`https://bit.ly/3cp1b6g`,"_page")
      },100)
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
    white-space: pre-wrap;
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
  }
</style>