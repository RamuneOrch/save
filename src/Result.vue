<template>
  <div class="d-flex flex-column bg-white" 
    style="max-width : 600px; margin : auto; padding : 50px 20px 80px 20px;">
      <div v-if="true">
        <div class="pt-4 text-center">
          <h2 class="font-weight-bold">당신은 이런 사람!</h2>
          <strong style="font-size : 21px; margin-top : 15px;">쩌리형 고자</strong>
          <div class="rounded mt-4 p-3" style="height : 300px;">
              <img src="https://d29dbfyawlamz6.cloudfront.net/static_v1.8.11/img/test_content/chunmyung/results/ISFP.png" alt="1" width="230px;">
              </div>
          </div>

        <div class="p-4 mt-3 rounded bg-light" >
          <div>
            <p class="font-weight-bold">Type.</p>
            <ul>
              <li v-for="(people, index) in type" :key="index">
                {{ people.info }}
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-light mt-3 p-4 bg-light rounded">
          <p class="font-weight-bold">Tip.</p>
          <ul>
            <li v-for="(people, index) in tip" :key="index">
              {{ people.info}}
            </li>
          </ul>
        </div>

        <div class="mt-3">
          <div class="p-3 bg-light text-center">
            <p class="font-weight-bold">내 결과 공유하기</p>
            <p class="m-0">
              <img src="https://d29dbfyawlamz6.cloudfront.net/static_v1.8.11/img/SNS/kakaotalk-logo%402x.png" alt="" width="55px" @click="share()">
              <img src="https://d29dbfyawlamz6.cloudfront.net/static_v1.8.11/img/SNS/url-icon%402x.png" alt=""  width="55px" @click="clip()" class="ml-3">
            </p>
          </div>
        </div>

        <div class="mt-3">
          <div class="p-3 d-flex flex-column justify-content-center align-items-center">
            <button class="mb-4 w-100" @click="retest()">
              <strong style="font-size : 19px;">테스트 다시하기</strong>
            </button>
          </div>
        </div>
        

        <div class="fixed-bottom">
          <div class="p-3 d-flex flex-row rounded-top" style="max-width : 600px; margin : auto; background-color : #ffbc4b">
            <div class="text-center rounded" style="width : 100%; border : 2px solid white; cursor : pointer" @click="playStore(1)">
                <p class="m-0 p-2 font-weight-bold" style="color : white; font-size : 17px">화장품 추천!</p>
            </div>
          </div>
        </div>

        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header align-items-center">
                <h5 class="modal-title text-center" id="exampleModalLongTitle">
                  나의 결과를 공유!
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="p-3 m-auto">
                <img src="https://d29dbfyawlamz6.cloudfront.net/static_v1.8.11/img/SNS/kakaotalk-logo%402x.png" alt="" width="55px" @click="share()">
                <img src="https://d29dbfyawlamz6.cloudfront.net/static_v1.8.11/img/SNS/url-icon%402x.png" alt="" width="55px" class="ml-3" @click="clip()">
              </div>
            </div>
          </div>
        </div>

      </div>
  </div>
</template>

<script>

export default {
  created(){
    window.onload = () => {
      const BASE_URI = "http://admin.cosmeticfitting.com:4000"

      this.$http.post(`${BASE_URI}/user/survey_result`,{
        customer_id : this.$cookies.get("test"),
        id: this.$cookies.get("test"),
        type : this.result
      })
      .then(res => {
        console.log(res.data.list);
      })

      this.restart = this.$cookies.get("restart")
      this.maincount = this.$cookies.get("countmain")
      this.share_count = this.$cookies.get("share")
    }
  },
  data(){
    return{
      clink : location.href,
      share_count : 0,
      people : 0,
      maincount : 0,
      restart : 0,
      count : 0,
      type: [],
      tip : [],
      result : this.query,
      feedSettings: {
        objectType: 'feed',
        content: {
          title: '피팅',
          imageUrl:
            'https://img.huffingtonpost.com/asset/5d71c6bb25000090160614fe.jpeg?ops=scalefit_630_noupscale',
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
      this.$http.post(`${BASE_URI}/user/survey_result_update`,{
        share_count : this.share_count,
        maincount : this.maincount,
        restart_count : this.restart,
        id : this.$cookies.get("test"),
        customer_id : this.$cookies.get("test")
      })
      .then(res => {
        console.log(res.data);
      })
      window.open(`./`,"_self")
    },
    share(){

      const BASE_URI = 'http://admin.cosmeticfitting.com:4000'

      this.share_count++
      this.$cookies.set("share",this.share_count)
      this.$http.post(`${BASE_URI}/user/survey_result_update`,{
        share_count : this.share_count,
        maincount : this.maincount,
        restart_count : this.restart,
        id : this.$cookies.get("test"),
        customer_id : this.$cookies.get("test")
      })
      .then(res => {
        console.log(res.data);
      })
      
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
        this.$http.post(`${BASE_URI}/user/survey_result_update`,{
          share_count : this.share_count,
          maincount : this.maincount,
          restart_count : this.restart,
          id : this.$cookies.get("test"),
          customer_id : this.$cookies.get("test")
        })
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
          id : this.$cookies.get("test"),
          customer_id : this.$cookies.get("test")
        })
      }
      window.open(`https://bit.ly/3cp1b6g`,"_self")
    },
    page(){
      if(this.result === "OSPW"){1}
      if(this.result === "OSPT"){2}
      if(this.result === "OSNW"){3}
      if(this.result === "OSNT"){4}
      if(this.result === "ORNT"){5}
      if(this.result === "ORNW"){6}
      if(this.result === "ORPT"){7}
      if(this.result === "ORPW"){8}
      if(this.result === "DSPW"){9}
      if(this.result === "DSPT"){10}
      if(this.result === "DSNW"){11}
      if(this.result === "DSNT"){12}
      if(this.result === "DRNT"){13}
      if(this.result === "DRNW"){14}
      if(this.result === "DRPT"){15}
      if(this.result === "DRPW"){16}
    }
    
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
        outline: none;;
  }
  a:hover{
    text-decoration: none;
  }
</style>