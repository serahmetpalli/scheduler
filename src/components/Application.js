import React, {useState, useEffect} from "react";
import "./Appointment";
import "./Application.scss";
import DayList from "./DayList.js";
import Appointment from "./Appointment";
import axios from "axios";
import {
  getAppointmentsForDay,
  getInterviewersForDay,
  getInterview,
} from "helpers/selectors";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: [],
    interviewers: [],
  });

  const setDay = (day) => setState({...state, day});
  // const setDays = (days) => setState((prev) => ({...prev, days}));

  useEffect(() => {
    const promise1 = axios.get("/api/days");
    const promise2 = axios.get("/api/appointments");
    const promise3 = axios.get("/api/interviewers");

    Promise.all([promise1, promise2, promise3]).then((res) => {
      // console.log("res from promise: ", res[2].data);
      setState((prev) => ({
        ...prev,
        days: res[0].data,
        appointments: res[1].data,
        interviewers: res[2].data,
      }));
    });
  }, []);

  function bookInterview(id, interview) {
    // console.log("YAYYY WE GOT HERE!", id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: {...interview},
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    setState({
      ...state,
      appointments,
    });
  }

  const appointmentsData = getAppointmentsForDay(state, state.day);

  const interviewers = getInterviewersForDay(state, state.day);

  const appointments = appointmentsData.map((appointment) => {
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
      />
    );
  });

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
