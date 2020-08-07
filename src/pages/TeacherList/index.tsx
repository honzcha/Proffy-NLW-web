import React, { useState, FormEvent } from "react";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem/index";
import Input from "../../components/input";
import Select from "../../components/Select";
import api from "../../services/api";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available teachers.">
        <form action="" id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
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
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
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
          <Input
            type="time"
            name="time"
            label="Hour"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <button type="submit">Search</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
