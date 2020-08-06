import React from "react";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem/index";
import Input from "../../components/input";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available teachers.">
        <Input type="text" name="subject" label="Biology" />
        <Input type="text" name="week_day" label="Week Day" />
        <Input type="text" name="time" label="Hour" />
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
