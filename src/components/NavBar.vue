<template>
  <div class="navbar-base navbar-wrapper" v-bind:class="{'navbar-background-transparent': !color,'navbar-background-blue': color }">
    <div class="navbar-brand-custom" ><a href="#" v-scroll-to="'#greetSection'">DB</a></div>
    <div class="navbar-link-wrapper-custom navbar-link-custom">
        <a  href="#" v-scroll-to="'#greetSection'" v-bind:class="{active: greetSectionActive} ">Home</a>
        <a  href="#" v-scroll-to="'#aboutMeSection'" v-bind:class="{active: aboutMeSectionActive}">About me</a>
        <a  href="#" v-scroll-to="'#projectsSection'" v-bind:class="{active: projectsSectionActive}">Projects</a>
        <a  href="#" v-scroll-to="'#contactMeSection'" v-bind:class="{active: contactMeSectionActive}">Contact me</a>
    </div>
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
    }
  },
  props: {
    active: String,
    color: Boolean
  },
  watch: {
    active: function (){
      console.log(this.active)
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
    }
  }
};
</script>

<style>
.navbar-base {
  width: 100vw;
  min-height: 3.6vw;
  border-bottom: solid;
  border-bottom-color: white;
  border-bottom-width: 0.1em;
}
.navbar-wrapper {
  display: grid;
  grid-template-columns: 3fr 1fr 8fr 5fr 3fr;
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
  align-items: center;
  justify-items: stretch;
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

</style>