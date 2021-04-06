import React, { useState } from "react";
import "./Component.css";

const ContactForm = () => {
  const [status, setStatus] = useState("Lähetä");
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
    setStatus("Lähetä");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="tausta">
      <div className="divi">
        <div className="sisältö">
          <h3>Ota yhteyttä:</h3>

          <div className="formi">
            <form onSubmit={handleSubmit}>
              <div>
                {" "}
                <label htmlFor="name">Nimi:</label>{" "}
                <input type="text" id="name" required />
              </div>
              <div>
                {" "}
                <label htmlFor="phone">Puhelin:</label>
                <input type="tel" id="phone" />
              </div>

              <div>
                <label htmlFor="email">Email:</label>{" "}
                <input type="email" id="email" required />
              </div>
              <div>
                <label htmlFor="message">Viestisi:</label>
                <textarea id="message" required />
              </div>
              <button type="submit">{status}</button>
            </form>
          </div>

          <div>
            <p className="tiedot">
              {" "}
              <strong>TETSUA rakennus</strong>
              <br></br>
              Ville Sinkkonen
              <br></br>
              <i class="fas fa-phone-alt">
                {" "}
                <a href="tel:+358504049421">050-404 9421</a>
              </i>
              <br></br>{" "}
              <a href="mailto:tetsuarakennus@gmail.com">
                tetsuarakennus@gmail.com
              </a>
              <br></br>
              <a
                rel="noreferrer"
                id="insta"
                href="https://www.instagram.com/tetsuarakennus/"
                target="_blank"
              >
                <i class="fab fa-instagram fa-2x"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
