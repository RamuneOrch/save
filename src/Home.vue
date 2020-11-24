<template>
  <div>
    <div 
       class="d-flex flex-column align-items-center justify-content-center bg-white main"
       style="max-width : 500px; height : 100vh; margin : auto; color : #6e7da0;"
    >

      <div class="text-center">

        <img src="./img/2.png" class="mb-4" alt=""  style="">
        
        <h2 style="" class="m-0">
          내 피부에<br>
          잘 맞는 화장품은?
        </h2>

        <h5 class="" style="margin-bottom : 13%;">
          피부타입으로 찾는 나만의 화장품
        </h5>

        <div class="" style="">
          <button class="m-auto p-3 pl-4 pr-4 rounded-pill"
                style="border : none;
                      text-shadow: none;
                      background-color : #ffa05a;
                      color : white;
                "
                @click="clickPage()"
          >
            <span class="m-0 p-2 pr-5 pl-5" style="line-height : 30px;font-size : 30px;font-weight : 700;color: white; vertical-align : 1px;">
              시작하기
            </span>
          </button>
        </div>
        

          <p class="" id="value" style="font-size : 18px; padding-top :5%; line-height : 21px; font-weight : bold; margin-bottom : 71%;color : #6e7da0">
            현재 총 {{ people }}명이 참여했어요.
          </p>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      share_count : 0,
      people : 0,
      subcount : 0,
      maincount : 0,
      restart : 0,
      count : 0,
      customers : 0,
      id : 0,
      cookiee : 231456
    }
  },
  created(){
    window.onload = () => {
        this.$http.post(`http://admin.cosmeticfitting.com:4000/user/survey`)
        .then(res => {
          this.people = res.data.count
          // console.log(res.data.list);
        })

        this.$cookies.remove("test")
        this.$cookies.remove("restart")
        this.$cookies.remove("share")
        this.$cookies.remove("countmain")
        this.$cookies.remove("key")
        this.$cookies.remove("countsub")
      }

  },
  methods:{
    clickPage(){
      this.$cookies.set("key", 1)
      setTimeout(() => {
        this.$http.post(`http://admin.cosmeticfitting.com:4000/user/survey_start`)
        .then(res => {
          this.cookiee = res.data.id
        })
      },100)

      


      setTimeout(() => {
        this.$cookies.set("test",this.cookiee)
        window.open(`./page`,"_self")
      },500)
    }
  }
}
</script>

<style scoped>
      html,body{
        font-family: 'Noto Sans KR', sans-serif;
        color : #6e7da0;
      }
      button:active, button:focus{
            /* border: none; */
            outline: none;;
      }
      button{
        font-family:'Noto Sans KR', sans-serif;
      }
      .main{
        background-image: url("./img/C.png");
        background-position : center bottom;
        background-repeat: no-repeat;
        background-size: 100%;
      }
      h2{
        height: 86px;
        font-size: 31px;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.23;
        letter-spacing: normal;
        color: #6e7da0;
        font-weight : bold;
      }
      h5{
        font-family:'Noto Sans KR', sans-serif;
        height: 24px;
        font-size: 18px;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: normal;
        text-align: center;
        color: #6e7da0;
        font-weight : 500;
      }
</style>
