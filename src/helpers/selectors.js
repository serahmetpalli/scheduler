export const getAppointmentsForDay = function (state, day) {
  const days = state.days.find((d) => d.name === day);

  if (!state.days.length || days === undefined) {
    return [];
  }

  const appointments = days.appointments.map((id) => state.appointments[id]);
  return appointments;
};

export const getInterview = function (state, interview) {
  // console.log("state.interviewers", state.interviewers);

  if (!interview) {
    return null;
  }
  return {
    ...interview,
    interviewer: state.interviewers[interview.interviewer],
  };
};

export const getInterviewersForDay = function (state, day) {
  // find all interview records with name = day
  const records = state.days.find((d) => d.name === day);
  // console.log(found);
  // quit if no days or records found
  if (state.days.length === 0 || records === undefined) return [];
  // handle no interviewers (if test data is missing)
  if (!records.interviewers) return [];
  // return array of interviewers
  return records.interviewers.map((id) => state.interviewers[id]);
};
