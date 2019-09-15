<template>
  <div class="section">
    <b-carousel
      class="h-100"
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide v-for="project in projects" v-bind:key="project.id" :caption="project.projectName">
        <template v-slot:img>
          
            <img class="d-block img-fluid slide-img" :src="project.imageLink" />
          
        </template>
        <p>{{project.projectDescription}} <a class="gh-link" :href="project.githubLink" target="_blank">Open on github.</a>

        </p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import firestore from "./firebaseInit";
export default {
  name: "ProjectsSection",
  data() {
    return {
      slide: 0,
      projects: []
    };
  },
  methods: {
    async getProjects() {
      await firestore
        .collection("Projects")
        .get()
        .then(res => {
          res.forEach(doc => {
            
            this.projects.push(doc.data());
          });
        })
        .catch(err =>{ console.log(err)});
    }
  },
  created() {
    this.getProjects();
  }
};
</script>

<style>
.slide-img {
  height: 100vh !important;
  width: 100vw;
  object-fit: cover;
}
.gh-link{
  color: white;

}
.gh-link:hover{
  color: lightblue;
}
</style>