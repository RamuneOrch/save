<template>
  <div class="d-flex flex-column align-items-center justify-content-center bg-white"
       style="max-width : 500px; height : 100vh; margin : auto;"
  >

    <div class="w-100 pr-4 pl-4 mt-3 pt-4">
      <input type="range" min="1" max="12" :value="click+1" disabled
      >
    </div>
    <Hooper ref="carousel" class="h-75" :transition="700" :mouseDrag="false" :wheelControl="false" :keysControl="false" :touchDrag="false">
          <Slide v-for="(people, index) in sample"
                :key="index" class="w-100">
            <div class="w-100">
              <div class="text-center p-4 mt-4 mb-4">
                <strong style="font-size : 23px; white-space : pre-wrap">
                  {{ people.info }}
                </strong>
              </div>

              <div class="d-flex flex-column text-center m-auto pt-3" style="width : 90%;">
                <button @click="changeNumber1()"
                  class="mb-4"
                  :disabled="isDisabled"
                >
                    <strong style="white-space : pre-wrap">
                      {{ people.data1 }}
                    </strong>
                </button>
                <button @click="changeNumber2()"
                  class=""
                  :disabled="isDisabled"
                >
                    <strong style="white-space : pre-wrap">
                      {{ people.data2 }}
                    </strong>
                </button>
              </div>
            </div>
          </Slide>
    </Hooper>

    

  </div>
</template>

<script>
import sample from "./data"
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  created(){
    window.addEventListener("load", setTimeout(() => {
        this.isDisabled = false
    },1100))
  },
  data(){
    return{
      click : 0,
      btn1: 0,
      btn2: 0,
      btnResult : 0,
      sample,
      result : Number(this.query),
      isDisabled : true
    }
  },
  components:{
    Hooper,
    Slide
  },
  props:{
    query : String
  },
  methods:{
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
  button{
    border-radius: 20px;
    border : none;
    text-shadow: none;
    background-color : #ff5100;
    color : white;
    display: block;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    cursor:default;
  }
  button p {
    margin: 0;
    padding: 0;
  }
  input{
    outline: 0;
    border : 0;
    width: 100%;
    -webkit-appearance: none;
    background-color: rgb(251, 167, 142);
    border-radius: 10px;
    height: 5px;
  }
  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 36px;
    height: 36px;
    border: 0;
    background: url('https://spti.snackpot.kr/static/media/gauge-circle.ade21e6d.svg');
  }
  button:active, button:focus{
      /* border: none; */
      outline: none;;
  }
</style>