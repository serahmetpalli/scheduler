import React, {useState, useEffect} from "react";
import "./Appointment";
import "./Application.scss";
import DayList from "./DayList.js";
import Appointment from "./Appointment";
import axios from "axios";
import {getAppointmentsForDay} from "helpers/selectors";

// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },

//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       },
//     },
//   },

//   {
//     id: 3,
//     time: "2pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       },
//     },
//   },

//   {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       },
//     },
//   },

//   {
//     id: 5,
//     time: "4pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       },
//     },
//   },
// ];

// const days = [
//   {
//     id: 1,
//     name: "Monday",
//     spots: 2,
//   },
//   {
//     id: 2,
//     name: "Tuesday",
//     spots: 5,
//   },
//   {
//     id: 3,
//     name: "Wednesday",
//     spots: 0,
//   },
// ];

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: [],
    interviewer: [],
  });

  const setDay = (day) => setState({...state, day});
  // const setDays = (days) => setState((prev) => ({...prev, days}));

  useEffect(() => {
    const promise1 = axios.get("/api/days");
    const promise2 = axios.get("/api/appointments");
    const promise3 = axios.get("/api/interviewers");

    Promise.all([promise1, promise2, promise3]).then((res) => {
      console.log("res from promise: ", res[2].data);
      setState((prev) => ({
        ...prev,
        days: res[0].data,
        appointments: res[1].data,
      }));
    });
  }, []);

  const appointmentsData = getAppointmentsForDay(state, state.day);

  const appointments = appointmentsData.map((appointment) => (
    <Appointment key={appointment.id} {...appointment} />
  ));

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />{" "}
        </nav>{" "}
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>{" "}
      <section className="schedule">
        {appointments}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
