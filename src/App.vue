<template>
  <div id="app" class="main1" style="">
      <router-view />
  </div>
</template>

<script>

export default {
  created(){
  },
  name : "App",
}
</script>

<style scoped>
  @media(orientation: portrait ){
      html { 
        transform-origin: top left; 
        position: absolute; 
        top: 100%; 
        left: 0; 
        width: 100vh; 
        height: 100vw; 
      } 
    }
</style>