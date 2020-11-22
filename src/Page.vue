<template>
  <div class="d-flex flex-column align-items-center justify-content-center bg-white"
       style="max-width : 500px; height : 100vh; margin : auto;"
  >

    <div class="w-100 mt-3" style="padding : 0 10% 0 10%;">
      <img src="./img/fitting.png" alt="" width="67.2px" class="mb-2 ml-1">
      <p class="float-right m-0 mr-1 pt-1" style="font-size : 20px; color :#6e7da0; font-weight : 500; ">
        {{ this.countt === 12 ? countt : countt+1 }}/12
      </p>
      <input type="range" min="1" max="13" :value="countt+2" class="" style=""
      >
    </div>
    <Hooper ref="carousel" class="" style="height : 57%;" :transition="700" :mouseDrag="false" :wheelControl="false" :keysControl="false" :touchDrag="false">
          <Slide v-for="(people, index) in rest"
                :key="index" class="w-100">
            <div class="w-100">
              <div class="text-center p-4 mt-3 mb-1">
                <p style="font-size : 23px; color: #696969; white-space : pre-wrap; font-size : 25px; font-weight : bold; font-family: 'Noto Sans KR', sans-serif; letter-spacing : 1px;" class="m-0">
                  {{ people.id }}
                </p>
              </div>

              <div class="d-flex flex-column text-center m-auto pt-3" style="width : 80%;">
                <button @click="testButton1(0)"
                  class="mb-4"
                  :disabled="isDisabled"
                >
                    <p style="white-space : pre-wrap; line-height: 1.35; font-size : 18px;" class="m-0">
                      {{ people.btn1 }}
                    </p>
                </button>
                <button @click="testButton2(1)"
                  class=""
                  :disabled="isDisabled"
                >
                    <p style="white-space : pre-wrap; line-height: 1.35; font-size : 18px;" class="m-0">
                      {{ people.btn2 }}
                    </p>
                </button>
              </div>
            </div>
          </Slide>
    </Hooper>

    

  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  created(){
    window.onload = () => {
      setTimeout(() => {
        this.isDisabled = false
      },900)
      const BASE_URI = "https://admin.cosmeticfitting.com:4000"
      this.$http.post(`${BASE_URI}/user/survey`)
      .then(res => {
        this.rest = res.data.list
      })
    }
  },
  data(){
    return{
      click : 0,
      btn1: 0,
      btn2: 0,
      btnResult : 0,
      result : Number(this.query),
      isDisabled : true,
      value: 0,
      rest : [],
      odnum : 0,
      od : 0,
      srnum : 0,
      sr: 0,
      pnnum : 0,
      pn : 0,
      wtnum : 0,
      wt : 0,
      countt : 0,
      resultString : ""
    }
  },
  components:{
    Hooper,
    Slide,
  },
  props:{
    query : String
  },
  methods:{
    testButton1(n){
      this.$refs.carousel.slideNext();

      if(this.countt === 0 || this.countt === 4 || this.countt === 8){
        this.odnum = this.odnum + n

        if(this.odnum <= 1){
          this.od = 'O'
        }
        else{
          this.od = 'D'
        }
      }

      if(this.countt === 1 || this.countt === 5 || this.countt === 9){
        this.srnum = this.srnum + n

        if(this.srnum <= 1){
          this.sr = 'S'
        }
        else{
          this.sr = 'R'
        }
      }

      if(this.countt === 2 || this.countt === 6 || this.countt === 10){
        this.pnnum = this.pnnum + n

        if(this.pnnum <= 1){
          this.pn = 'P'
        }
        else{
          this.pn = 'N'
        }
      }

      if(this.countt === 3 || this.countt === 7 || this.countt === 11){
        this.wtnum = this.wtnum + n

        if(this.wtnum <= 1){
          this.wt = 'W'
        }
        else{
          this.wt = 'T'
        }
      }
      this.countt++
      if(this.countt === 12){
        this.resultString = this.od + this.sr + this.pn + this.wt
        // console.log(this.resultString);
        window.open(`./Loading?id=${this.resultString}`, "_self")
      }
      
      this.isDisabled = true
      setTimeout(() => {
        this.isDisabled = false
      },700)

      
    },
    testButton2(n){
      this.$refs.carousel.slideNext();

      if(this.countt === 0 || this.countt === 4 || this.countt === 8){
        this.odnum = this.odnum + n

        if(this.odnum <= 1){
          this.od = 'O'
        }
        else{
          this.od = 'D'
        }
      }

      if(this.countt === 1 || this.countt === 5 || this.countt === 9){
        this.srnum = this.srnum + n

        if(this.srnum <= 1){
          this.sr = 'S'
        }
        else{
          this.sr = 'R'
        }
      }

      if(this.countt === 2 || this.countt === 6 || this.countt === 10){
        this.pnnum = this.pnnum + n

        if(this.pnnum <= 1){
          this.pn = 'P'
        }
        else{
          this.pn = 'N'
        }
      }

      if(this.countt === 3 || this.countt === 7 || this.countt === 11){
        this.wtnum = this.wtnum + n

        if(this.wtnum <= 1){
          this.wt = 'W'
        }
        else{
          this.wt = 'T'
        }
      }
      this.countt++

      if(this.countt === 12){
        this.resultString = this.od + this.sr + this.pn + this.wt
        // console.log(this.resultString);
        window.open(`./Loading?id=${this.resultString}`, "_self")
      }
      
      this.isDisabled = true
      setTimeout(() => {
        this.isDisabled = false
      },700)
      

    },
    changeNumber1(){
      this.click++
      this.btn1 = this.btn1 + 1
      this.$refs.carousel.slideNext();
      if(this.click === 12){
        this.btnResult = this.btn1 + this.btn2
        window.open(`./Loading?id=${this.btnResult}`, "_self")
      }
      this.isDisabled = true
      setTimeout(() => {
        this.isDisabled = false
      },700)
    },
    changeNumber2(){
      this.click++
      this.btn2 = this.btn2 + 2
      this.$refs.carousel.slideNext();
      if(this.click == 12){
        this.btnResult = this.btn1 + this.btn2
        window.open(`./Loading?id=${this.btnResult}`, "_self")
      }
      this.isDisabled = true
      setTimeout(() => {
        this.isDisabled = false
      },700)
    },
  }
}
</script>

<style scoped>
  body{
    font-family: 'Noto Sans KR', sans-serif;
  }
  button{
    border-radius: 20px;
    border : none;
    text-shadow: none;
    background-color : #8291b4;
    color : white;
    display: block;
    padding-top: 21px;
    padding-bottom: 23px;
    padding-left: 20px;
    padding-right: 20px;
    cursor:default;
  }
  button p {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
    input[type='range'] {
      overflow: hidden;
      width: 100%;
      -webkit-appearance: none;
      background-color: rgba(255, 160, 90, 0.4);;
      border-radius: 8px;
    }
    
    input[type='range']::-webkit-slider-runnable-track {
      height: 10px;
      -webkit-appearance: none;
      color: #13bba4;
      margin-top: -1px;
      transition : 1s;
    }
    
    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      width : 10px;
      border-radius: 5px;
      height : 10px;
      cursor: pointer;
      background: #ffa05a;
      box-shadow: -280px 0 0 275px#ffa05a;
      transition : box-shadow 1s ;
    }
  input:active, input:focus{
    outline : none;
  }

  input::-webkit-slider-thumb {
    width: 36px;
    height: 36px;
    border: 0;
  }
  button:active, button:focus{
      /* border: none; */
      outline: none;;
  }
</style>