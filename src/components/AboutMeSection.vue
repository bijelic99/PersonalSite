<template>
  <div class="section aboutMeBackground">
    <b-container fluid>
      <b-row>
        <b-col class="about-me-card about-me-card-left" xl="6" lg="6" md="6" sm="12">
          <div class="about-me-inner-cards-left left-inner-card-top">
            <b-img
              class="profile-img"
              src="https://firebasestorage.googleapis.com/v0/b/personalsite-26924.appspot.com/o/profile-pic-sq.jpg?alt=media&token=e53ba702-78bf-4e5e-ba78-3f517a183bff"
              v-bind="mainProps"
              rounded="circle"
              alt="Circle image"
            ></b-img>
          </div>
          <div class="about-me-inner-cards-left left-inner-card-mid">
            <h2 class="name-text">Dejan Bijelic</h2>
          </div>
          <div class="about-me-inner-cards-left left-inner-card-bottom">
            <div class="social-links social-text">
              <div>
                <font-awesome-icon class icon="map-marker-alt" size="2x" />
              </div>
              <div>NOVI SAD, SERBIA</div>
              <div>
                <font-awesome-icon class :icon="['fab', 'facebook-square']" size="2x" />
              </div>
              <div>/BIJELIC99</div>
              <div>
                <font-awesome-icon class :icon="['fab', 'linkedin-in']" size="2x" />
              </div>
              <div>/DEJAN-BIJELIC</div>
              <div>
                <font-awesome-icon class :icon="['fab', 'github-square']" size="2x" />
              </div>
              <div>/BIJELIC99</div>
            </div>
          </div>
        </b-col>
        <b-col class="about-me-card about-me-card-right" xl="6" lg="6" md="6" sm="12">
          <div class="about-me-inner-cards-right right-inner-card-top">
            <h2 class="about-me-head text-center">ABOUT ME</h2>
          </div>
          <div class="about-me-inner-cards-right right-inner-card-bottom text-left about-me-text">
            <p class="text-left about-me-text">
            I am a student at University of Novi Sad, Serbia.
            My goal is to start my professional career by doing freelance work.
            I am familiar with quite a few technologies.
            <br />
Some of them are:
            <ul class="text-left">
              <li>Java</li>
              <li>C#</li>
              <li>SQL(MySQL)</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>JS</li>
              <li>PHP</li>
              <li>C</li>
            </ul>From technologies I mentioned above I have the most experience with Java(3 Years of
            experience) as well as C#(2 years) and SQL(2 years).
            <ul class="text-left">
              <li>
                -Using Java I have mastered smaller desktop apps that connect to database (MySQL)
                and are used for managing data(Insert, Edit, Delete, etc...).
              </li>
              <li>-Using C# I have mostly used for ASP.Net Web Forms, MVC and also for Windows Forms.</li>
              <li>
                -As for HTML, CSS and JS that is area where I am a bit weaker but I know how to
                use Bootstrap as well as JQuery.
              </li>
            </ul>
            </p>
          </div>
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
  background-image: url("../../pictures/line.svg");
  background-repeat: repeat-y;
  background-size: contain;
  background-position: center center;
}
.about-me-card {
  height: 100vh;
  display: grid;
}
.about-me-card-left {
  grid-template-columns: 2fr 5fr 1fr;
  grid-template-rows: 2fr 3fr 1fr 4fr 2fr;
  grid-row-gap: 1em;
}
.about-me-inner-cards-left {
  grid-column: 2/3;
}
.left-inner-card-top {
  grid-row: 2/3;
  text-align: center;
}
.left-inner-card-mid {
  grid-row: 3/4;
}
.left-inner-card-bottom {
  grid-row: 4/5;
  justify-self: center;
}
.about-me-card-right {
  grid-template-columns: 1fr 5fr 2fr;
  grid-template-rows: 2fr 2fr 6fr 2fr;
  grid-row-gap: 1em;
}
.about-me-inner-cards-right {
  grid-column: 2/3;
}
.right-inner-card-top {
  grid-row: 2/3;
}
.right-inner-card-bottom {
  grid-row: 3/4;
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
.social-links {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-auto-rows: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1em;
}

.about-me-head {
  font-weight: bolder;
  font-size: 2.4rem;
  color: white;
}
.about-me-text {
  font-weight: bolder;
  font-size: 1.1rem;
  color: white;
}
@media only screen and (max-width: 768px) {
  .aboutMeBackground {
    background-image: none;
  }
  .profile-img {
    width: 36vw;
    height: 36vw;
  }
}
</style>