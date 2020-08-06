import React from "react";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem/index";
import Input from "../../components/input";
import Select from "../../components/Select";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available teachers.">
        <form action="" id="search-teachers">
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
          <Select
            name="week_day"
            label="Week Day"
            options={[
              { value: "0", label: "Monday" },
              { value: "1", label: "Tuesday" },
              { value: "2", label: "Wednesday" },
              { value: "3", label: "Thursday" },
              { value: "4", label: "Friday" },
              { value: "5", label: "Saturday" },
              { value: "6", label: "Sunday" },
            ]}
          />
          <Input type="time" name="time" label="Hour" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
