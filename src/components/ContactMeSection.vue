<template>
  <div class="section contact-me-section" v-bind:class="{'contact-me-section-h200': expandSection}">
    <div class="contact-me-section-head">
      <h1>Contact Me</h1>
    </div>
    <b-form @submit="sendData" class="contact-me-section-form">
      <b-form-group class="name-input-group" id="name-group" label-for="name-input">
        <b-form-input
          id="name-input"
          v-model="contactMeForm.name"
          type="text"
          required
          placeholder="Enter your name..."
          @focus="inOutOfFocus(1)"
          @blur="inOutOfFocus(0)"
        ></b-form-input>
      </b-form-group>
      <b-form-group class="email-input-group" id="email-group" label-for="email-input">
        <b-form-input
          id="email-input"
          v-model="contactMeForm.email"
          type="email"
          required
          placeholder="Enter your email address..."
          @focus="inOutOfFocus(1)"
          @blur="inOutOfFocus(0)"
        ></b-form-input>
      </b-form-group>
      <b-form-group class="message-input-group" id="message-group" label-for="message-input">
        <b-form-textarea
          id="message-input"
          v-model="contactMeForm.message"
          placeholder="Enter your message..."
          rows="10"
          max-rows="20"
          required
          @focus="inOutOfFocus(1)"
          @blur="inOutOfFocus(0)"
        ></b-form-textarea>
      </b-form-group>
      <b-button
        v-bind:disabled="!btnEnabled"
        class="button-submit"
        type="submit"
        variant="outline-primary"
      >Send</b-button>
      <b-alert
        class="alert"
        v-model="showAlertSuccess"
        @dismissed="succesDissmissed"
        variant="info"
        dismissible
      >Successfully sent!!!</b-alert>
      <b-alert
        class="alert"
        v-model="showAlertFail"
        @dismissed="failDissmissed"
        variant="warning"
        dismissible
      >Massage not sent, try again later!!!</b-alert>
    </b-form>
  </div>
</template>

<script>
import firestore from "./firebaseInit";
import firebase from "firebase/app";
import {scroller} from 'vue-scrollto/src/scrollTo'
export default {
  name: "ContactMeSection",
  data() {
    return {
      contactMeForm: {
        name: "",
        email: "",
        message: "",
        created: ""
      },
      showAlertSuccess: 0,
      showAlertFail: 0,
      showAlertTime: 4,
      btnEnabled: true,
      expandSection: false
      
    };
  },
  methods: {
    sendData(evt) {
      evt.preventDefault();
      //console.log(this.contactMeForm);
      this.contactMeForm.created = firebase.firestore.Timestamp.now();
      firestore
        .collection("ContactMeFeedback")
        .add(this.contactMeForm)
        .then(res => {
          this.showAlertSuccess = this.showAlertTime;
          this.btnEnabled = false;
          this.resetForm();
        })
        .catch(res => {
          this.showAlertFail = this.showAlertTime;
          this.btnEnabled = false;
        });
    },
    succesDissmissed() {
      this.showAlertSuccess = 0;
      this.btnEnabled = true;
    },
    failDissmissed() {
      this.showAlertFail = 0;
      this.btnEnabled = true;
    },
    resetForm() {
      this.contactMeForm.name = "";
      this.contactMeForm.email = "";
      this.contactMeForm.message = "";
      this.contactMeForm.created = "";
    }
    ,inOutOfFocus(isInFocus){
      if(isInFocus === 1 && this.accessingFromPhone) this.expandSection=true
      else { 
        this.expandSection=false
        
      }
      

    }
  },
  computed: {
    accessingFromPhone: function(){
       return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }
  },
  mounted() {
    
  },
  watch: {
      
  }
};
</script>

<style>
.contact-me-section {
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  grid-template-rows: 2fr 2fr 10fr 2fr;
  justify-items: center;
  align-items: center;
}
.contact-me-section-head {
  grid-column: 2/3;
  grid-row: 2/3;
  font-size: 2.4rem;
  font-weight: bolder;
  color: white;
}
.contact-me-section-form {
  justify-self: stretch;
  align-self: stretch;
  grid-column: 2/3;
  grid-row: 3/4;
  display: grid;
  grid-template-columns: 4fr 4fr;
  grid-template-rows: 1fr 1fr 4fr 1fr 1fr;
  grid-column-gap: 1vw;
  justify-items: stretch;
  align-items: center;
}
.name-input-group {
  grid-column: 1;
  grid-row: 2;
}
.email-input-group {
  grid-column: 2;
  grid-row: 2;
}
.message-input-group {
  grid-column: 1/3;
  grid-row: 3/4;
  align-self: stretch;
}
.button-submit {
  grid-column: 1/3;
  grid-row: 4;
  color: white !important;
  border-width: 3px !important;
  border-color: white !important;
  border-radius: 6px !important;
  font-weight: bold !important;
  justify-self: center;
  min-width: 16vw;
}
.button-submit:hover {
  background-color: white !important;
  color: #5652e1 !important;
}
.alert {
  grid-column: 1/3;
  grid-row: 5;
}
@media only screen and (max-width: 768px ) {
  .contact-me-section{
    grid-template-columns: 1fr;
    padding-left: 4vw;
    padding-right: 4vw;
  }
  .contact-me-section-head, .contact-me-section-form{
    grid-column: 1;
  }
  .contact-me-section-form{
    grid-column-gap: 4vw;
    grid-template-rows: 1fr 1fr 1fr 4fr 1fr;
  }
  .button-submit{
    justify-self: stretch;
    align-self: stretch;
    width: auto;
    grid-row: 5;
  }
  .alert {
  grid-column: 1/3;
  grid-row: 1;
  }
.name-input-group{
  grid-row: 2;
  grid-column: 1/3;
    
}
.email-input-group{
  grid-row: 3;
  grid-column: 1/3;
  
}
.message-input-group{
  grid-row: 4;
}
}
.contact-me-section-h200{
  height: 180vh !important;
}
</style>