export const getAppointmentsForDay = function (state, day) {
  const days = state.days.find((d) => d.name === day);

  if (!state.days.length || days === undefined) {
    return [];
  }

  const appointments = days.appointments.map((id) => state.appointments[id]);
  return appointments;
};

export const getInterview = function (state, interview) {
  console.log("state.interviewers", state.interviewers);

  if (!interview) {
    return null;
  }
  return {
    ...interview,
    interviewer: state.interviewers[interview.interviewer],
  };
};

export const getInterviewersForDay = function (state, day) {
  const appts = getAppointmentsForDay(state, day);

  const interviewersForDay = appts
    .filter((appt) => appt.interview)
    .map(
      (appointment) => state.interviewers[appointment.interview.interviewer]
    );

  return interviewersForDay;
};
