<template>
  <div>
    <loading :active.sync="isLoading" 
            :can-cancel="true" 
            :on-cancel="onCancel"
            :is-full-page="fullPage"
            :width="90"
            :height="90"
            >
                
    </loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css';



export default {
    created(){
        console.log("Hello");
        window.addEventListener("load", this.doAjax)
    },
    props:{
        query : String
    },
    data() {
      return {
          isLoading: false,
          fullPage: true,
          result : this.query
      }
    },
    components: {
        Loading
    },
    methods: {
        doAjax() {
            this.isLoading = true;
            // simulate AJAX
            setTimeout(() => {
                this.isLoading = false
                window.open(`./result?id=${this.result}`,"_self")
            },3000)
        },
        onCancel() {
            console.log('User cancelled the loader.')
        },
        pageChange(){
            this.isLoading = false
            window.open(`./result?id=${this.result}`,"_self")
        }
    },
}
</script>

<style>

</style>