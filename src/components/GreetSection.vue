<template>
  <div class="greetBanner section flex-y">
      <div class="flex-8"></div>
      <div class="flex-x flex-4"><p class="greetText mg-10">HI MY NAME IS DEJAN AND I AM A DEVELOPER FROM SERBIA</p></div>
      <div class="flex-8"></div>
      <div class="flex-x flex-2 arrow"><font-awesome-icon icon="chevron-down" size="8x" class="arrowDown" v-scroll-to="'#aboutMeSection'"/></div>
      
      
      
  </div>

</template>

<script>

export default {
    name: 'GreetSection'
}
</script>

<style>
  .greetBanner{
    
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    image-rendering: optimizeSpeed;
    

  }
  @media (max-width: 1919px) {
    .greetBanner{
    background-image: url("https://firebasestorage.googleapis.com/v0/b/personalsite-26924.appspot.com/o/rsz_duotone-min-25-percent.png?alt=media&token=494e6d68-1c68-4953-8452-1defb091a5bb");
    }
  }
  @media (max-width: 2754px) {
    .greetBanner{
    background-image: url("https://firebasestorage.googleapis.com/v0/b/personalsite-26924.appspot.com/o/rsz_1duotone-min-50-percent.png?alt=media&token=c9f75a47-121c-42bd-bb74-6b33cc38c318");
    }
  }
  @media (min-width: 2755px){
    .greetBanner{
    background-image: url("https://firebasestorage.googleapis.com/v0/b/personalsite-26924.appspot.com/o/duotone-min.png?alt=media&token=b775340c-b5d6-45e7-bc4c-a12ff0e8198b");
    }
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
    justify-content: flex-end;
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
    cursor: pointer;
  }
  .mg-10{
    margin-left: 25%;
    margin-right: 25%;
  }

  @media only screen and (max-width: 767px ) {
    .arrowDown{
      font-size: 6em;
    }
    .greetText{
      font-size: 1.6rem;
    }
    .mg-10{
    margin-left: 10%;
    margin-right: 10%;
  }
  }
</style>