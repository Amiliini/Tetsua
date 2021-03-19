import React from "react";
import "./Component.css";

function Home() {
  return (
    <div className="tausta">
      <div className="divi">
        <div className="sisältö">
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
  );
}

export default Home;
