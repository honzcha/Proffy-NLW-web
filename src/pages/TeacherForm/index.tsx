import React from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";
import Input from "../../components/input";

import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="It is GREAT you want to give classes!"
        description="The first step is to fill the form below"
      />

      <main>
        <fieldset>
          <legend>Your Info</legend>

          <Input type="text" name="name" label="Full Name" />
          <Input type="text" name="avatar" label="Avatar" />
          <Input type="text" name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="About" />
        </fieldset>

        <fieldset>
          <legend>Your Info</legend>
          <Select
            name="subject"
            label="Subject"
            options={[
              { value: "Arts", label: "Arts" },
              { value: "Biology", label: "Biology" },
              { value: "Math", label: "Math" },
              { value: "English", label: "English" },
              { value: "Economics", label: "Economics" },
              { value: "History", label: "History" },
            ]}
          />
          <Input type="text" name="cost" label="Cost per hour" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Important" />
            Important <br />
            Fill in all the information
          </p>
          <button type="button">Save</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
