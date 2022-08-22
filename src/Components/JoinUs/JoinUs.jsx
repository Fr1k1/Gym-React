import React, { useRef } from "react";
import "./JoinUs.css";
import emailjs from "@emailjs/browser";

const JoinUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hdkrryu",
        "template_9de3j0r",
        form.current,
        "Z_0-Cs6CmcZEESvvj"
      )
      .then(
        (result) => {
          alert("Uspjesno poslano");
          window.open("index.html", "_self");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span class="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span class="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form
          ref={form}
          action=""
          className="email-container"
          onSubmit={sendEmail}
        >
          <input type="email" name="user_email" placeholder="Unesite EMAIL" />
          <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
