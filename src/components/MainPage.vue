<template>
  <div class="mainPage">
       
          <GreetSection/>
          <AboutMeSection/>
          <ProjectsSection/>
          <ContactMeSection/>
       
  </div>
</template>

<script>

import GreetSection from './GreetSection'
import AboutMeSection from './AboutMeSection'
import ProjectsSection from './ProjectsSection'
import ContactMeSection from './ContactMeSection'

export default {
    name: 'MainPage',
    components: {
      GreetSection, AboutMeSection, ProjectsSection, ContactMeSection
    },
    
}
</script>

<style>
 .mainPage{
    width: 100vw;
    background-color: #5652e1;
    min-height: 100vh;
 }
 .section{
    
    height: 100vh;
    
 }

</style>