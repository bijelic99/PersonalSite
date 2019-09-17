<template>
  <div ref="navBar" class="navbar-base navbar-wrapper" v-bind:class="{'navbar-background-transparent': !color,'navbar-background-blue': color }">
    <div class="navbar-brand-custom" ><a href="#" v-scroll-to="'#greetSection'">DB</a></div>
    <div ref="navbarWrapper" class="navbar-link-wrapper-custom navbar-link-custom" v-bind:class="[collapsableMenuActive ? 'animated' : '', menuOpen ? 'slideInRight' : 'slideOutRight' ]">
        <a  href="#" v-scroll-to="'#greetSection'" v-bind:class="{active: greetSectionActive} ">Home</a>
        <a  href="#" v-scroll-to="'#aboutMeSection'" v-bind:class="{active: aboutMeSectionActive}">About me</a>
        <a  href="#" v-scroll-to="'#projectsSection'" v-bind:class="{active: projectsSectionActive}">Projects</a>
        <a  href="#" v-scroll-to="'#contactMeSection'" v-bind:class="{active: contactMeSectionActive}">Contact me</a>
    </div>
    <div class="hamburger-menu animated" v-on:click="menuOpen = !menuOpen" v-bind:class="{'tada': menuOpen}" ><font-awesome-icon  icon="bars" size="2x" /></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data(){
    return{
      greetSectionActive: true,
      aboutMeSectionActive: false,
      projectsSectionActive: false,
      contactMeSectionActive: false,
      menuOpen: false,
      collapsableMenuActive: false,
      windowWidth: 0,
      windowHeight: 0
      
    }
  },
  props: {
    active: String,
    color: Boolean
  },
  watch: {
    active: function (){
      //console.log(this.active)
      if(this.active === 'greetSection') {
        this.greetSectionActive = true
        this.aboutMeSectionActive = false
        this.projectsSectionActive = false
        this.contactMeSectionActive = false
        
      }
      else if(this.active === 'aboutMeSection') {
        this.greetSectionActive = false
        this.aboutMeSectionActive = true
        this.projectsSectionActive = false
        this.contactMeSectionActive = false
      }
      else if(this.active === 'projectsSection') {
        this.greetSectionActive = false
        this.aboutMeSectionActive = false
        this.projectsSectionActive = true
        this.contactMeSectionActive = false
      }
      else if(this.active === 'contactMeSection') {
        this.greetSectionActive = false
        this.aboutMeSectionActive = false
        this.projectsSectionActive = false
        this.contactMeSectionActive = true
      }
    },
    windowWidth: function(){
      if(this.windowWidth <= 992) 
     {
        this.$refs.navbarWrapper.style.top = 'calc('+this.$refs.navBar.clientHeight+'px + 0.1em)'
        this.collapsableMenuActive = true
     } else{
        
        
        this.collapsableMenuActive = false
     }
    }
    
    
  },
  mounted(){
    
     
     
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowHeight);

      
      this.getWindowWidth()
      this.getWindowHeight()
      
    
    
  },
  computed: {
  animatedToggle: function () {
    if(this.collapsableMenuActive) return 'animated'
    else return ''
  },
  menuAnimationToggle: function(){
    if(!this.collapsableMenuActive) return ''
     else if(this.menuOpen) return 'slideInRight' 
      else return 'slideOutRight'
  }},
  methods: {
    getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth;
      },

      getWindowHeight(event) {
        this.windowHeight = document.documentElement.clientHeight;
      }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
    window.removeEventListener('resize', this.getWindowHeight);
    
  }

};
</script>

<style>
.navbar-base {
  width: inherit;
  min-height: 7.2vh;
  border-bottom: solid;
  border-bottom-color: white;
  border-bottom-width: 0.1em;
  z-index: 2;
}
.navbar-wrapper {
  display: grid;
  grid-template-columns: 3fr 1fr 40% 5fr 3fr;
  grid-template-rows: 1fr;
}
.navbar-brand-custom {
  grid-column: 2;
  text-align: center;
  align-self: center;
  
}
.navbar-brand-custom{
  color: white;
  font-weight: bold;
  font-size: 2.4em;
}
.navbar-brand-custom>a, .navbar-brand-custom>a:link{
  text-decoration: none;
  color: white;
}

.navbar-brand-custom>a:hover{
  color: #2a1868;
}

.navbar-link-wrapper-custom {
  grid-column: 4;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 0.4vw;
  align-items: center;
  justify-items: center;
  white-space: nowrap;
  position: statoi;
}
.navbar-link-custom>a {
  color: white;
  font-weight: bold;
}
.navbar-link-custom>a:link{
  color: white;
  text-decoration: none;
}
.navbar-link-custom>a:link{
  color: white;
}
.navbar-link-custom>a:hover{
  color: #2a1868;
}
.active{
  color: #2a1868 !important;
}
.active:link{
  color: #2a1868 !important;
}
.navbar-background-transparent{
  background-color: transparent;
}
.navbar-background-blue{
  background-color: #5652e1;
}
.hamburger-menu{
  align-self: center;
  justify-self: center;
  color: white;
  grid-column: 5;
  visibility: hidden;
}
@media only screen and (max-width: 992px) {
  :root{
    --nav-color: rgba(86, 82, 225, 1);
  }
  .navbar-base{
    
    z-index: 40;
    background-color: var(--nav-color);
  }
  .navbar-wrapper{
    grid-template-columns: 1fr 60% 1fr;
    padding-left: 2%;
    padding-right: 2%;
    
  }
  .navbar-link-wrapper-custom{
    z-index: 1;
    position: fixed;
    right: 0;
    height: 100vh;
    width: 60vw;
    background-color: var(--nav-color);
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(min-content, max-content);
    grid-row-gap: 1vw;
    padding-top: 2vh;
    
    border-left-width: 0.1em;
    border-left-style: solid;
    border-left-color: white;
    
    
    
  }
  .navbar-brand-custom{
    grid-column: 1
  }
  .hamburger-menu{
    visibility: visible;
    cursor: pointer;
    grid-column: 3;
  }
}
</style>