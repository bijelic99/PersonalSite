<template>
  <div class="section aboutMeBackground">
    <b-container fluid>
      <b-row>
        <b-col class="about-me-card" xl="6" lg="6" md="6" sm="12">
          <!-- Redo this!!!!! -->
          <b-container class="d-flex h-100">
          <b-row align-v="center" align-h="center"  class="w-100">
            <b-container  fluid class="w-100 d-flex">
              <b-row align-h="center"  align-v="center" >
                <b-col>
                  <b-img
                    class="profile-img"
                    src="https://firebasestorage.googleapis.com/v0/b/personalsite-26924.appspot.com/o/profile-pic-sq.jpg?alt=media&token=e53ba702-78bf-4e5e-ba78-3f517a183bff"
                    v-bind="mainProps"
                    rounded="circle"
                    alt="Circle image"
                  ></b-img>
                </b-col>
              </b-row>
              <b-row align-h="center"  align-v="center">
                <b-col class="mt-4" align-self="center">
                  <h2 class="name-text">Dejan Bijelic</h2>
                </b-col>
              </b-row>
              <b-row align-h="center"  align-v="center"  >
                <b-col class="mt-2" align-self="center">
                  <b-container class="social-text">
                    <b-row>
                      <b-col class>
                        <font-awesome-icon class="mr-4" icon="map-marker-alt" size="3x" />NOVI SAD, SERBIA
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col class="mt-1">
                        <font-awesome-icon
                          class="mr-4"
                          :icon="['fab', 'facebook-square']"
                          size="3x"
                        />/BIJELIC99
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col class="mt-1">
                        <font-awesome-icon class="mr-4" :icon="['fab', 'linkedin-in']" size="3x" />/DEJAN-BIJELIC
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col class="mt-1">
                        <font-awesome-icon class="mr-4" :icon="['fab', 'github-square']" size="3x" />/BIJELIC99
                      </b-col>
                    </b-row>
                  </b-container>
                </b-col>
              </b-row>
            </b-container>
          </b-row>
          </b-container>
          <!-- To here -->
        </b-col>
        <b-col class="about-me-card d-flex" xl="6" lg="6" md="6" sm="12">
          <b-container  class="d-flex">
          <b-row align-v="center">
            <b-container>
              <b-row>
                <b-col >
                  <b-container class="text-center">
                    <b-row>
                      <b-col align-self="center" class=" mb-4 "><h2 class="about-me-head">ABOUT ME</h2></b-col>
                    </b-row>
                    <b-row>
                      <b-col align-self="center"><p class="text-left pl-5 about-me-text"> I am a student at University of Novi Sad, Serbia.
                            My goal is to start my professional career by doing freelance work.

                            I am familiar with quite a few technologies.
                            <br>Some of them are:
                            <ul class="text-left">
                                <li>Java</li>
                                <li>C#</li>
                                <li>SQL(MySQL)</li>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>JS</li>
                                <li>PHP</li>
                                <li>C</li>
                            </ul>

                            From technologies I mentioned above I have the most experience with Java(3 Years of
                            experience) as well as C#(2 years) and SQL(2 years).



                            <ul class="text-left">
                                <li>-Using Java I have mastered smaller desktop apps that connect to database (MySQL)
                                    and are used for managing data(Insert, Edit, Delete, etc...).</li>
                                <li>-Using C# I have mostly used for ASP.Net Web Forms, MVC and also for Windows Forms.</li>
                                <li> -As for HTML, CSS and JS that is area where I am a bit weaker but I know how to
                                    use Bootstrap as well as JQuery.</li>
                            </ul></p></b-col>
                    </b-row>
                  </b-container>
                </b-col>
              </b-row>
            </b-container>
          </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AboutMeSection",
  data() {
    return {
      mainProps: { blank: false, blankColor: "#777", class: "m1" }
    };
  }
};
</script>

<style>
.aboutMeBackground {
  background-image: url("../../pictures/line.png");
  background-repeat: repeat-y;
  background-size: contain;
  background-position: center center;
}
.about-me-card {
  min-height: 100vh;
}
.profile-img {
  width: 16vw;
  height: 16vw;
  background-repeat: no-repeat;
  background-size: cover;
  border-style: solid;
  border-color: white;
  border-width: 0.18vw;
}
.name-text {
  text-align: center;
  font-size: 2.4rem;
  font-weight: bolder;
  color: white;
}
.social-text {
  text-align: left;
  font-size: 1.2rem;
  font-weight: bolder;
  color: white;
}
.about-me-head{
  font-weight: bolder;
  font-size: 2.4rem;
  color: white;
}
.about-me-text{
  font-weight: bolder;
  font-size: 1.1rem;
  color: white;
}
@media only screen and (max-width: 768px) {
  .aboutMeBackground {
    background-image: none;
  }
}
</style>