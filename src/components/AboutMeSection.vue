<template>
  <div class="section aboutMeBackground about-me-section">
    <div class="about-me-card about-me-card-left">
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
          <div> <a href="https://goo.gl/maps/6y1QqtFBA3ect5tCA" target="blank"> NOVI SAD, SERBIA</a></div>
          <div>
            <font-awesome-icon class :icon="['fab', 'facebook-square']" size="2x" />
          </div>
          <div><a href="https://www.facebook.com/bijelic99" target="blank">/BIJELIC99</a></div>
          <div>
            <font-awesome-icon class :icon="['fab', 'linkedin-in']" size="2x" />
          </div>
          <div><a href="https://www.linkedin.com/in/dejan-bijelic" target="blank">/DEJAN-BIJELIC</a></div>
          <div>
            <font-awesome-icon class :icon="['fab', 'github-square']" size="2x" />
          </div>
          <div><a href="https://github.com/bijelic99" target="blank">/BIJELIC99</a></div>
        </div>
      </div>
    </div>
    <div class="about-me-card about-me-card-right">
      <div class="about-me-inner-cards-right right-inner-card-top">
        <h2 class="about-me-head text-center">ABOUT ME</h2>
      </div>
      <div class="about-me-inner-cards-right right-inner-card-bottom text-left about-me-text">
        <div class="text-left about-me-text">
          <p>
          Motivated junior full stack developer with wide array of knowledge regarding programming technologies and concepts. Good communication skills.</p>
          Technologies I am familiar with are:
          <ul>
            <li>On the frontend:  <ul>
              <li>JavaScript(Vue.js, JQuery)</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul></li>
            <li>On the backend: <ul>
              <li>Java</li>
              <li>C#(ASP.NET)</li>
              <li>PHP</li>
              <li> MySQL</li>
            </ul></li>
          </ul>
          <p>
          Although I prefer backend I am not afraid of working on frontend as well.
          I am very familiar with concepts of OOP and MVC.</p>
        </div>
      </div>
    </div>
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
.about-me-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
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
.social-text>div>a{
  color: white;
}
.social-text>div>a:hover{
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
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
  font-size: 1em;
  color: white;
}
 .about-me-text>ul{
   list-style-type: none;
 }
 .about-me-text>ul>li>ul{
   list-style-type: square;
 }

@media only screen and (max-width: 992px) {
  .about-me-section {
    height: 200vh !important;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .aboutMeBackground {
    background-image: none;
  }
  .profile-img {
    width: 36vw;
    height: 36vw;
  }
  .about-me-card-left {
    grid-column: 1;
    grid-row: 1;
    grid-template-columns: 1fr;
    padding-left: 4vw;
    padding-right: 4vw;
  }
  .about-me-inner-cards-left {
    grid-column: 1;
  }
  .about-me-card-right {
    grid-column: 1;
    grid-row: 2;
    grid-template-columns: 1fr;
    padding-left: 4vw;
    padding-right: 4vw;
    overflow: hidden;
  }
  @media only screen and (max-width: 768px) {
    .about-me-text {
      font-size: 0.9em;
    }
    @media only screen and (max-width: 320px) and (max-height: 620px) {
      .about-me-text {
        font-size: 0.8em;
      }
    }
  }
}
</style>