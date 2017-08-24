import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',

})
export class ContactComponent  {
  honorific;
  reason;


  handleSubmit(e) {
    e.preventDefault()
  }

  // storeAsJson(e) {
  //   e.preventDefault();
  //   let submission = {
  //     honorific: this.honorific,
  //     firstName: document.getElementById("firstName").value,
  //     surname: document.getElementById('surname').value,
  //     dob: document.getElementById("dob").value,
  //     email: document.getElementById("email").value,
  //     contactReason: this.reason,
  //     message: document.getElementById("message").value
  //   }
  //   // Client.addToContactForm(submission);
  //   let myJSON = JSON.stringify(submission);
  //   localStorage.setItem("testJSON", myJSON);
  //   document.getElementById("contactForm").reset();
  // }

  outputJson() {
    let text = localStorage.getItem("testJSON");
    let submission = JSON.parse(text);

    document.getElementById("comments").innerHTML += submission.honorific + " "
    + submission.surname + " said:<br>"
    + submission.message +"<br> <br>";
  }

  getHonorific(e){
    this.honorific = e.target.value;
    console.log(e.target.value);
  }

  getReason(e){
    this.reason = e.target.value;
    console.log(e.target.value);
  }

};
