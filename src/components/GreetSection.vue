<template>
  <div class="greetBanner section flex-y">
      <div class="flex-8"></div>
      <div class="flex-x flex-4"><p class="greetText mg-10">HI MY NAME IS DEJAN AND I AM A DEVELOPER FROM SERBIA</p></div>
      <div class="flex-8"></div>
      <div class="flex-x flex-2 arrow"><font-awesome-icon icon="chevron-down" size="8x" class="arrowDown"/></div>
      
      
      
  </div>

</template>

<script>

export default {
    name: 'GreetSection'
}
</script>

<style>
  .greetBanner{
    background-image: url("../../pictures/duotone.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    image-rendering: optimizeSpeed;
    

  }
  .greetText{
    
    text-justify: distribute-all-lines;
    font-size: 2.8rem;
    font-weight: bolder;
    color: white;
    

  }
  .text-mg{
    
    margin-bottom: 25vh;
  }
  .flex-y{
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
  .flex-x{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .flex-4{
    flex: 4;
  }
  .flex-2{
    flex: 2;
  }
    .flex-1{
    flex: 1;
  }
  .flex-8{
    flex: 8;
  }
  .arrowDown{
    color: white;
  }
  .mg-10{
    margin-left: 25%;
    margin-right: 25%;
  }
</style>