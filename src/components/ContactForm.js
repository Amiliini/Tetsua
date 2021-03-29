import React, { useState } from "react";
import "./Component.css";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, phone, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="tausta">
      <div className="divi">
        <div className="sisältö">
          {" "}
          <p>
            TETSUA rakennus on Pirkanmaan alueella palveleva rakennusyritys.
            Olen aloittanut yrittäjänä vuoden 2020 alussa. Rakennusalasta on
            kertynyt monipuolinen osaaminen 13 vuoden aikana erilaisissa
            kohteissa, aina pienestä pintaremontista vauriokorjausten kautta
            uudisrakentamiseen. Uudisrakentamisesta, joka on lähinnä sydäntäni
            löytyy kokonaisvaltaista osaamista niin omakotitaloista kuin
            autotalleista.
            <h3>Ota yhteyttä:</h3>
          </p>
          <p>
            {" "}
            <strong>TETSUA rakennus</strong>
          </p>
          <p> Ville Sinkkonen</p>
          <p>
            <i class="fas fa-phone-alt">
              {" "}
              <a href="tel:+358504049421">050-404 9421</a>
            </i>
          </p>
          <p>
            {" "}
            <a href="mailto:tetsuarakennus@gmail.com">
              tetsuarakennus@gmail.com
            </a>
          </p>
          <p>
            <a
              rel="noreferrer"
              id="insta"
              href="https://www.instagram.com/tetsuarakennus/"
              target="_blank"
            >
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" required />
            </div>
            <button type="submit">{status}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
