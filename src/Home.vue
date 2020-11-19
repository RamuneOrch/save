<template>
  <div class="d-flex flex-column align-items-center justify-content-center bg-white"
       style="max-width : 600px; height : 100vh; margin : auto;"
  >

    <div class="text-center">
      <h2 style="line-height : 50px; font-weight : 700;">내 성격에 딱! <br>
              어울리는 스낵은?
      </h2>

      <h5 class="mt-5" style="font-weight : 700">
        스낵으로 보는 내 성격, SPTI
      </h5>

      <button class="p-4 pl-5 pr-5 mt-5 m-3"
              style="border : none;
                     border-radius : 20px;
                     border : none;
                     text-shadow: none;
                     background-color : #ff5100;
                     color : white;
              "
              @click="clickPage()"
      >

        <strong style="font-size : 21px">
          테스트 시작하기<br>
        </strong>

        <p class="m-0 mt-2" style="font-size : 16px">현재 총 {{ people }}명이 참여했어요.</p>
      </button>

      <div style="margin-top : 50px;">
        <img src="./1.png" alt="" width="100px;">
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
      people : 1
    }
  },
  methods:{
    clickPage(){
      window.open(`./page`,"_self")
    }
  }
}
</script>

<style scoped>
      button:active, button:focus{
            /* border: none; */
            outline: none;;
      }
</style>
