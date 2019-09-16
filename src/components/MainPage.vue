<template>
  <div class="mainPage">
    <NavBar class="fixed-top" :active="active" :color="navbarColorType"/>
    <GreetSection id="greetSection"
      v-observe-visibility="{
      callback: greetSectionInViewport,
      intersection: {
        rootMargin: offsets
        },
      }"
    />
    <AboutMeSection id="aboutMeSection" v-observe-visibility="{
      callback: aboutMeSectionInViewport,
      intersection: {
        rootMargin: offsets
        },
      }" />
    <ProjectsSection id="projectsSection" v-observe-visibility="{
      callback: projectsSectionInViewport,
      intersection: {
        rootMargin: offsets
        },
      }" />
    <ContactMeSection id='contactMeSection' v-observe-visibility="{
      callback: contactMeSectionInViewport,
      intersection: {
        rootMargin: offsets
        },
      }" />
  </div>
</template>

<script>
import GreetSection from "./GreetSection";
import AboutMeSection from "./AboutMeSection";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";
import NavBar from "./NavBar";


export default {
  name: "MainPage",
  components: {
    GreetSection,
    AboutMeSection,
    ProjectsSection,
    ContactMeSection,
    NavBar
  },
  data() {
    return {
      greetSectionVisible: false,
      aboutMeSectionVisible: false,
      projectsSectionVisible: false,
      contactMeSectionVisible: false,
      offsets: '-50% -50%',
      active: 'greetSection',
      navbarColorType: false
    }
  },
  methods: {
    greetSectionInViewport(isVisible, entry) {
      this.greetSectionVisible = isVisible;
    },
    aboutMeSectionInViewport(isVisible, entry) {
      this.aboutMeSectionVisible = isVisible;
    },
    projectsSectionInViewport(isVisible, entry) {
      this.projectsSectionVisible = isVisible;
    },
    contactMeSectionInViewport(isVisible, entry) {
      this.contactMeSectionVisible = isVisible;
    }
  },
  watch: {
    greetSectionVisible: function () {
      if (this.greetSectionVisible === true) {
        this.active = 'greetSection'
        this.navbarColorType = false;
      } else{
        this.navbarColorType = true;
      }
    },
    aboutMeSectionVisible: function () {
      if (this.aboutMeSectionVisible === true) {
        this.active = 'aboutMeSection'
        this.navbarColorType = true;
      }
    },
    projectsSectionVisible: function () {
      if (this.projectsSectionVisible === true) {
        this.active = 'projectsSection'
        this.navbarColorType = true;
      }
    },
    contactMeSectionVisible: function () {
      if (this.contactMeSectionVisible === true) {
        this.active = 'contactMeSection'
        this.navbarColorType = true;
      }
    }
  }
};
</script>

<style>
.mainPage {
  width: 100vw;
  background-color: #5652e1;
  min-height: 100vh;
}
.section {
  height: 100vh;
}
</style>