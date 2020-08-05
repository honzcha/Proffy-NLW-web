import React from "react";

import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://randomuser.me/api/portraits/men/15.jpg"
          alt="Profile1"
        />
        <div>
          <strong>Professor Name1</strong>
          <span>Subject</span>
        </div>
      </header>

      <p>
        Master many with we gloated purple thy maiden, god bust followed burden
        blessed at friends floor me, and suddenly lattice.
        <br />
        <br />
        Thy nor yet sins climes know to given, it to.
      </p>

      <footer>
        <p>
          Price/Hour
          <strong>$20.00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Get in touch
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
